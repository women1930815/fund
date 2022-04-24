<template>
	<view class="end">
		<text class="end-text" :style="{color:color}">{{title}}</text>
	</view>
</template>

<script>
	// 到底提示组件
	export default {
		name : 'what-end',
		data() {
			return {
				
			};
		},
		props:{
			title: {
				type: String,
				default: '已经到底了'
			},
			color: {
				type: String,
				default: '#A6A6A6'
			},
		}
	}
</script>

<style lang="scss" scoped>
	.end {
		margin: 5rpx 0;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		text-align: center;
		padding-bottom: constant(safe-area-inset-bottom) !important; /* 兼容 iOS < 11.2 */
		padding-bottom: env(safe-area-inset-bottom) !important; /* 兼容 iOS >= 11.2 */
		&-text{
			font-size: px(14);
			color: #C0C0C0;
			position: relative;
			display: flex;
			align-items: center;
			justify-content: center;
		}
		&-text::before{
			content: "";
			width: 60px;
			height: 1px;
			display: inline-block;
			background-color: #CCCCCC;
			margin-right: 10px;
		}
		&-text::after{
			content: "";
			width: 60px;
			height: 1px;
			display: inline-block;
			background-color: #CCCCCC;
			margin-left: 10px;
		}
	}
</style>
