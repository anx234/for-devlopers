---
title: 'precss list component'
date: 'May 5, 2021'
excerpt: 'Django is a very powerful, high level Python framework for building web applications'
cover_image: '/images/posts/img3.jpg'
category: 'CSS'
tags: ['markdown', 'code', 'features']
author: 'Sam Smith'
author_image: 'https://randomuser.me/api/portraits/men/12.jpg'
---


## 横スクロールする要素を調べる

```js
var w = document.documentElement.clientWidth
$$("*").forEach(v => {
v.style.outline = '1px solid red'
 if (w < v.clientWidth) {
   console.log(v)
 }
})

```