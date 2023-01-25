const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    const date = new Date();
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(`Current time is ${date.toString()}`);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
