---
title: 'JavaScript dom 操作'
date: 'May 4, 2021'
excerpt: 'javascriptでの要素の取得方法'
cover_image: '/images/posts/img1.jpg'
category: 'JavaScript'
tag: ['markdown', 'code', 'features']
author: 'John Doe'
author_image: 'https://randomuser.me/api/portraits/men/11.jpg'
---

<!-- Markdown generator - https://jaspervdj.be/lorem-markdownum/ -->

## タグ名を指定して要素を取得するメソッド

### document.getElementsByTagName()
```js
const sample = document.getElementsByTagName('li');

```

速度が速い

### document.getElementById()
```js
const sample = document.getElementById('sample')
```

## ID名を指定して要素を取得するメソッド

速度が速い

### document.getElementById()
```js
const sample = document.getElementById('sample')
```


## class名を指定して要素を取得するメソッド
### document.getElementsByClassName()
```js
const sample = document.getElementsByClassName('sample')
```

## ID名とclass名どちらを入れても要素を取得出来るメソッド

取得出来る要素は一つ

### document.querySelector()
```js
const sample = document.querySelector('#sample')
```

全ての要素を取得

### document.querySelectorAll()
```js
const hoge = document.querySelectorAll('.hoge')
```



## elementからも探せる

```html
<ul class="hoge">
  <li class="foo"></li>
  <li></li>
  <li></li>
</ul>
```

```js
const sample = hoge.getElementsByClassName('foo')
```
