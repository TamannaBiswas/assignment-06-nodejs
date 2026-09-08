// 1. Create HTTP Server
const http = require("http");

const server = http.createServer((req, res) => {
  res.write("This is heading");
  res.end();
});

server.listen(5000, () => {
  console.log("Server running on port 5000");
});
