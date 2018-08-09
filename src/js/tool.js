
//验证输入的信息是否正确
//@parameter ele => 元素
let verification = (ele)=>{
    let type = ele.attr('class');
    let Str = ele.val();
    switch(type){
        case 'user':{
            let result = (/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([a-z]{2,4})$/.test(Str));
            addOrRemoveClass(ele, result);
        }break;
        case 'pwd':{
            let result = ( /^.{6,16}$/.test(Str));
            addOrRemoveClass(ele, result); 
        }break;
        case 'rpwd':{
            console.log(Str)
            if( Str === '' || Str != $('.pwd').val()){
                ele.parent().addClass('error')
            }else{
                ele.parent().removeClass('error')
            }
        }
    }
}

//是否显示错误信息
let addOrRemoveClass = (ele, result)=>{
    
    if(result === false){
        ele.parent().addClass('error');
    }else{
        ele.parent().removeClass('error');
    }
}

//注册
let register = (user)=>{
    if(!user.username || !user.password){
        alert('请输入账号或密码！');
    }else if(isExist(user.username)){
        alert('用户名已存在，请重新输入!');
    }else if(user.password == user.rpwd){
        let arr = [];
        if(!localStorage.user){
            arr = [];
        }else{
            arr = JSON.parse(localStorage.user);
        }
        arr.push(user);
        localStorage.user = JSON.stringify(arr);
        alert('注册成功，请登陆！')
    } 
}

//登陆
let login = (user)=>{
    let kUser = isExist(user.username);
    console.log(kUser);
    if(!user.username || !user.password){
        alert(' 请输入账号或密码！');
    }else if(kUser){
        if(user.username == kUser.username && user.password == kUser.password){
            saveUsers(user.username);
            location.href = '../../index.html'
        }else{
            alert('用户名或密码不正确，请检查！');
        }
    }else{
        alert('用户不存在，请先注册！');
    }
}
//验证用户是否存在
let isExist = (username)=>{
    let user = null;
    if(localStorage.user){
        let users = JSON.parse(localStorage.user);
        for (let i = 0, len = users.length; i<len; i++){
            if(users[i].username === username){
                user = users[i];
                break;
            }
        }
    }
    return user;
}

//将登陆的信息临时储存
let  saveUsers = (username) => {
    var objJson = JSON.stringify(username);
    sessionStorage.setItem("username", objJson);
}


exports.verification = verification;
exports.register = register;
exports.login = login;