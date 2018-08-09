
window.onload = function() {
	window.scrollTo(0, 0);
}
$(function() {
	/* 自定义系统下拉菜单 */
	select_custom();
	/* 购物车header按钮相关功能 */
	//shoppingFun();
});


/* 自定义系统下拉菜单 */
function select_custom() {
	// 设置下拉箭头位置
	var select_c = $(".select_custom"),
		sc_len = select_c.length;

	for(var i = 0; i < sc_len; i++) {
		// 获取当前下拉菜单的宽度值
		var thisSC_w = parseInt(select_c.eq(i).width());
		// 设置该列表下的下拉箭头的位置
		select_c.eq(i).children("i").css("background-position", (thisSC_w - 34) + "px" + " 0");
	}

	// 下拉菜单点击及鼠标悬浮控制
	$(document).off("mouseenter", ".select_custom i").on({
		// 获取父级的宽度并进行设置并显示
		click: function() {
			var pa_w = $(this).parent().width();
			$(this).siblings("dl").css({
				"width": parseInt(pa_w) + 6 + "px",
				"margin-left": "-7px"
			}).slideDown(150);

		},
		// 鼠标悬浮下拉箭头变换
		mouseenter: function() {
			var this_p_w = parseInt($(this).parent().width());
			$(this).css("background-position", (this_p_w - 34) + "px" + " -34px");
		}
	}, ".select_custom i");

	// 鼠标离开选择区域后隐藏选择菜单
	$(document).on("mouseleave", ".select_custom", function() {
		// 收起选择菜单，还原箭头样式
		$(this).children("dl").slideUp(150);
		var this_w = parseInt($(this).width());
		$(this).children("i").css("background-position", (this_w - 34) + "px" + " 0");
	});

	// 选择并显示到选择框内
	$(document).on("click", ".select_custom dt", function() {
		// 获取选中项的值和文本
		var this_val = $(this).attr("data-value"),
			this_txt = $(this).text();
		// 设置选择框内的值、title及文本
		$(this).parent().siblings("i").attr({
			"data-value": this_val,
			"title": this_txt
		}).text(this_txt);
		$(this).parent("dl").slideUp(150);

	});
	// 鼠标悬浮显示文本设置内容
	//BASECSS.hoverText(".select_custom i, .select_custom dl dt");
}

