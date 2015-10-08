# router-score
`routes/score.js`
## methods
-------------------

### /add/:dataType/:dataId

> 收藏操作
每个数据或文章只能被收藏一次

`parameter`

* `undefined` dataType - 

* `undefined` datasId - 

`return`

* `Json` 
```js
- {
	 status: 'success'
	 datas:''
}
```

### /user/:dataType/:dataId

> 收藏过的用户列表

`parameter`

* `undefined` dataType - 

* `undefined` datasId - 

`return`

* `Json` 
```js
- {
	 status: 'success'
	 datas:''
}
```

### /list/:dataType

> 用户的收藏，用于个人主页的收藏及用户中心的收藏

`parameter`

* `undefined` dataType - 

`return`

* `Json` 
```js
- {
	 status: 'success'
	 datas:''
}
```

### /add/:dataType/:dataId

> 点赞操作
每个用户只能点一次，不管是数据、文章还是评论
{{#crossLink "router-like:/like/add/:dataType/:datasId"}}{{/crossLink}}

`parameter`

* `undefined` dataType - 

* `undefined` datasId - 

`return`

* `Json` 
```js
- {
	 status: 'success'
	 datas:''
}
```

### /get/:dataType/:dataId

> 获取目标类型对象目标的评分记录

`parameter`

* `String` dataType - - 数据id

* `String` dataId - - 数据id

`return`

* `Json` 
```js
-{
	 status: 'success',
	 datas: [{
		 _id: 'id',
		 name: 'username',
		 content: 'content',
		 score: 0,
		 created_on: Date.now()
	 }]
}
```

### /add/:dataType/:dataId

> 添加目标类型对象目标的评分记录
需要判断是否有足够的权限
	比如，如果是数据，必须是用户下载过才能评分。
对同一个目标类型的同一目标只能做一次评分

`parameter`

* `String` dataType - - 数据id

* `String` dataId - - 数据id

`return`

* `Json` 
```js
-{
	 status: 'success',
	 datas: [{
		 _id: 'id',
		 name: 'username',
		 content: 'content',
		 score: 0,
		 created_on: Date.now()
	 }]
}
```

### /my

> 我的评分记录

`parameter`

`return`

* `Json` 
```js
-{
	 status: 'success',
	 datas: [{
		 _id: 'id',
		 name: 'username',
		 content: 'content',
		 score: 0,
		 created_on: Date.now()
	 }]
}
```

