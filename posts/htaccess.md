---
title: 'htaccessでできること'
date: 'May 5, 2021'
excerpt: 'Django is a very powerful, high level Python framework for building web applications'
cover_image: '/images/posts/img3.jpg'
category: 'Other'
tags: ['markdown', 'code', 'features']
author: 'Sam Smith'
author_image: 'https://randomuser.me/api/portraits/men/12.jpg'
---

<!-- Markdown generator - https://jaspervdj.be/lorem-markdownum/ -->

http://www.htaccesseditor.com/#a_basic

### フルパスを調べる

```  php
<?php
echo __FILE__;
?> 
```

## basic認証

.htaccess

``` .htaccess
AuthUserFile "/home/hogehoge/.htpasswd"
AuthName "Please enter your ID and Password." 
AuthType BASIC 
require valid-user 
```

.htpasswd

```.htpasswd
user:pass
```
