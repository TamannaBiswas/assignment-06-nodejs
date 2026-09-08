// 1. Create HTTP Server
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  // home page
  if (req.url == "/") {
    res.end(`
      <h1>Home Page</h1>
      <p>Welcome to my Home Page.</p>

      <a href="/">Home</a>
      <a href="/blog">Blog</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
    `);
  }
});

server.listen(5000, () => {
  console.log("Server running on port 5000");
});
