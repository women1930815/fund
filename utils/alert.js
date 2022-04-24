export default {
	// 
	phone(text){
		uni.makePhoneCall({
			phoneNumber: text ? `${text}` : '18888888888'
		})
	},
	// 弹窗 加载
	mask(text){
		if(!text){
			text = "加载中..."
		}
		uni.showLoading({
			title:text,
			mask:true
		})
	},
	// 封装函数 失败函数
	wrong:function(text){
		uni.showToast({
			title:text,
			icon:'none',
			duration:3000,
		})
	},
	// 成功
	succ:function(text,time){
		setTimeout(function(){
			uni.showToast({
				title:text,
				icon:'success',
				duration:2000,
			})	
		},time)
	},
	// 请求
	res:function(res){
		if(res.data.code == 200){
			uni.showToast({
				title:res.data.msg,
				duration:2000,
			})
		}else{
			uni.showToast({
				title:res.data.msg,
				icon:'none',
				duration:2000,
			})
			return false;
		}
	},
	// 加载
	to:function(val){
		uni.showLoading({
			title: val
		})
	},
	// 取消
	hide:function(){
		uni.hideLoading();
	},
	time:function(){
		let data = new Date();
		let full = data.getFullYear();
		let month = data.getMonth() + 1;
		let day = data.getDate();
		if(day < 10){
			day = '0' + day;
		}
		let over = full + '-' + month + '-' + day;
		return over;
	},
	showmodal:function(cont = "系统异常",showcancel = true,cancelFont = "取消",conf = "确定",callConf,callCancel = ()=>{}){
		uni.showModal({
			title:"温馨提示",
			content:cont,
			showCancel:showcancel,
			cancelText: cancelFont,
			confirmColor : '#757A90',
			confirmText : conf,
			success(res) {
				if(res.confirm){
					callConf();	
				}else{
					callCancel()
				}
			}
		})
	},
	prePage(){
		let pages = getCurrentPages();
		let prePage = pages[pages.length - 2];
		// #ifdef H5
		return prePage;
		// #endif
		return prePage.$vm;
	},
}