---
layout: post
title: React Patterns
tags:	
- react
- pattern
- javascript
- es6

categories: [en]
language: en
image: https://www.dropbox.com/s/9u7jxihxp12n06w/2019-03-13-react-pattern.jpg?raw=1
---

**Outline** 

- react
- state management 
  - data flow
  - 

Styleguide Airbnb https://github.com/airbnb/javascript/tree/master/react

React in pattern https://github.com/krasimir/react-in-patterns



## React Web Application Design

Nowaday, we have many appoaches to design the composition of react component.

Here is one of approaches to design

**Preparation**

1. Use Airbnb Styleguide for consistency code style
2. Use popular React boilerplate (`create-react-app`) for reducing complexiity to manage build tools such as webpack, babel, etc.

**Basic Design** 

1. Start with a few React component for reducing the complexity in state management.
2. Break the code down to component when necessary, if it feel easier.
3. The component can break into 2 parts: **Container Component** and **Presentional Component**, when necessary.
   1. Container Component 
   2. Presentational Component

**Advanced Design: Reusable Components**

1. Break the code down to component if you want to reuse the components.
2. Use High-order Component when necessary.



# Vitamin C

- 



## State Management

1. Passing Props
2. Using top component for storing state
3. Using simple state mangement library
   1. I use [pure-store](https://github.com/gunn/pure-store), other approches please see [React State Musuem](https://github.com/GantMan/ReactStateMuseum)
   2. 


Alternative, you can use MVC approach if you familiar, however, in my opinion using MVC on react 



P.S. Suggestions are welcome



