---
layout: post
title: การแทนตัวอักษรภาษาไทยในระบบการเข้ารหัสแบบต่างๆ 

description: 

category: articles
tags: [thai, unicode, ascii]
language: th
---

โดยปกติแล้ว ตัวอักษรในภาษาอังกฤษนั้นจะจัดเก็บอยู่ในลักษณะของ [ASCII](http://en.wikipedia.org/wiki/ASCII) คือ 8 bit หรือ 1 byte หรือก็คือจะต้องใช้ข้อมูล 8 bit(เลขฐานสอง 8 ตัว) ในการแทนการแสดงผลตัวอักษรภาษาอังกฤษหนึ่งตัว เช่น ตัวอักษรเอพิมพ์ใหญ่ (A) นั้นมี ASCII คือ 65 หรือ 1000001 ในเลขฐานสอง เป็นต้น [สามารถดูตาราง ASCII ทั้งหมดได้ที่่](http://www.ascii-code.com/) 

การแสดงผลภาษาอื่นๆ บนการเข้ารหัส(encode) แบบ ASCII นั้นทำได้ แต่จะขึ้นอยู่กับระบบปฏิบัติการ(OS) และใช้ในวงแคบ เช่น ใน Windows จะใช้การเข้ารหัสแบบ [Windows 874](https://msdn.microsoft.com/en-us/goglobal/cc305142.aspx) ซึ่งใช้ได้เฉพาะ Windows เท่านั้น หรือการเข้ารหัสแบบ [TIS-620](http://www.nectec.or.th/it-standards/std620/std620.htm) ที่ใช้ในวงแคบ ถ้าไม่ได้มีการติดตั้งเครื่องมือสำหรับการอ่าน TIS-620 ไว้ เช่น การเข้าเว็บภาษาไทยจากคอมพิวเตอร์ต่างประเทศ ก็จะทำให้ไม่สามารถแสดงผลภาษาไทยได้ถูกต้อง

และเพื่อการใช้งานเป็นสากล ไม่ขึ้นอยู่กับระบบปฏิบัติการ(OS) จึงมีการคิดค้น [Unicode](http://www.unicode.org/standard/WhatIsUnicode.html)

> Unicode provides a unique number for every character,

> no matter what the platform,

> no matter what the program,

> no matter what the language.

ภาษาไทยเป็นภาษาที่ต้องใช้ของการเข้าหัสภาษาเพื่อแสดงผลตัวอักษรภาษาไทยแต่ละตัว โดยส่วนมากแล้ว ภาษาไทยที่เป็นตัวอักษรแบบ Unicode หรือภาษาที่มีหลายตัว(Ascii code) ต่อตัวอักษรในภาษานั้นๆ

http://unicode-table.com/th/
