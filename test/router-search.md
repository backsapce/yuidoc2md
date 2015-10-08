# router-search
`routes/search.js`
## methods
-------------------

### /

> 提供简单搜索，原理使用正则表达式匹配的方式

`parameter`

* `String` keys - - 关键字字符串(无需前端分词，只要把做trim)

* `Url param` category - - 搜索的类型范围 默认全部 `optional`

* `Url param` pageNum - - 搜索结果页码 default 1 `optional`

* `Url param` pageSize - - 分页的大小 default 20 `optional`

`return`

* `Json` 
```js
-  {
	 status: 'success',
	 datas: []
}
```

`example`

```js
		$.get('/search/keywords?category=id&pageNUm=2&pageSize=30')
```

