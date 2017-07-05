let express = require('express');
let bodyParser = require('body-parser');
let app = express();
app.use(bodyParser.urlencoded({extended:true}));   //bodyParser.json()   bodyParser.urlencoded({extended:true})

app.listen(4000);
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

//首页广告接口
let Ad = require('./home/ad.js');
app.get('/api/ad', (req, res) => {
    res.send(Ad);
});
//首页列表接口
let List = require('./home/list.js');
app.get('/api/list/:city/:page', (req, res) => {
    res.send(List);
});

//详情页商户信息
let Info = require('./detail/info');
app.get('/api/detail/info/:id', (req, res) => {
    res.send(Info);
});

//详情页商户评价信息
let Comment = require('./detail/comment');
app.get('/api/detail/comment/:id/:page', (req, res) => {
    res.send(Comment);
});

//用户个人中心订单列表  用户名
let orderList = require('./orderlist/orderList');
app.get('/api/orderlist/:username', (req, res) => {
    res.send(orderList);
});


//接收前端发送的评价内容
app.post('/api/comment', (req, res) => {
    //express解析请求体
    let content = req.body;
    console.log(content);
    res.send({msg:'ok!'});
});

