
require('Common-LESS');
require('./select');
const tool = require('./tool')
const common = require('./common');
import '../less/login-register.less';
import '../less/base.less';
import '../less/basecss-1.0.5.min.less';
import '../less/classify.less';
import '../images/bg_header.jpg';



$(function(){
    //加载公共页面
    require('Router');
    common.user();

        
    common.loadHeader();  
    common.loadFooter();
   
    

    //登录注册页面
    let isLogin = true;
    let flag = true;
    $('.l-r').on('click', (e)=>{  
        if(flag == true){     
            $(e.currentTarget).text('登录')
            $('.user-box label').text('注册账号');
            $('.btn').text('注册');
            $('.rped-box').css({display:'block'});
            $('.forget').css({display:'none'});
            isLogin = false
            return flag = false;
        }else {
            $(e.currentTarget).text('注册')
            $('.user-box label').text('账号');
            $('.btn').text('登录');
            $('.rped-box').css({display:'none'});
            $('.forget').css({display:'block'});
            isLogin = true;
            return flag = true;
        }   
    });

    //验证注册信息
    $('.user').on('blur', ()=>{
        tool.verification($('.user'));
    });
    $('.pwd').on('blur', ()=>{
        tool.verification($('.pwd'));
    });
    $('.rpwd').on('blur', ()=>{
        tool.verification($('.rpwd'));
    })

    
    // //登录注册
    $('.btn').on('click', ()=>{
        let user = {
            username:$('.user').val(),
            password:$('.pwd').val(),
            rpwd:$('.rpwd').val()
        };
        if(isLogin){
            tool.login(user);
        }else{
            tool.register(user);   
        }    
    });
});