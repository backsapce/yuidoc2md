# router-user
`routes/users.js`
> 用户路由

## methods
-------------------

### /basic/profile

> 获取用户基本信息

`parameter`

* `Url param` userId - - defaut current userid `optional`

`return`

* `Json` 
```js
- {
	 status: 'success',
	 datas: {
		 _id: 'id',
		 name: 'user name',
		 gender: '男',
		 works_size: 0,
		 fav_size: 0,
		 follow: 0,
		 followed: 0,
		 signatrue:''
	 }
}
```

### /profile

> 获取用户完整信息

`parameter`

* `Url param` userId - - defaut current userid `optional`

`return`

* `Json` 
```js
- {
	 status: 'success',
	 datas: {
		 _id: 'id',
		 name: 'user name',
		 gender: '男',
		 works_size: 0,
		 fav_size: 0,
		 follow: 0,
		 followed: 0,
		 signatrue: '',
		 phone: '',
		 email: ''
	 }
}
```

### /

> 用户资料更新 ，统一post接口，能够修改能够有权限修改的所有资料

`parameter`

* `Body param` - - update_list

`return`

* `Json` 
```js
- {
	 status: 'success',
	 datas: ''
}
```

`example`

```js
	//可以修改的字段有
	//nickname 昵称
	//email  邮箱
	// gender 性别
	//phone  手机号码
	//avatar 头像id
	//signatrue 签名
	$.post(url,{nickname:'my name',email:'xxx@shining3d.com',phone:12345678998,avatar:'avartar id',signatrue:'my signatrue'})
```

### /follow/:userId

> 关注一个用户

`parameter`

* `undefined` userId - -  目标用户

`return`

* `Json` 
```js
- {
	 status: 'success',
	 datas:''
}
```

### /unfollow/:userId

> 取消关注一个用户

`parameter`

* `undefined` userId - - 目标用户

`return`

* `Json` 
```js
- {
	 status: 'success',
	 datas: ''
}
```

### /getFollow

> 获取我的关注列表

`parameter`

* `Url param` userId - default current account userid `optional`

* `Url param` pageSize - default 10 `optional`

* `Url param` pageNum - default 1 `optional`

`return`

### /getFollower

> 获取我的粉丝列表

`parameter`

* `Url param` userId - default current account userid `optional`

* `Url param` pageSize - default 10 `optional`

* `Url param` pageNum - default 1 `optional`

`return`

