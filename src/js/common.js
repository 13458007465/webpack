

let loadHeader = () => {
    let str = "";
    str = `             
    <div class="header">
    <div class="dpi-1260 pos-rela"> 
<div class ="header_bg"> 
<img src="../images/bg_header.jpg"> 
</div> 
<a  target="_blank" class="contUS_mark"></a> 
<div class="logo"> 
<a  target="_self"></a></div> 
<div class="loginOrShop"> 
<span class="pesnName"> 
<a class="login"></a> 
<a  class="usersInfo" style="display:none">helloHuli@hulihome.com</a> 
</span> 
<span class="gapLine_0"></span> 
<a class="shopping hasRreasure"><span class="treas_count">3</span></a> 
<div class="treas_brief"> 
<div class="treas_brief-content"><p> 
<span class="treas_name"><a href="#">9成新转角沙发超级转角沙发</a></span> 
<span class="treas_price">9999</span> 
<span class="treas_count">x2</span> 
</p><p> 
<span class="treas_name"><a href="#">3成新超级大茶几</a></span> 
<span class="treas_price">9999</span> 
<span class="treas_count">x2</span> 
</p><p> 
<span class="treas_name"><a href="#">7成新超级电视贵</a></span> 
<span class="treas_price">9999</span> 
<span class="treas_count">x2</span> 
</p></div> 
<div class="treas_brief-goto"> 
<a  target="_self">查看购物车</a> 
</div></div> 
</div> 
<div class="select_custom dist-select"> 
<i data-value="0">成都地区</i> 
<dl><dt data-value="0">成都地区</dt> 
<dt data-value="1">北京地区</dt> 
<dt data-value="2">上海地区</dt> 
<dt data-value="3">深圳地区</dt> 
<dt data-value="4">其他地区</dt> 
</dl></div></div> 
<div class="main_nav"> 
<div class="dpi-1260"> 
<ul class="menu-list"><li class="ml-10"> 
<a  target="_self">沙发&nbsp;&nbsp;&nbsp;SOFAS</a><div> 
<a href="" target="_self" class="lev2_col-1">单人位</a> 
<a href="" target="_self" class="lev2_col-1">双人位</a> 
<a href="" target="_self" class="lev2_col-1">三人位</a> 
<a href="" target="_self" class="lev2_col-1">休闲沙发</a> 
<a href="" target="_self" class="lev2_col-1">转角沙发</a></div> 
</li><li> 
<a target="_self">桌椅&nbsp;&nbsp;&nbsp;TABLES/CHAIRS</a><div> 
<a href="" target="_self" class="lev2_col-2">餐桌</a> 
<a href="" target="_self" class="lev2_col-2">餐椅</a> 
<a href="" target="_self" class="lev2_col-2 clearf-l">书桌</a> 
<a href="" target="_self" class="lev2_col-2">凳子</a> 
<a href="" target="_self" class="lev2_col-2 clearf-l">电脑桌</a> 
<a href="" target="_self" class="lev2_col-2">休闲椅</a> 
<a href="" target="_self" class="lev2_col-2 clearf-l">梳妆台</a> 
<a href="" target="_self" class="lev2_col-2">户外椅</a> 
<a href="" target="_self" class="lev2_col-1 clearf-l">其它</a></div> 
</li><li> 
<a target="_self">床&nbsp;&nbsp;&nbsp;BEDS</a><div> 
<a href="" target="_self" class="lev2_col-1">1.5 米</a> 
<a href="" target="_self" class="lev2_col-1">1.8 米</a> 
<a href="" target="_self" class="lev2_col-1">其它</a></div> 
</li><li class="w-134"> 
<a  target="_self">柜&nbsp&nbsp;&nbsp;STORAGE</a><div> 
<a href="" target="_self" class="lev2_col-2 w-48">衣柜</a> 
<a href="" target="_self" class="lev2_col-2 w-48">储物柜</a> 
<a href="" target="_self" class="lev2_col-2 w-48 clearf-l">书柜</a> 
<a href="" target="_self" class="lev2_col-2 w-48">电视柜</a> 
<a href="" target="_self" class="lev2_col-2 w-48 clearf-l">鞋柜</a> 
<a href="" target="_self" class="lev2_col-2 w-48">床头柜</a> 
<a href="" target="_self" class="lev2_col-1 clearf-l">其它</a></div> 
</li><li> 
<a target="_self">更多&nbsp;&nbsp;&nbsp;MORE</a><div> 
<a href="" target="_self" class="lev2_col-1">组合产品</a> 
<a href="" target="_self" class="lev2_col-1">日用家居</a> 
<a href="" target="_self" class="lev2_col-1">家居饰品</a> 
<a href="" target="_self" class="lev2_col-1">其它</a></div></li> 
<div class="nav_search"> 
<input type="text" value="" placeholder="搜索"> 
<i></i></div> 
</ul>
</div>
</div>        
</div>
`

    $('#header').html(str);
}
//加载footer
let loadFooter = () =>{
    let str = "";
    str = `
    <div class="footer">
    <div class="footer_title">生活要过得朴素而有味道，但不用过得奢华。</div>
    <div class="footer_mark">
            <div class="footer_mark-keyword">
                    <i>环保</i>
                    <span>无甲醛 大自然</span>
            </div>
            <div class="footer_mark-keyword">
                    <i>低价</i>
                    <span>低于购买价6折</span>
            </div>
            <div class="footer_mark-keyword">
                    <i>安全</i>
                    <span>专业清洁消毒处理</span>
            </div>
            <div class="footer_mark-keyword">
                    <i>省心</i>
                    <span>专业物流配送安装</span>
            </div>
            <div class="footer_mark-keyword">
                    <i>快捷</i>
                    <span>24小时内送货</span>
            </div>
    </div>
    <div class="footer_info dpi-1260">
            <div class="footer_info-content">
                    <h2>关于我们</h2>
                    <p>
                            <a href="#" target="_self">关于户里</a>
                            <a href="#" target="_self">注册协议</a>
                    </p>
                    <p>
                            <a href="#" target="_self">业务合作</a>
                            <a href="#" target="_self">免责声明</a>
                    </p>
                    <p>
                            <a href="#" target="_self">加入户里</a>
                            <a href="#" target="_self">隐私保护</a>
                    </p>
            </div>
            <div class="footer_info-content">
                    <h2>流程指南</h2>
                    <p>
                            <a href="#" target="_self">购买家具</a>
                            <a href="#" target="_self">出售家具</a>
                    </p>
                    <p>
                            <a href="#" target="_self">支付方式</a>
                            <a href="#" target="_self">配送安装</a>
                    </p>
                    <p>
                            <a href="#" target="_self">售后保障</a>
                    </p>
            </div>
            <div class="footer_info-content">
                    <h2>会员中心</h2>
                    <p>
                            <a href="#" target="_self">会员计划</a>
                    </p>
                    <p>
                            <a href="#" target="_self">积分规则</a>
                    </p>
                    <p>
                            <a href="#" target="_self">投诉建议</a>
                    </p>
            </div>
            <div class="footer_info-content">
                    <h2>联系客服</h2>
                    <p class="h-14">
                            <span>电话:</span>
                            <br>
                            <span>028-67635062</span>
                    </p>
                    <p class="h-14">
                            <span>邮箱:</span>
                            <br>
                            <span>hello@hulihome.com</span>
                    </p>
            </div>
            <div class="footer_info-content">
                    <p>
                            <i class="sina_logo-small"></i>
                            <span> 新浪微博@户里网</span>
                    </p>
                    <div class="sina_rqcode-small"></div>
            </div>
            <div class="footer_info-content addBorder">
                    <p>
                            <i class="weixin_logo-small"></i>
                            <span> 关注微信“户里网”</span>
                    </p>
                    <div class="weixin_rqcode-small"></div>
            </div>
    </div>
    <div class="footer_copyright">蜀ICP备15028224号&nbsp;&nbsp;成都户里科技有限公司</div>
</div>
    `
    $('#footer').html(str);
}
let user = ()=>{
        let username = JSON.parse(sessionStorage.getItem('username'));
    if(username != '' && username != null && username != undefined){
        $('.login').css({display:'none'});
        $('.usersInfo').css({display:'block'}).text(username);
    }
}


exports.user = user;
exports.loadHeader = loadHeader;
exports.loadFooter = loadFooter;
