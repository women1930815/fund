/**
 * @description 工具类库 过滤 正则
 * @return bool
 */
export const phoneReg = (val) => {
	// 定义正则表达式
	let reg = /^1[3456789]\d{9}$/;
	return reg.test(val) ? true : false
}
// 定义一个默认的过滤器方法
export const ints = (num) => {
	// replace() 方法用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。 变成字符串
	num += '';
	num = num.replace(/[^0-9|\.]/g, '');
	if (/^0+/)
		num = num.replace(/^0+/, '');
	// test() 方法用于检测一个字符串是否匹配某个模式
	if (!/\./.test(num))
		num += '.00';
	if (/^\./.test(num))
		num = '0' + num;
	num += '00';
	// match() 方法可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配。
	// 只保留小数点的后两位 
	num = num.match(/\d+\.\d{2}/)[0];
	return num;
}
//  地址栏参数截取
export const joinUrl = (url, parames) => {
	let res = '?'
	for (let key in parames) {
		res += key + '=' + parames[key] + '&'
	};
	return url + res.substring(0, res.length - 1);
}
