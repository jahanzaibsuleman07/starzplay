var http = require("http");
http.createServer(function(req, res){
  setTimeout(() => {
    res.writeHead(200, {"Content-type":"text/plain", "Access-Control-Allow-Origin": "*"});
    res.write("/images/whatsTrending-lg.png");
    res.end();
  }, 8000);
}).listen(7000, () => console.log("Server running on port 7000"));
