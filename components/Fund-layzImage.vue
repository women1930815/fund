<template>
	<image @load="loadImg" @error="loadErr" :data-src="dataSrc" :src="src" :mode="mode" />
</template>

<script>
	// 图片懒加载简易
	let loadPath = "/static/loading.gif";
	let errPath = "/static/error.jpg";
	import config from '../config/index.js'
	export default {
		name: "layz-image",
		props: {
			mode: {
				type: String
			},
			dataSrc: {
				type: String
			},

		},
		data() {
			return {
				src: loadPath,
				init: false,
			}
		},
		methods: {
			loadErr() {
				this.setImage(errPath)
			},
			loadImg(result) {
				// 设置阀值 避免重复调用
				if (this.init) return;
				let {
					src
				} = result.currentTarget.dataset;
				let img = new Image();
				// 给临时图片设置真实的路径
				img.src = src;
				// 给临时图片绑定onload事件
				img.onload = ()=> {
					// 将真实地址传给options中的images对象
					this.setImage(src)
				}
				// 如果加载失败，绑定onerror
				img.onerror = ()=> {
					// 配置一张404图片
					this.loadErr();
				}
			},
			setImage(src) {
				this.src = src;
				this.init = true;
			},
		}
	}
</script>

<style lang="scss">

</style>
