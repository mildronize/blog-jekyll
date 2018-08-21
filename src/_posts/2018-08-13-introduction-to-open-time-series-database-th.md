---
layout: "post"
title: "รู้จักกับฐานข้อมูลอนุกรมเวลา OpenTSDB กันเถอะ"
categories: [th]
tags:
    - OpenTSDB
    - HBase
    - Time series
    - Database
---

สวัสดีครับ ผมชื่อมายนะคับ เนื่องจากผมทำวิทยานพินธ์ปริญญาโท เกี่ยวกับการปรับปรุงประสิทธิภาพของฐานข้อมูลอนุกรมเวลา OpenTSDB และบ้านเราก็ยังไม่ค่อยมีคนพูดถึงเรื่องนี้เท่าไหร่นัก ถือว่าเป็นโอกาสดีที่จะนำความรู้มาแบ่งปันกันครับ

> ถ้าใครยังไม่รู้จักกับฐานข้อมูลอนุกรมเวลา (Time Series Database) หรือยังใหม่สำหรับเรื่องนี้ หรือสามารถตามอ่านได้ในบทความก่อนหน้านี้ครับ 

> [ทำไมเราถึงควรใช้ฐานข้อมูลอนุกรมเวลาสำหรับ "ข้อมูลอนุกรมเวลา" (Time Series Database)](/th/introduction-to-time-series-database-th/)

## TL;DR (ยาวไปไม่อ่าน):
[OpenTSDB](http://opentsdb.net) คือฐานข้อมูลอนุกรมเวลา Open Source บนฐานข้อมูล [HBase](https://hbase.apache.org) 

**สรุปความสามารถเด่นๆ ดังนี้**

- สามารถขยายตัวได้ (Scalablity) และมีความคงทนของข้อมูลสูงอีกด้วย ( Availability) สรุปง่ายๆ คือ อาศัยความสามารถของ HBase และ Hadoop เป็นจุดเด่น
- เหมาะสำหรับข้อมูลอนุกรมเวลาขนาดใหญ่
- 1 data point จัดเก็บได้เฉพาะ เวลา (timestamp) และตัวเลข (ค่าของข้อมูล)
- การ Query มี syntax เป็นของตัวเองผ่าน HTTP API
- สามารถทำ post processing ได้เช่น downsampling, rate, interoperation

---

## OpenTSDB (Open Time series database)
![https://www.dropbox.com/s/2zprjjijpfo8y1t/2018-08-13-%E0%B8%A3%E0%B8%B9%E0%B9%89%E0%B8%88%E0%B8%B1%E0%B8%81%E0%B8%81%E0%B8%B1%E0%B8%9A%E0%B8%90%E0%B8%B2%E0%B8%99%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B8%AD%E0%B8%99%E0%B8%B8%E0%B8%81%E0%B8%A3%E0%B8%A1%E0%B9%80%E0%B8%A7%E0%B8%A5%E0%B8%B2%20OpenTSDB%20%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B9%80%E0%B8%96%E0%B8%AD%E0%B8%B0-3.jpg?dl=0](https://www.dropbox.com/s/2zprjjijpfo8y1t/2018-08-13-%E0%B8%A3%E0%B8%B9%E0%B9%89%E0%B8%88%E0%B8%B1%E0%B8%81%E0%B8%81%E0%B8%B1%E0%B8%9A%E0%B8%90%E0%B8%B2%E0%B8%99%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B8%AD%E0%B8%99%E0%B8%B8%E0%B8%81%E0%B8%A3%E0%B8%A1%E0%B9%80%E0%B8%A7%E0%B8%A5%E0%B8%B2%20OpenTSDB%20%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B9%80%E0%B8%96%E0%B8%AD%E0%B8%B0-3.jpg?raw=1)

OpenTSDB คืออะไร หน้าเว็บหลักเค้าบอกว่าแบบนี้คับ

> The Scalable Time Series Database  
> Store and serve massive amounts of time series data without losing granularity.  

OpenTSDB ก็คือฐานข้อมูลที่เหมาะสำหรับการเก็บข้อมูลอนุกรมเวลาขนาดใหญ่บนฐานข้อมูล HBase ซึ่งสืบทอดความสามารถของ 
HBase ซึ่งอยู่ในระบบนิเวศของ Hadoopโดย HBase
มีความสามารถในการจัดเก็บข้อมูลแบบกระจายตัวที่มีความสามารถในการขยายตัวได้ 

อีกทั้งยังมีความคงทนของข้อมูลสูงอีกด้วย
OpenTSDB ถูกพัฒนาสำหรับจัดการงานทั่วๆไป 
ในการทำระบบตรวจการคอมพิวเตอร์  (Monitoring)
โดยเก็บข้อมูลอนุกรมเวลา 
และรวบรวมหลายๆ อนุกรมเวลาจากระบบคอมพิวเตอร์  เช่น 
สถานะของระบบเครือข่าย 
ปริมาณงานของหน่วยประมวลผล 
ข้อมูลของระบบปฏิบัติการ เป็นต้น

อีกทั้ง OpenTSDB ยังให้บริการ HTTP API 
สำหรับการบันทึกและอ่านค่าข้อมูลอนุกรมเวลา 
และข้อมูลอนุกรมเวลานั้นสามารถนำไปแสดงผลเป็นรูปแบบกราฟ โดย OpenTSDB 
มีส่วนเชื่อมต่อกับผู้ใช้พื้นฐานไว้สำหรับแสดงผลอนุกรมเวลา

หนึ่งในคุณลักษณะของ OpenTSDB คือการเก็บจุดข้อมูลทั้งหมด 
ซึ่งไม่เหมือนบางฐานข้อมูล
ยกตัวอย่างเช่น [RDDtool](https://oss.oetiker.ch/rrdtool/)
มักจะถูกใช้ในงานประเภทการตรวจการระบบคอมพิวเตอร์ 
โดยฐานข้อมูลจะลดจำนวนจุดที่มีเวลาบันทึกนานมาแล้ว
โดยการเอามารวมกัน เพื่อการลดพื้นที่การจัดเก็บ

ดังนั้น OpenTSDB จึงเหมาะสำหรับจัดเก็บข้อมูลเซนเซอร์หรือข้อมูล IoT  ซึ่งทุกๆ 
จุดมีประโยชน์ต่อการนำไปวิเคราะห์ข้อมูล
OpenTSDB ประกอบไปด้วยส่วนของการจัดเก็บข้อมูล 
และส่วนของการเก็บเกี่ยวข้อมูลในสภาพแวดล้อมหรือระบบที่ต้องการ
โดยส่วนของการจัดเก็บข้อมูล 

อีกทั้งฐานข้อมูล 
OpenTSDB ยังมี [Tcollector](http://opentsdb.net/docs/build/html/user_guide/utilities/tcollector.html)
ซึ่งจะถูกนำไปติดตั้งในระบบหรือสภาพแวดล้อมที่ต้องการเก็บเกี่ยวข้อมูล เพื่อทำหน้าที่ส่งข้อมูลเข้าสู่ฐานข้อมูล

### ตัวอย่างการ query 

เพื่อให้เห็นภาพมากขึ้น ขอยกตัวอย่างการ query ข้อมูลจากฐานข้อมูล OpenTSDB นะครับ

![https://www.dropbox.com/s/9f7oa9mnbfntb20/2018-08-13-%E0%B8%A3%E0%B8%B9%E0%B9%89%E0%B8%88%E0%B8%B1%E0%B8%81%E0%B8%81%E0%B8%B1%E0%B8%9A%E0%B8%90%E0%B8%B2%E0%B8%99%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B8%AD%E0%B8%99%E0%B8%B8%E0%B8%81%E0%B8%A3%E0%B8%A1%E0%B9%80%E0%B8%A7%E0%B8%A5%E0%B8%B2%20OpenTSDB%20%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B9%80%E0%B8%96%E0%B8%AD%E0%B8%B0-4.jpg?dl=0](https://www.dropbox.com/s/9f7oa9mnbfntb20/2018-08-13-%E0%B8%A3%E0%B8%B9%E0%B9%89%E0%B8%88%E0%B8%B1%E0%B8%81%E0%B8%81%E0%B8%B1%E0%B8%9A%E0%B8%90%E0%B8%B2%E0%B8%99%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B8%AD%E0%B8%99%E0%B8%B8%E0%B8%81%E0%B8%A3%E0%B8%A1%E0%B9%80%E0%B8%A7%E0%B8%A5%E0%B8%B2%20OpenTSDB%20%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B9%80%E0%B8%96%E0%B8%AD%E0%B8%B0-4.jpg?raw=1)

OpenTSDB มี Web GUI เป็นของตัวเอง และสามารถใช้ HTTP API ได้ จากรูปข้างบน เราสามารถกำหนดเวลา ตั้งต้น และสิ้นสุด และชื่อของอนุกรมเวลาได้ (ทางซ้ายมือ)

ซึ่งผลลัพธ์ก็ได้ JSON ดังรูปทางขวามือคับ ซึ่ง data point จะอยู่ในรูปแบบของ key และ value ระหว่าง timestamp และค่าของมันคับ

### Opentsdb ทำงานอย่างไร
![https://www.dropbox.com/s/9u78y13ja2da3s4/2018-08-13-%E0%B8%A3%E0%B8%B9%E0%B9%89%E0%B8%88%E0%B8%B1%E0%B8%81%E0%B8%81%E0%B8%B1%E0%B8%9A%E0%B8%90%E0%B8%B2%E0%B8%99%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B8%AD%E0%B8%99%E0%B8%B8%E0%B8%81%E0%B8%A3%E0%B8%A1%E0%B9%80%E0%B8%A7%E0%B8%A5%E0%B8%B2%20OpenTSDB%20%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B9%80%E0%B8%96%E0%B8%AD%E0%B8%B0-5.png?dl=0](https://www.dropbox.com/s/9u78y13ja2da3s4/2018-08-13-%E0%B8%A3%E0%B8%B9%E0%B9%89%E0%B8%88%E0%B8%B1%E0%B8%81%E0%B8%81%E0%B8%B1%E0%B8%9A%E0%B8%90%E0%B8%B2%E0%B8%99%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B8%AD%E0%B8%99%E0%B8%B8%E0%B8%81%E0%B8%A3%E0%B8%A1%E0%B9%80%E0%B8%A7%E0%B8%A5%E0%B8%B2%20OpenTSDB%20%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B9%80%E0%B8%96%E0%B8%AD%E0%B8%B0-5.png?raw=1)

รูปจาก[หน้าเว็บหลักของ OpenTSDB](http://opentsdb.net/overview.html)  แสดงสถาปัตยกรรมของ OpenTSDB

OpenTSDB จะสร้างตัวทำงาน ซึ่งเรียกว่า TSD (Time Series Daemon)
สำหรับจัดการงานของ OpenTSDB 
ซึ่งจะต้องมีอย่างน้อยหนึ่งตัวทำงานที่ทำงานอยู่และแต่ละตัวไม่ขึ้นต่อกัน
TSD ทำหน้าที่เป็นตัวกลางในการเชื่อมต่อระหว่างการเขียนและการอ่านของ 
OpenTSDB  กับ HBase

ซึ่ง TSD สามารถทำงานเขียนข้อมูลไปยัง HBase ผ่านทางโปรโตคอล RPC และ HTTP เช่น  ในการเก็บเกี่ยวข้อมูล (Collector) และสคริปต์ต่างๆ
อีกทั้ง TSD สามารถอ่านข้อมูลจาก HBase โดยการสอบถามข้อมูลจาก HBase
แต่ส่วนติดต่อผู้ใช้งาน TSD ใช้เฉพาะโปรโตคอล HTTP เท่านั้น

## ข้อดีของ OpenTSDB
* ทำงานเร็วกว่าฐานข้อมูลเอนกประสงค์ทั่วๆ ไปมาก
* รองรับการขยายตัวได้ดีเมื่อเทียบกับ [prometheus](https://prometheus.io/docs/introduction/comparison/#prometheus-vs.-opentsdb), [InfluxDB, Elasticsearch](http://iopscience.iop.org/article/10.1088/1742-6596/664/4/042036/pdf)
* มีการ compaction เพื่อลดขนาดของพื้นที่ที่ใช้จัดเก็บข้อมูล
* สามารถปรับจูนประสิทธิภาพได้เยอะ
* เป็น Open Source และมี Commnuity ที่โอเคพอควร

## ข้อควรระวังของ OpenTSDB
* เนื่องจากเป็นฐานข้อมูลที่ทำงานบน HBase ดังนั้นการติดตั้งและตั้งค่าอาจจะยุ่งยาก
* สามารถเก็บเวลาได้แค่ 2 หน่วยคือ วินาที และ มิลลิวินาที
* ค่าที่บันทึกได้มีแค่ตัวเลข ทศนิยมหรือจำนวนเต็ม ไม่สามารถเก็บข้อความได้
* เนื่องจากยังไม่มีมาตรฐานการออกแบบฐานข้อมูลอนุกรมเวลา ดังนั้น API การใช้งานจึงเฉพาะเจาะจงสำหรับ OpenTSDB เท่านั้น
* บางระบบอาจจะยังไม่ตอบโจทย์เพราะว่า OpenTSDB อาจจะ general เกินไป
* ยังไม่มีแคชในส่วนของการ Query ข้อมูล ซึ่งใน roadmap ของ OpenTSDB 3.0 บอกว่าจะใส่เข้ามา 

> ส่วนผมเองได้ออกแบบและพัฒนากลไกแคชสำหรับ OpenTSDB โดยใช้ Memcached ซึ่งจะปีพิมพ์ในงานประชุมวิชาการ ISCIT 2018 ด้วยครับ บล็อกหน้าจะอธิบายในส่วนถัดๆไป คับ  


**ในบทความต่อไปถัดไปจะพูดถึง**

* Internal OpenTSDB
* Asynchorous programming using deferred object ( async Hbase )
* Memcached & internal

ไว้พบกันใหม่โอกาสหน้าครับ สวัสดีครับ

## หมายเหตุ
ใช้ OpenTSDB 2.3.0 เป็นตัวอ้างอิงนะครับ