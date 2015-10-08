# router-datas
`routes/datas.js`
> 数据路由

## methods
-------------------

### /list

> 获取数据list，可按分类获取

`parameter`

* `Url param` pageNum - - default 1 `optional`

* `Url param` pagesize - - default 60 `optional`

* `Url param` category - - 默认是全部 ,这个值是传分类的id还是name有待商榷 `optional`

`return`

* `Json` 
```js
- {
	 status: 'success',
	 datas: [{
		 _id: 'id',
		 title: 'title',
		 fav: 0,
		 like: 0,
		 download: 0,
		 coment: 0,
		 created_by: {
			 _id: 'id',
			 name: 'username',
		 }
	 }]
}
```

### /details/:id

> 数据details页面

`parameter`

* `Strinig` id - - 数据id

`return`

* `Json` 
```js
- {
	 status: 'success',
	 datas: {
		 _id: 'id',
		 created_by: {
			 _id: 'id',
			 name: 'username',
			 followed: 0
		 },
		 like: 0,
		 fav: 0,
		 viewed: 0,
		 download: 0,
		 title: 'title',
		 size: [0, 0, 0],
		 source: 'scan',
		 print: 'H',
		 category: {
			 _id: 'id',
			 title: 'category title'
		 },
		 release_on: Date.now(),
		 score: {
			 size: 0,
			 avg: 0
		 },
		 file: [{
			 _id: 'file_id',
			 title: 'file title'
		 }],
		 image: [{
			 _id: 'img_id',
			 title: 'img title'
		 }],
		 tags: [{
			 _id: 'tag id',
			 title: 'tag title'
		 }],
		 desc: 'data desc'
	 }
}
```

### /related/:cate_id

> 获取同分类的模型，可用于details页

`parameter`

* `String` cate_id - - 分类的id

* `Url param` exlude_id - 返回的数据中不包含这些id 对应的数据

`return`

* `Json` 
```js
- {
	 status: 'success',
	 datas: [{
		 _id: 'id',
		 title: 'title',
		 viewed: 0,
		 download: 0
	 }, ]
}
```

`example`

```
		$.get("BADE_URL/cate_id?exlude_id[0]=id0&exlude_id[1]=id1&exlude_id[0]=id2")
```

### /recommend

> 拉取推荐数据,默认12个

`parameter`

* `Number` size - - defaut 12

`return`

* `Json` 
```js
- {status,datas:[{_id,title}]}
```

### /issue

> 发布数据

`parameter`

* `Body param` params - - 待定

`return`

### /user

> 获取用户的作品，用于detail页面及用户的个人主页中的作品

`parameter`

`return`

