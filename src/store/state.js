// 使用本地存储，防止页面刷新后上次的数据丢失的情况
let defaultCity = "深圳";

try{
	defaultCity = localStorage.city || defaultCity
}catch(e){}

export default{
	city:defaultCity
}