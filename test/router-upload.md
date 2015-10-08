# router-upload
`routes/upload.js`
## methods
-------------------

### /

> 用户上传get

`parameter`

`return`

### /

> 用户上传post

`parameter`

`return`

### /user

> 获取用户的上传列表，用于本次上传，用户未发布的及用户所有的上传

`parameter`

* `undefined` userId - 用户id

* `Url param` pageNum - default 20 `optional`

* `Url param` pageSize -  `optional`

* `Url param` userId - - default current acction user id `optional`

`return`

* `Json` 
```js
-{
	 status: 'success',
	 datas: [{
		 id: 'data id',
		 title: 'data title',
		 thumb: {
			 id: 'thumb id',
			 title: 'thumb title'
		 },
		 size: 0,
		 upload_on: Date.now(),
		 status: 'finished'
	 }]
}
```

