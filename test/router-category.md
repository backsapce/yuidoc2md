# router-category
`routes/category.js`
> 分类路由

## methods
-------------------

### /recommend

> 网站分类推荐，用于获取首页的推荐分类。

`parameter`

* `Url param` size - - default 6 `optional`

`return`

* `Json` 
```js
- {
	 status: 'success',
	 datas: [{
		 _id: 'id',
		 is_big: true/false,
		 unique_name: 'fadfads',
		 title: 'title'
	 },]}
```

### /all

> 获取所有分类,不带参数，获取所有分类，带上级分类的id，则获取这个分类的所有子类

`parameter`

* `Url param` id - - 一级分类的id `optional`

`return`

* `Json` 
```js
- {
	 status: 'success',
	 datas: [{
		 _id: 'id',
           unique_name: 'fadfads',
		 title: 'category name',
		 sub: [{
				 _id: 'id',
           unique_name: 'fadfads',
				 title: 'sub category'
			 }]
	 }]}
```

### /search

> 获取所有搜索分类
默认是下载量及用户浏览量最大的各3个，如果取不足则由后台推荐的搜索分类进行补足

`parameter`

`return`

* `Json` 
```js
- {
	 status: 'success',
	 datas: [{
		 _id: 'id',
           unique_name: 'fadfads',
		 title: 'category name',
		 sub: [{
				 _id: 'id',
           unique_name: 'fadfads',
				 title: 'sub category'
			 }]
	 }]}
```

