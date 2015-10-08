# router-comment
`routes/comment.js`
> 评论的接口
默认user auth token是这里所有方法的url param

## methods
-------------------

### /user

> 用户中心返回用户所有的评论

`parameter`

* `Url param` pageSize - 分页大小 默认二十条

* `Url param` pageNum - 页数

`return`

* `Json` 
```js
- {
	 status: 'success',
	 datas: [{
		 content: 'comment content',
		 created_by: {
			 _id: 'user id',
			 name: 'user name'
		 },
		 created_on: Date.now(),
	 },]}
```

### /get/:dataType/:dataId

> 获取评论
需要判断目标类型的目标对象用户是否有权限查看

`parameter`

* `undefined` dataType - 评论的目标类型，一般是数据或文章

* `undefined` dataId - 对应类型的目标id

* `Url param` pageSize - 分页大小 默认二十条

* `Url param` pageNum - 页数

`return`

* `Json` 
```js
- {
	 status: 'success',
	 datas: [{
		 content: 'comment content',
		 created_by: {
			 _id: 'user id',
			 name: 'user name'
		 },
		 created_on: Date.now(),
	 },]}
```

### /add/:dataType/:dataId

> 增加评论
需要判断目标类型的目标对象用户是否有权限查看

`parameter`

* `undefined` dataType - 评论的目标类型，一般是数据或文章

* `undefined` dataId - 数据的id

* `Body param` content - 内容

`return`

* `Json` 
```js
- {
	 status: 'success',
	 datas: ''
}
```

### /add/:dataType/:dataId

> 删除评论
需要判断目标类型的目标对象用户是否有权限查看

`parameter`

* `undefined` dataType - 评论的目标类型，一般是数据或文章

* `undefined` dataId - 数据的id

`return`

* `Json` 
```js
- {
	 status: 'success',
	 datas: ''
}
```

