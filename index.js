const http = require("http");

http
  .createServer((request, response) => {
    console.log("client send a request");
    response.writeHead(404, { "content-type": "text/plain" });
    response.write("Page not found");

    response.end();
  })
  .listen(1000);
