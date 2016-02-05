---
layout: post
title: Simple soap client and simple server via flask
description: Using python to get current oil price in Thailand via SOAP and response in JSON format.
tags: [soap, soap-client, python, python3, flask, suds-jurko, script, programming]
categories: [en]
---

## Objective:
To get current oil price in Thailand via SOAP and response in JSON format.
SOAP Server URL for this scirpt: [http://www.pttplc.com/webservice/pttinfo.asmx?WSDL]

## Prerequisite:
- Python 3.4
- flask
- flask-cors
- suds-jurko
- xmltodict

{% gist 56a35fb6d26d0e9002a1 %}

[http://www.pttplc.com/webservice/pttinfo.asmx?WSDL]: http://www.pttplc.com/webservice/pttinfo.asmx?WSDL
