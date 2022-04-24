/*
	@@description  分页代码抽离 避免重复定义工作量 混入 案例
*/ 
export default {
	data() {
		return {
			pageNo : 1,
			pageSize : 10
		}
	},
	onReachBottom() {
		
	},
	onPullDownRefresh(){
		
	}
}