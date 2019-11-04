// 路由视图
function home(req, res) {
    res.end("home")
}
function about(req, res) {
    res.end("about")
}
function hello(req, res) {
    res.end("hello")
}
exports.home = home
exports.about = about
exports.hello = hello