require('Common-LESS');
require('Router');
require('./select');
const tool = require('./tool')
const common = require('./common');
import '../less/base.less';
import '../less/basecss-1.0.5.min.less';
import '../less/classify.less';
import '../less/userinfo.less';
import '../images/bg_header.jpg';

$(function(){
    common.loadHeader();
    common.loadFooter();
    common.user();


    //选项卡
    let arr = [$('.personInfo'), $('.my-order'),$('.sale'),$('.account'),$('.sysInfo')]
    $('.info-list li').on('click', (e)=>{
        let index = $(e.currentTarget).index();
        $(e.currentTarget).addClass('infoP').siblings().removeClass('infoP');
        arr[index].removeClass('hidden').siblings().not('.info-list').addClass('hidden');
    });

    //订单取消
    $('.cnl').on('click', ()=>{
        $('.remove-box').show();
        $('.remove-btn button').on('click', ()=>{
            $('.remove-box').hide();   
        });
    });


    //订单删除
    $('.del').click((e)=>{
        let $target = e.currentTarget
        $('.remove-title').text('删除订单');
        $('.remove-content p').text('您是否要删除该订单信息？删除后不再显示该订单。');
        $('.remove-box').show();
        $($target).parents('.tableI').addClass('waiteDel');
        $('.rm-sure').on('click', (e)=>{
            $('.waiteDel').remove();
            $('.remove-box').hide();    
        });
        $('.rm-cancel').on('click', (e)=>{
            $('.tableI').removeClass('waiteDel');
            $('.remove-box').hide();    
        });
    });


    //系统信息
    //显示信息
    let flag = true;
    $('.msgBox').on('click', (e)=>{
        if(flag){
            $(e.currentTarget).removeClass('smallBox');
            $('.msg').removeClass('single-msg');
            $('.mark-box').addClass('hidden');
            return flag = false;
        }else{
            $(e.currentTarget).addClass('smallBox');
            $('.msg').addClass('single-msg');
            $('.mark-box').removeClass('hidden');
            return flag = true;
        }   
    });
    //标记选择
    $('.select').click((e)=>{
        if($(e.currentTarget).hasClass('check')){
            $(e.currentTarget).removeClass('check').parents('.msgItem').removeClass('flag');
        }else{
            $(e.currentTarget).addClass('check').parents('.msgItem').addClass('flag');
        }
    });
    //删除
    $('.sysInfodel').click(()=>{
        if($('.msgItem').hasClass('flag')){
            $('.flag').remove();
            $('.sysInfodel').text('暂无系统消息!').unbind();
        }else{
            alert("您还没有标记要删除的消息，请至少标记一条消息再执行该操作!");

        }
    });
    
});