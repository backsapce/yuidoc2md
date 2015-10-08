# router-account
`routes/account.js`
> 账户相关，包括登录，注册，密码找回，第三方登录
这部分应该是未来需要走https的

## methods
-------------------

### /sign_in

> 登录

`parameter`

* `Body param` username - 

* `Body param` password - 

`return`

* `Json` 
```js
{
	 status: 'success',
	 datas: {
		 session_token: 'session_token'
	 }
}
```

### /sign_up

> 注册 , 可用邮箱或者短信注册，需要在前端进行两次密码验证

`parameter`

* `Body param` username - 

* `Body param` password - 

`return`

* `Json` 
```js
{
	 status: 'success',
	 datas: {
		 sessionId: 'session id'
	 }
}
```

`example`

```js
	 //status : success 成功； exists 用户已存在  error 系统异常
```

### /logout

> 注销

`parameter`

* `Url param` _token - - 用户token

`return`

* `Json` 
```js
{
	 status: 'success',
	 datas:''
}
```

### /reset_pw

> 密码找回

`parameter`

* `Url param` username - - 是电话号码或者邮箱号码

`return`

* `Json` 
```js
{
	 status: 'success',
	 datas: ''
}
```

