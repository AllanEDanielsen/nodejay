//http
var http = require('http');

var server = http.createServer(function(req, res){
    res.writeHead(200,{'Content-type':'text/plain'});
    res.write('{"title" : "Hello JSON web API", "text":  "Text fra min API" }');
    res.end('{"title" : "Hello World", "Text" : "This is my first web api"    }');
});

server.listen(3003);