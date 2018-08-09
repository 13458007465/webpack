require('./select');
require('Router');
require('Common-LESS');
const tool = require('./tool');
const common = require('./common');
import '../less/details.less';
import '../less/base.less';
import '../less/basecss-1.0.5.min.less';
import '../less/classify.less';
import '../images/bg_header.jpg';
import '../images/example_6.jpg';
import '../images/example_7.jpg';
import '../images/example_8.jpg';
import '../images/example_9.jpg';
import '../images/example_10.jpg';
import '../images/example_0.jpg';

// $(function(){

// })

window.onload = function() {
	aj();
	console.log($('.vive li'));
	common.loadHeader();
	common.loadFooter();
	common.user();
}

function aj(){
	$.ajax({
		url: '../json/data.json',
		type: "GET",
		dataType: "json",
		success: (e) => {
			//分页面共同部分
			for(var n = 0; n < e.page.length; n++) {
				var img = e.page[n].imgsrc;
				var names = e.page[n].name;
				var ma = e.page[n].old;
				var may = e.page[n].new;
				var str =
					'<a href="../shoppimgcar.html"><div class="goodsImg"><img src=' +
					'"' + img + '"' +
					'></div><div class="goodsBaseInfo">' +
					'<span class="goodsName">' + names + '</span><span class="goodsPrice"><span class="oldPrice">' +
					' <span>' + ma + '</span><span class="deleOldPrice"></span></span>' +
					'<span class="newPrice"><span>' + may + '</span></span></span></div></a>';
				$('.goodsChoose').append(str);
			}
			//主页面
			var ttts = e.dan[0].srcs;
			var ttt = '<img src="' + ttts + '" alt="1"">';
			$('.img_cols-ss').append(ttt);
			for(var n = 0; n < e.dans.length; n++) {
				var sw = e.dans[n].srcs;
				var strs = '<div class="img_cols-ss">' +
					'<img src="' + sw + '" alt="2" title="2">' +
					'</div>' +
					'<div class="img_cols-ss mt-38">' +
					'<img src="' + sw + '" alt="3" title="3">' +
					'</div>';
				$('.ssw').append(strs);
			}
			var are = e.dans1[0].srcs;
			var sts = '<img src="' + are + '" alt="4" title="4">';
			$('.ssa1').append(sts);

			var ttts1 = e.dans2[0].srcs;
			var tttd = '<img src="' + ttts1 + '" alt="1" class="show">';
			$('.fa').append(tttd);

			//商品详情
			var sts = '';
			for(var n = 0; n < e.banner.length; n++) {
				if(n==0){
					sts += '<li class="show selected mt-0"><img src="' + e.banner[n].srcs + '"></li>';
				}else{
					sts += '<li><img src="' + e.banner[n].srcs + '"></li>';
				}
			};
			$('.mainImg ul').append(sts);
			$('.thumbnail ul').append(sts);

			var names = e.slide[0].name;
			var mans = e.slide[1].man;
			var zhes = e.slide[2].zhe;
			var oldpays = e.slide[3].oldpay;
			var newpays = e.slide[4].newpay;
			var jifens = e.slide[5].jifen;
			var kucuns = e.slide[6].kucun;
			var ss = '<div class="goodsName"><h1>' + names + '</h1><p><span>' + mans + '</span><span>' + zhes + '</span>' +
				'</p></div><div class="goodsPrice"><div class="origPrice">' +
				'<span class="rmbSign">￥</span>' +
				'<span class="rmbNum">' + oldpays + '</span>' +
				' <span class="rmbYuan">元</span>' +
				'<span class="deleOldPrice"></span>' +
				'</div>' +
				'<div class="newPrice">' +
				'<span class="rmbSign">￥</span>' +
				'<span class="rmbNum">' + newpays + '</span>' +
				'<span class="rmbYuan">元</span>' +
				'<span class="deleOldPrice"></span>' +
				'</div>' +
				'</div>' +
				'<div class="goodsDynamic">' +
				'<div class="origBuyPrice">' +
				'<label>原始购买价格：</label>' +
				'<span class="rmbNum">2558</span>元' +
				'</div>' +
				'<div class="score">' +
				'<label>积分：</label>' +
				'<span>' + jifens + '</span>' +
				'<a href="#">了解积分规则</a></div><div class="inventory"><label>库存数量：</label><span>' + kucuns + '</span></div></div>';
			$('.goodsBuy').prepend(ss);
			//商品详情共同部分
			for(var n = 0;n<e.slide1.length;n++){
				var sss = e.slide1[n].picimg;
				var mz = e.slide1[n].namess;
				var fade = e.slide1[n].oldss;
				var www = e.slide1[n].newss;
				var ssw = '<a href="#"><div class="goodsImg"><img src="'+sss+'"></div><div class="goodsBaseInfo">'+
                           '<span class="goodsName">'+mz+'</span><span class="goodsPrice"><span class="oldPrice"><span>'+fade+'</span>'+
                           '<span class="deleOldPrice"></span></span><span class="newPrice"><span>'+www+'</span></span></span>'+
                            '</div></a>';
                $('.recomList').append(ssw);
                        
			}
		}
	})
}

//购物车
$('.shopping').click(function() {
	if($(this).hasClass('s')) {
		$(this).removeClass('s');
		$('.treas_brief').hide();
		$(this).css('background-position', '-21px -434px');
	} else {
		$(this).addClass('s');
		$('.treas_brief').show();
		$(this).css('background-position', '-84px -435px');
	}
})
var ns = 0;
$('.plus').click(function(){
	console.log(1);
	ns++;
	$('.countSet input').val(ns)
	$('.minus').removeClass('disabled');
})



/* 消除缩略图列表首元素的左间隙 */
clearListMarginLeft();

/* 鼠标悬浮于缩略图显示对应主图 */
$(document).on("click", ".goodsShowImg .thumbnail ul li", function () {
    showIndexMainImg(this, ".goodsShowImg .mainImg ul li");
});

/* 消除商品名称下筛选项首项的间隙及边线 */
clearFilterFirstStyle();

/* 商品购买数量设置 */
goodsBuyNumSet(".goodsBuyCtrl .countSet .plus", ".goodsBuyCtrl .countSet .minus", ".goodsBuyCtrl .countSet input[type='text']");

/* 平均分布推荐商品 */
//BASECSS.averageCols(".goodsRecom .recomList");
clearFirstRecomMarginLeft();

// ===========================================
//                函数定义部分
// ===========================================

/**
 * 功能：消除缩略图列表首元素的左间隙
 **/
function clearListMarginLeft() {
    $(".goodsShowImg .thumbnail ul li").first().css("margin-left", 0);
}

/**
 * 功能：鼠标悬浮于缩略图显示对应主图
 * 参数：1.缩略图标识符；2.主图对应的列表元素
 **/
function showIndexMainImg(ident, mainImgList) {
    var $this = $(ident),
        theIndex = $this.index();
    // 获得边框选中效果
    $this.addClass("selected").siblings().removeClass("selected");
    // 显示对应的主图
    //$(mainImgList).eq(theIndex).addClass("show").siblings().removeClass("show");
    $(mainImgList).eq(theIndex).fadeIn(600).siblings().fadeOut(600);
}

/**
 * 功能：消除商品名称下筛选项首项的间隙及边线
 **/
function clearFilterFirstStyle() {
    $(".goodsBuy .goodsName p span:first").css({
        "border-left": "none",
        "padding-left": 0
    });
}

/**
 * 功能：商品购买数量设置
 * 参数：1.增加按钮的class；2.减少按钮的class；3.文本框标识符
 **/
function goodsBuyNumSet(plusBtn, minusBtn, inputIdent) {
    // 获取库存量
    var inventoryTotal = parseInt($(".inventory").find("span").text());
    
    // 初始化按钮是否禁用的效果
    var origVal = parseInt($(inputIdent).val());
    // 若数量等于0
    if(origVal == 0) {
        // 禁用減少按鈕
        $(minusBtn).addClass("disabled");
    }
    // 若数量大于等于库存量
    else if(origVal >= inventoryTotal) {
        // 禁用增加按鈕
        $(plusBtn).addClass("disabled");
        // 将数量设置为当前的库存量
        $(inputIdent).val(inventoryTotal);
    }
    
    /* 增加按钮（加1） */
    $(document).on("click", plusBtn, function() {
        // 当前数量
        var currentCount = parseInt($(inputIdent).val());
        
        // 若当前设置数量小于总库存量,并在加1后不等于库存总量
        if(currentCount < inventoryTotal && currentCount != (inventoryTotal - 1)) {
            // 数量加1
            $(inputIdent).val(currentCount + 1);
            // 取消减少按钮的禁用效果
            $(minusBtn).removeClass("disabled");
        }
        // 若当前设置数量小于总库存量,并在加1后等于库存总量
        else if(currentCount == (inventoryTotal - 1)){
            // 数量加1，并设置禁用效果
            $(inputIdent).val(currentCount + 1);
            $(plusBtn).addClass("disabled");
            // 取消减少按钮的禁用效果
            $(minusBtn).removeClass("disabled");
        }
    });
    
    /* 减少按钮（减1） */
    $(document).on("click", minusBtn, function() {
        // 当前数量
        var currentCount = parseInt($(inputIdent).val());
        
        // 若当前数量在减1后不等于0
        if(currentCount > 1) {
            // 数量减1
            $(inputIdent).val(currentCount - 1);
            // 取消增加按钮的禁用效果
            $(plusBtn).removeClass("disabled");
        }
        // 若当前数量在减1后等于0
        else if(currentCount == 1){
            // 数量减1，并设置禁用效果
            $(inputIdent).val(currentCount - 1);
            $(minusBtn).addClass("disabled");
            // 取消增加按钮的禁用效果
            $(plusBtn).removeClass("disabled");
        }
    });
}

/**
 * 功能：消除推荐商品首个元素的左间隙
**/
function clearFirstRecomMarginLeft() {
    $(".goodsRecom .recomList a:first").css("margin-left", 0);
}
