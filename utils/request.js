import config from "../config/index.js"; // 基础配置文件 
/**
 * @description 请求类库封装 使用uni-app 自带请求
 */
export default {
	baseUrl: config.baseUrl.dev,
	imageUrl: config.baseUrl.dev + '/',
	get: function(url, data, show) {
		url += '?';
		for (let item in data) {
			url += (item + '=' + data[item] + '&');
		}
		url = url.substring(0, url.length - 1)
		let option = {
			url: url,
			method: 'get',
			dataType: 'json'
		}
		if (show) {
			uni.showLoading({
				title: '加载中...',
				mask: true
			});
		}
		return new Promise((resolve, reject) => {
			this.http(option).then(res => {
				resolve(res)
			}).catch(err => {
				reject(err)
			})
		})
	},
	post: function(url, data, show) {
		// url += '?token=' + ;
		// try {
		// 	data.token = uni.getStorageSync('token');
		// } catch (e) {
		// 	data.token = '';
		// }
		if (show) {
			uni.showLoading({
				title: '加载中...',
				mask: true
			});
		}
		let option = {
			url: url,
			method: 'post',
			dataType: 'json',
			data: data
		}
		return new Promise((resolve, reject) => {
			this.http(option).then(res => {
				resolve(res)
			}).catch(err => {
				reject(err)
			})
		})
	},
	http: function(option) {
		// 实体类
		let header = {
			'Content-Type': 'application/json',
			'Authorization': 'Bearer ' + uni.getStorageSync('token')
		}
		if (option.data && option.data.header) {
			Object.assign(header, option.data.header);
		}
		return new Promise((resolve, reject) => {
			uni.request({
				url: this.baseUrl + option.url, //仅为示例，并非真实接口地址。
				method: option.method,
				dataType: option.dataType,
				data: option.data || {},
				timeout : config.timeOut,
				header: header,
				success: (res) => {
					let ret = res.data;
					setTimeout(function() {
						uni.hideLoading()
					}, 1000)
					if (ret.code === 200) {
						resolve(ret)
					} else if (ret.code === 401) {
						try{
							uni.removeStorageSync('token');
							uni.removeStorageSync('userInfo');
						}catch(err){
							uni.removeStorageSync('token');
							uni.removeStorageSync('userInfo');
						}
						uni.redirectTo({
							url:'/package/Login'
						})
						resolve(ret);
					} else if (ret.code === 202) {
						uni.showToast({
							title: ret.msg,
							duration: 2000,
							icon: 'none'
						});
					} else {
						let msgs = ret.message;
						if (!msgs) {
							msgs = "网络异常 请重试"
						}
						uni.showToast({
							title: msgs,
							duration: 2000,
							icon: 'none'
						});
						reject(ret)
					}
				},
				fail(err) {
					setTimeout(function() {
						uni.hideLoading()
					}, 1000)
					uni.showToast({
						title: "服务异常 请联系管理员",
						duration: 5000,
						icon: 'none'
					});
					console.log(err);
				}
			});
		})
	},
	uploadFile: function(url, filePath, formData, callback) {
		url = this.baseUrl + url + '?token=' + uni.getStorageSync('token');
		uni.showLoading({
			title: '上传中...',
			mask: true
		});
		uni.uploadFile({
			url: url,
			filePath: filePath,
			name: 'file',
			formData: formData,
			success: (res) => {
				let ret = JSON.parse(res.data);
				if (ret.code == 200) {
					uni.hideLoading()
					callback(ret);
				} else if (ret.code == 201) {
					uni.hideLoading();
					uni.reLaunch({
						url: '/public/login/login'
					})
					callback(ret);
					uni.removeStorageSync('token');
					uni.removeStorageSync('userInfo');
				} else if (ret.code == 202) {
					uni.showToast({
						title: ret.msg,
						duration: 2000,
						icon: 'none'
					});
					setTimeout(function() {
						uni.hideLoading()
					}, 2000)
				} else {
					uni.showToast({
						title: ret.msg,
						duration: 2000,
						icon: 'none'
					})
					setTimeout(function() {
						uni.hideLoading()
					}, 2000)
				}
			},
			fail(err) {
				console.log(err);
			}
		});
	},
	uploadbatch: function(url, filePath, formData, callback, callinfo) {
		url = this.baseUrl + url + '?token=' + uni.getStorageSync('token');
		uni.uploadFile({
			url: url,
			filePath: filePath,
			name: 'file',
			formData: formData,
			success: (res) => {
				let ret = JSON.parse(res.data);
				if (ret.code == 200) {
					callback(ret);
				} else if (ret.code == 201) {
					uni.hideLoading()
					uni.navigateTo({
						url: '/pages/log/log'
					})
					callback(ret);
					uni.clearStorage();
				} else if (ret.code == 202) {
					uni.showToast({
						title: ret.msg,
						duration: 2000,
						icon: 'none'
					});
					setTimeout(function() {
						uni.hideLoading()
					}, 2000)
				} else {
					uni.showToast({
						title: ret.msg,
						duration: 2000,
						icon: 'none'
					})
					setTimeout(function() {
						uni.hideLoading()
					}, 2000)
				}
			},
			fail: function(err) {
				callinfo('请求异常 重试');
			}
		});
	},
}
