var http = require("http")
var form = require("formidable")
console.log(form)
var fs = require("fs");
var path = require("path")
var sd = require("silly-datetime")
http.createServer((req,res)=>{
  if(req.url =="/dopost"){
    var fm = form.IncomingForm();
    // fields 文本域 files文件域
    console.log(fm);
    console.log(fm.uploadDir)
    fm.uploadDir="./aa"
    fm.parse(req,function(err,fields,files){
        console.log(files)
        var extname = path.extname(files.pic.name);
      var time = sd.format(new Date(),"YYYYMMDDHHmmss")
      var old = files.pic.path;
      console.log(old)
      var pt ="./aa/" +time+extname;
      fs.rename(old,pt,(err)=>{
          if(err) throw err
      })
    })
    res.end("sucess")
  }
}).listen(3000)