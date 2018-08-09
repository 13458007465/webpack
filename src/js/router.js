

$(function() {
    //debugger
    // 设置路由基础路径
    let baseUrl = 'http://localhost:8080/';
    // 设置页面路径
    let urls = [
        'static/pages/sofas.html',
        'static/pages/table.html',
        'static/pages/bad.html',
        'static/pages/storage.html',
        'static/pages/more.html',
        'index.html',
        'static/pages/shoppingcar.html',
        'static/pages/login-register.html',
        'static/pages/userinfo.html',
        
    ];
    // 配置页面最终枯井
    urls = urls.map(url => {
        return baseUrl + url
    });
    $('.menu-list li').on('click', (event) => {
        console.log(event)
        let index = $(event.currentTarget).index();
        console.log(index);
        location.href = urls[index];
    });
    $('.logo a').on('click', ()=>{
        //let index = urls[5];
        location.href = urls[5];
    });
    $('.treas_brief-goto a').on('click', ()=>{
        let index = urls.length - 3;
        location.href = urls[index];
    });
    $('.login').on('click', (e) =>{
        let lastIndex = urls.length - 2;
        location.href = urls[lastIndex];
    });
    $('.usersInfo').on('click', (e) =>{
        let lastIndex = urls.length - 1;
        location.href = urls[lastIndex];
    });
});