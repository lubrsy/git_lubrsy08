var ua = navigator.userAgent;
console.log(ua);
if(/firefox/i.test(ua)){
	alert("你是火狐！！！");
}else if(/chrome/i.test(ua)){
	alert("你是Chrome");
}else if(/msie/i.test(ua)){
	alert("你是IE浏览器~~~");
}else if("ActiveXObject" in window){
	alert("你是IE11，枪毙了你~~~");
}