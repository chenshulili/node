/*
1.定义一个路由文件router.js
2.在router定义三个路由视图
 */
var http = require("http")
// var fs = require("fs")
var router = require("./route")
console.log(router)
http.createServer((req, res) => {
    // fs.readFile("")
    // if (req.url == "/") {
    //     router.home(req, res)
    // } else if (req.url == "/about") {
    //     router.about(req, res)
    // } else if (req.url == "/hello") {
    //     router.hello(req, res)
    // } else {
    //     res.end("404")
    // }
    switch(req.url){
      case "/": router.home(req, res);
      break;
      case "/about": router.about(req, res);
      break;
      case "/hello": router.hello(req, res);
      break;
    }
}).listen(3000)