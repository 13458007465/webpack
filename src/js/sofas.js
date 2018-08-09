require('Router');
require('./select');
const common = require('./common');
import '../less/base.less';
import '../less/basecss-1.0.5.min.less';
import '../less/classify.less';
import '../images/bg_header.jpg';
import '../images/example_0.jpg';

window.onload=function(){
    common.loadHeader();
	common.loadFooter();
	common.user();

	$.ajax({
		url:'http://localhost:8080/static/json/data.json',
		type: "GET",
        dataType: "json",
        success:(e) => {
        	for(var n = 0;n<e.page.length;n++){
        		var img = e.page[n].imgsrc;
        		var names = e.page[n].name;
        		var ma = e.page[n].old;
        		var may = e.page[n].new;
        		var str = 
        		'<a href="../pages/detailstwo.html"  class="link"><div class="goodsImg"><img src='+
        		'"'+ img +'"'
        		+'></div><div class="goodsBaseInfo">'+
        		'<span class="goodsName">'+names+'</span><span class="goodsPrice"><span class="oldPrice">'+
               ' <span>'+ma+'</span><span class="deleOldPrice"></span></span>'+
                '<span class="newPrice"><span>'+may+'</span></span></span></div></a>';
                $('.goodsChoose').append(str);
			}
			$('.link').first().attr({href:'../pages/details.html'});

        	var ttts = e.dan[0].srcs;
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
        },
        
        
        
	})
	
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
});
$('.mune-list').on('click', ()=>{
	console.log('as')
})