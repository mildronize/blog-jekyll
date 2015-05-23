---
layout: post
title: ปัญหาการพิมพ์ภาษาไทยบน Atom Editor

description: อธิบายปัญหาของการพิมพ์ภาษาไทย หรือภาษาที่เป็นตัวอักษรแบบ Unicode หรือภาษาที่มีหลายตัว(Ascii code) ต่อตัวอักษรในภาษานั้นๆ ซึ่งก็คือ cursor นั้นไม่ตรงกับแสดงผล

category: articles
tags: [atom, editor, unicode, cursor, problem, positioning, multi-byte, incorrect, character, thai]
language: th
---
 
บทความนี้เป็น บทความแรกที่ผมเขียนเป็นภาษาไทย จริงๆ แล้วจะพยายามเขียนทั้งสอง ภาษา (ไทยและอังกฤษ) เพื่อเป็นการฝึกฝนเรื่องภาษาของตนเอง และเพื่อที่จะทดสอบการเขียนบทความเป็นภาษาไทย บน Jekyll ก่อนที่จะเปลี่ยนเว็บบล็อคนี้เป็น [แบบหลายภาษา (multi language)]({{site.baseurl}}notes/my-blog-dev/#next-plans)

## ปัญหาที่พบ
ปัญหาที่ผมพบในการพิมพ์ภาษาไทยบน [Atom Editor](https://atom.io) คือ cursor ที่แสดงผลขณะกำลังพิมพ์นั้นไม่ตรงกับ สิ่งที่แสดงผลจริงๆ 

![]({{site.baseurl}}{{site.image_url}}2015-05-23-thai-typing-in-atom-editor.gif)

หลังจากผมได้พบกับปัญหานี้ผมได้ ไปค้นหาปัญหานี้ใน google ผลปรากฏว่าได้มีคนที่ประสบปัญหาแบบเดียวกันกับผม ซึ่งตอนนี้ได้มีคนไปตั้งประเด็นนี้ไว้ใน Github ของ Atom Editor แล้ว ใน [Some unicode characters seem to confuse Atom #1849](https://github.com/atom/atom/issues/1849) ตั้งแต่ปี 2557 ซึ่งตอนนี้ (ณ วันที่เขียนบทความนี้) ยังไม่ได้แก้ไขปัญหานี้ได้

## ลักษณะของปัญหา

โดยภาษาไทยเป็นการเข้ารหัส เพื่อการแสดงผลแบบ Unicode ซึ่งจะใช้ข้อมูลหลายๆ byte ในการแทนตัวอักษรภาษาไทยหนึ่งตัว และด้วยเหตุนี้ Atom editor ไม่สามารถแยกแยะได้ว่าตัวอักษรภาษาไทยแต่ละตัวนั้น สิ้นสุดที่อักขระ(byte) ตัวไหนจึงทำให้การแสดงผลตำแหน่ง cursor มีการผิดพลาดเกิดขึ้น

เพื่อความเข้าใจมากยิ่งขึ้น สามารถอ่านคำอธิบาย [การแทนตัวอักษรภาษาไทยในระบบการเข้ารหัสแบบต่างๆ]({{site.baseurl}}articles/2015/05/24/thai-encoding/) เพิ่มเติมได้

## คำที่เกี่ยวข้อง
- [Error when I put my cursor to the text](https://github.com/atom/atom/issues/6413)
- [Cursor positioning on certain Unicode characters](https://github.com/atom/atom/issues/3498)
- [incorrect cursor placement on lines with accented characters](https://github.com/atom/atom/issues/5975)
- [wrong cursor location with multi-byte characters](https://github.com/atom/atom/issues/4595)

