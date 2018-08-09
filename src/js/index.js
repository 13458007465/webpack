const tool = require('./tool');
const common = require('./common');
require('./select');
require('Router');
require('Common-LESS');
import '../less/index.less';
import '../less/base.less';
import '../less/basecss-1.0.5.min.less';
import '../less/classify.less';
import '../images/bg_header.jpg';
import '../images/example_2.jpg';
import '../images/example_14.jpg'


(function(){
    //加载尾部 
    common.loadFooter();  
    
    let username = JSON.parse(sessionStorage.getItem('username'));
    if(username != '' && username != null && username != undefined){
        $('.login').css({display:'none'});
        $('.usersInfo').css({display:'block'}).text(username);
    }




    $.ajax({
		url:'../static/json/data.json',
		type: "GET",
        dataType: "json",
        success:(e) => {
        	for(var n = 0;n<e.page.length;n++){
        		var img = e.page[n].imgsrc;
        		var names = e.page[n].name;
        		var ma = e.page[n].old;
        		var may = e.page[n].new;
        		var str = 
        		'<a href=""><div class="goodsImg"><img src='+
        		'"'+ img +'"'
        		+'></div><div class="goodsBaseInfo">'+
        		'<span class="goodsName">'+names+'</span><span class="goodsPrice"><span class="oldPrice">'+
               ' <span>'+ma+'</span><span class="deleOldPrice"></span></span>'+
                '<span class="newPrice"><span>'+may+'</span></span></span></div></a>';
                $('.goodsChoose').append(str);
        	}
/*        	for(var n = 0;n<e.pageimgs.length;n++){
        		var tt = e.pageimgs[n].srcs;
        		var strs = '<img src="'+  tt  +'" alt="1" class="show">';
        		$('.slideList').append(strs)
        	}
*/        	var ttts = e.dan[0].srcs;
        	var ttt = '<img src="'+ ttts +'" alt="1"">';
        	$('.img_cols-ss').append(ttt);
        	for(var n = 0;n<e.dans.length;n++){
        		var sw = e.dans[n].srcs;
        		var strs = '<div class="img_cols-ss">'+
                            '<img src="' +sw+'" alt="2" title="2">'+
                        '</div>'+
                        '<div class="img_cols-ss mt-38">'+
                            '<img src="' +sw+'" alt="3" title="3">'+
                        '</div>';
                        $('.ssw').append(strs);
        	}
        	var are = e.dans1[0].srcs;
        	var sts = '<img src="'+ are +'" alt="4" title="4">';
        	$('.ssa1').append(sts);
        	
        	var ttts1 = e.dans2[0].srcs;
        	var tttd = '<img src="'+ ttts1 +'" alt="1" class="show">';
        	$('.fa').append(tttd);
        }
	})


    /**
* 功能：图片轮播功能
**/
// 图片
var slideList = $(".slideList"),
imageList = slideList.children("img"),
imageList_leng = imageList.length;
// 添加控制点
slideList.after("<div class='slideList-point'></div>");
// 控制点容器
var slideList_point = slideList.next()
for(var i = 0; i < imageList_leng; i ++) {
slideList_point.append("<i></i>")
}
slideList_point.children().first().addClass("ckd");
// 执行轮播
var imgSlideTimer;
imgSlideTimer = setInterval(function() {
runImgSlide();
},6000);
// 控制点切换图片
slideList_point.children().click(function() {
var thisIdx = $(this).index();
$(this).addClass("ckd").siblings().removeAttr("class");
imageList.eq(thisIdx).addClass("show").siblings().removeAttr("class");
clearInterval(imgSlideTimer);
imgSlideTimer = setInterval(function() {
    runImgSlide();
},6000);
});

/**
* 功能： 图片轮播核心函数
**/
function runImgSlide() {
// 当前索引
var showImage = $(".slideList > img.show"),
    showImage_idx = showImage.index();
// 创建1~4之间的随机数
var randomNum = Math.round(Math.random() * 3 + 1);
if(showImage_idx != imageList_leng - 1) {
    showImage.removeAttr("class").next().addClass("show enlarge-" + randomNum);
    slideList_point.children().eq(showImage_idx + 1).addClass("ckd").siblings().removeAttr("class");
} else {
    showImage.removeAttr("class");
    imageList.eq(0).addClass("show enlarge-" + randomNum);
    slideList_point.children().eq(0).addClass("ckd").siblings().removeAttr("class");
}
}


$('.shopping').click(function(){
	if($(this).hasClass('s')){
		$(this).removeClass('s');
		$('.treas_brief').hide();
		$(this).css('background-position','-21px -434px');
	}else{
		$(this).addClass('s');
		$('.treas_brief').show();
		$(this).css('background-position','-84px -435px');
	}
	})

})();


