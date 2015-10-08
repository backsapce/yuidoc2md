# router-download
`routes/download.js`
## methods
-------------------

### /get/:dataId

> 获取data的下载记录

`parameter`

* `String` dataId - - 数据的id

* `Url param` pageNum - - start from 1

* `Url param` pageSize - - default 20

`return`

* `Json` 
```js
- {
	 status: 'success',
	 datas: [{
		 _id: 'id',
		 name: 'user name',
		 download_on: Date.now()
	 },]
}
```

### /user/:dataId

> 获取data的下载用户 ，返回这条数据的下载用户列表

`parameter`

* `undefined` dataId - 数据的id

* `Url param` pageNum - 

* `Url param` pageSize - 

`return`

### /my

> 获取我的下载

`parameter`

* `Url param` pageNum - 

* `Url param` pageSize - 

`return`

