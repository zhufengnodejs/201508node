require("http").createServer(comeOn).listen(8080,"localhost",function(){
    console.log("load success")
});
function comeOn(requst,response){
    response.setHeader("Content-Type","text/html;charset=utf-8");
    response.write("hello&nbsp;");
    response.end("teacher...");
};
