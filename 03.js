var fs = require("fs")
var http = require("http")
http.createServer((req,res)=>{
    //读取文件 异步读取
    // fs.readFile("./读取文件/1.txt",(err,data)=>{
    //     res.end(data)
    // })

    // 同步读取
    // var a =fs.readFileSync("./读取文件/1.txt");
    // res.end(a)

    // 写文件
    // fs.writeFile("./读取文件/1.txt","wvdrgweggteszxhcjervc",(err)=>{
    //     if(err){
    //         throw err
    //     }
    //     // res.writeHead()
    //     res.end("成功")
    // })

    // 创建目录
    // fs.mkdir("./aa",(err)=>{
    //     if(err){
    //       throw err
    //     }
    //     res.end("success")
    // })
    // 复制 
    // copyFile


    // 创建文件（writeFile）
    //   fs.writeFile("./aa/1.txt","12969385vfdcsc",(err)=>{
    //     if(err){
    //         throw err
    //     }
    //     res.end("成功")
    // })

    // //删除文件 
    // fs.unlink("./aa/1.txt",(err)=>{
    //     if(err){
    //         throw err
    //     }
    //     res.end("成功")
    // })

    // 删除目录
    // fs.rmdir("./aa",(err)=>{
    //     if(err){
    //         throw err
    //     }
    //     res.end("成功")
    // })

    // 判断文件状态
    // fs.stat("./读取文件",(err,stats)=>{
    // //    console.log(stats.isDirectory())//目录
    //    console.log(stats.isFile())//文件
    //     res.end("22")
    // })

    // 改名称
    // fs.rename("./读取文件","./文件",(err)=>{
    //     res.end("success")
    // })

    // 追加内容 {flag:a} append
    //  fs.appendFile("./文件/1.txt","骄傲",(err)=>{
    // if(req.url=="/favicon.ico"){
    //     return 
    //     }
    //         if(err){
    //             throw err
    //         }
    //         res.end("scuess")      
    //  })
    // 复制文件
    // fs.copyFile("./文件/1.txt",(err)=>{
    //     if(err){
    //                     throw err
    //                 }
    //                 res.end("scuess") 
    //             } 
    // })
    // 打开文件
    // fs.open("./文件/1.txt",(err)=>{
    //     if(err){
    //         throw err
    //     }
    //     console.log(1)
    //     res.end("success")
    // })
    // 关闭文件
    // fs.close("./文件/1.txt",(err)=>{
    //     if(err){
    //         throw err
    //     }
    //     console.log(1)
    //     res.end("success")
    // })
    fs.readdir("./文件",function(err,data){
        // console.log(data)
      data.forEach((item,index)=>{
        var s="./文件/" +item
        fs.stat(s,(err,stats)=>{
           if(stats.isDirectory()){
             console.log(item)
           }
        }) 
      })
    })

}).listen(3000)


// 打开文件 关闭文件  
// 判断当前目录里面的内容是文件还目录 如果是目录 则把目录输出出来