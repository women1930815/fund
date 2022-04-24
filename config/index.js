import Vue from 'vue';
let mode = process.env.NODE_ENV === 'development' ? true : false;
export default {
	/**
	 * @description api请求基础路径
	 */
	baseUrl: {
		//
		dev: mode ? 'http://zdwht.natapp1.cc' : `http://${location.host}`, // 开发环境的地址
	},
	/**
	 * @description 系统版本号
	 * */
	version: '1.0.0',
	/**
	 * @description 系统名称
	 * */
	name: '五色心光',
	/**
	 * @description 微信SDK 传给RD url
	 * */
	urlHref: encodeURIComponent(window.location.href.split("#")[0]),
	/**
	 * @description 超时时间设置
	 * */
	timeOut: 1000 * 30
}
