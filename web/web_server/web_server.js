const http = require('http');
const url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  /*Use the url module to turn the querystring into an object:*/
  let q = url.parse(req.url, true).query;
  /*Return the year and month from the query object:*/
  let txt = q.year + " " + q.month;
  res.end(txt);
}).listen(8080);
