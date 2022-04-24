/*
	@description 定义接口数据
*/ 
export default {
	allHomePage: '/home/allHomePage', // 获取首页数据信息-- GET
	getEmnuTree: '/menu/getEmnuTree', // getEmnuTree -- GET
	getEvaluationList : '/evaluation/getEvaluationList', // 通过菜单id获取测评
	sendMobileCode: '/user/sendMobileCode', // 发送验证码 -- Get
	loginByPhone: '/user/auth/loginByPhone', // 用户登录 -- Post
	QuestionStart: '/answer/QuestionStart', // 获取用户题目 -- get
	questionNext: '/answer/questionNext', // 下一题的题号 -- get
	updateUser: '/user/updateUser', // 修改用户信息  -- POST
	tokenAnalysis: '/user/auth/tokenAnalysis', // token 解析用户信息 -- POST
	allCompleteOrIncomplete: '/answer/allCompleteOrIncomplete', //查看答题列表《未支付、已支付》-- Get 0 天性 1 标准
	allPaymentOrder: '/answer/allPaymentOrder', // 查看自己全部测试报告《未完成、已完成》 -- Get 0 天性 1 标准
	getUser: '/user/getUser', // 获取用户信息  -- Post 
	allQuestionAndResult: '/answer/allQuestionAndResult', // 查看全部题目 GET
	questionSubmit: '/answer/questionSubmit', // 提交查看报告
	saveWxUser: '/user/auth/saveWxUser', // 判断微信账号是否存在 -- GET
	getEvaluation : '/evaluation/getEvaluation', // 测评ID详情也 -- GET
	payOrders : '/pay/orders', // 支付接口信息 微信H5交互的SDK
	getResult : '/result/getResult', // 测评结果项查看
	questionAppoint : '/answer/questionAppoint', // 获取指定题目
	repairUserPhone : '/user/repairUserPhone', // 手机号数据补全
	getSeeShare : '/share/seeShare', // 分享报告 -- GET
	getSeeShareParameter : '/share/getSeeShareParameter', // 获取分享参数 -- GET
	getShareParameter : '/share/getShareParameter', // 获取分享参数答题 -- GET
	getclickAnswer : '/share/clickAnswer', // 分享的测评点击答题 -- GET
	getquoteResult : '/result/quoteResult', // 引用测评报告 生成一个报告
	getChoiceResult: '/answer/getChoiceResult', //答题完成的测评报告 -- GET
	getMyShare : '/share/getMyShare', // 获取赠礼页面结构
	getDifferentTypesAns : '/answer/getDifferentTypesAns', // 查看不同报告的答题接口
	getResultTalent : '/result/getResultTalent', // 天赋职业结果接口
	getObviousResult : '/result/getObviousResult', // 显性结果测评结果接口
	getAdolescentStudies : '/result/getAdolescentStudies', // 青少年适合的专业测评项结果查看
}