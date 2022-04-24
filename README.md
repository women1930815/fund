# 基金项目开发 

### 目录结构

> ├── App.vue
> ├── Mixins     混入公共方法变量 
> ├── README.md
> ├── basics     基础样式及js
> ├── components 组件库
> ├── config   系统配置
> ├── index.html
> ├── lib   vue插件引入
> ├── main.js
> ├── manifest.json
> ├── pages
> ├── pages.json
> ├── static  静态资源文件
> ├── store  vueX状态库
> ├── uni.scss  系统风格常量文件配置
> └── utils   常用工具类库 （请求、弹窗、过滤器..）



### 项目基础使用

> 基础架构搭建
> 组件命名规范 Fund-xx.vue 无需引入 已全局配置
> 全局引入请求弹窗配置 工具类库按需引入 index.html 开启默认动画加载
>
> 请求方式如下  get post 
> `this.$axios.get(url, {code}, true).then(res => {
		let {data} = res
	})` 
	
	Scss函数计算屏幕尺寸 px转换为rpx像素  2倍图 设计稿为 414  使用如下  px(5) 
	
	`@function px($total) { 
	  @return  ((828 * $total) / 414) + rpx; 
	}`