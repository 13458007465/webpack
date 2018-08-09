const HtmlWebpackPlugin = require('html-webpack-plugin');
exports.config = [
    new HtmlWebpackPlugin({
        template:'./src/index.html',
        favicon:'./favicon.ico',
        inject:true,
        chunks:['main'],
        filename:'index.html'
    }),
    new HtmlWebpackPlugin({
        template:'./src/pages/bad.html',
        favicon:'./favicon.ico',
        inject:true,
        chunks:['bad'],
        filename:'static/pages/bad.html'
    }),
    new HtmlWebpackPlugin({
        template:'./src/pages/more.html',       
        favicon:'./favicon.ico',
        inject:true,
        chunks:['more'],
        filename:'static/pages/more.html'
    }),
    new HtmlWebpackPlugin({
        template:'./src/pages/sofas.html',
        favicon:'./favicon.ico',
        inject:true,
        chunks:['sofas'],
        filename:'static/pages/sofas.html'
    }),
    new HtmlWebpackPlugin({
        template:'./src/pages/storage.html',
        favicon:'./favicon.ico',
        inject:true,
        chunks:['storage'],
        filename:'static/pages/storage.html'
    }),
    new HtmlWebpackPlugin({
        template:'./src/pages/table.html',
        favicon:'./favicon.ico',
        inject:true,
        chunks:['table'],
        filename:'static/pages/table.html'
    }),
    new HtmlWebpackPlugin({
        template:'./src/pages/login-register.html',
        favicon:'./favicon.ico',
        inject:true,
        chunks:['loginRegister'],
        filename:'static/pages/login-register.html'
    }),
    new HtmlWebpackPlugin({
        template:'./src/pages/details.html',
        favicon:'./favicon.ico',
        inject:true,
        chunks:['details'],
        filename:'static/pages/details.html'
    }),
    new HtmlWebpackPlugin({
        template:'./src/pages/detailstwo.html',
        favicon:'./favicon.ico',
        inject:true,
        chunks:['detailstwo'],
        filename:'static/pages/detailstwo.html'
    }),
    new HtmlWebpackPlugin({
        template:'./src/pages/userinfo.html',
        favicon:'./favicon.ico',
        inject:true,
        chunks:['userinfo'],
        filename:'static/pages/userinfo.html'
    }),
    new HtmlWebpackPlugin({
        template:'./src/pages/shoppingcar.html',
        favicon:'./favicon.ico',
        inject:true,
        chunks:['shoppingcar'],
        filename:'static/pages/shoppingcar.html'
    })
]