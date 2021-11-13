//拦截安卓回退按钮
history.pushState(null, null, location.href);
window.addEventListener('popstate', function(event) {
    history.pushState(null, null, location.href );
    //此处加入回退时你要执行的代码
	//window.location.href="about:blank";
});


//变换背景颜色
/**
 * 产生随机整数，包含下限值，包括上限值
 * @param {Number} lower 下限
 * @param {Number} upper 上限
 * @return {Number} 返回在下限到上限之间的一个随机整数
 */
// function random(lower, upper) {
	// return Math.floor(Math.random() * (upper - lower+1)) + lower;
// }
//随机设置背景色
// function setBGC(){
	// var colorArr = new Array("#4395D1","#00A99D","#FBAF5D","#84871C","#9E6B52","#A186BE");
	// var i = random(0,5);
	// document.getElementById("imgBg").style.background = colorArr[i];
// }
// setInterval(setBGC,300); 


//2分钟结束
function closePass(){
	document.getElementById("bodyDiv").style.display = 'none';
	document.title = '通行证已失效';
	history.pushState(null, null, location.href);
	window.addEventListener('popstate', function(event) {
		history.pushState(null, null, location.href );
		//此处加入回退时你要执行的代码
		//window.location.href="about:blank";
	});
}
// setTimeout(closePass,120000);



window.onload=function()

{

window.requestAnimationFrame(getDate)

}
    

function getDate()

{

window.setTimeout(function(){

// window.requestAnimationFrame(getDate)

},1000/2)

var d=new Date();   

var year=d.getFullYear()  //获取年

var month=d.getMonth()+1;  //获取月，从 Date 对象返回月份 (0 ~ 11)，故在此处+1

var day=d.getDay()    //获取日

var days=d.getDate() //获取日期

var hour=d.getHours()   //获取小时

var minute=d.getMinutes()  //获取分钟

var second=d.getSeconds()   //获取秒

if(month<10) month="0"+month

if(days<10) days="0"+days

if(hour<10) hour="0"+hour

if(minute<10) minute="0"+minute

if(second<10) second="0"+second

var Tools_1=document.getElementById("showTimeTime");
var Tools_2=document.getElementById("showTimeDate");
var Tools_3=document.getElementById("passColor");
	                             //绿         黄        浅蓝         暗红      深蓝        浅粉     亮红      深粉        灰         亮蓝      亮绿
	var colorArray = new Array("#00802b", "#feff00", "#66ffe0", "#800000", "#000099", "#ffcccc", "#ff0000", "#ff1a8c", "#999999", "#0000cc","#00cc00");
// Tools_3.style.background = colorArray[hour % 24]

var da_1=hour+":"+minute+":"+second
var da_2="时间："+year+"/"+month+"/"+days
Tools_1.innerHTML=da_1;
Tools_2.innerHTML=da_2;
var i=0

Tools_3.onclick = function()
{
	Tools_3.style.background = colorArray[i];
	i=(i+1)%11;
}

}
