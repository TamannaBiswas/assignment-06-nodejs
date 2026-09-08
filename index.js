// 1. Create HTTP Server
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  // home page
  if (req.url == "/") {
    res.end(`
      <h1>Home Page</h1>
      <p>Welcome to my Home Page.</p>

      <a href="/">Home</a> |
      <a href="/blog">Blog</a> |
      <a href="/about">About</a> |
      <a href="/contact">Contact</a>
    `);
  }
  //blog page
  else if (req.url == "/blog") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end(`
      <h1>Blog Page</h1>
      <p>Welcome to my Blog Page.</p>

      <a href="/">Home</a> |
      <a href="/blog">Blog</a> |
      <a href="/about">About</a> |
      <a href="/contact">Contact</a>
    `);
  } else if (req.url === "/about") {
    res.end(`
      <h1>About Page</h1>
      <p>This is the About Page of my website.</p>

      <a href="/">Home</a> |
      <a href="/blog">Blog</a> |
      <a href="/about">About</a> |
      <a href="/contact">Contact</a>
    `);
  } else if (req.url === "/contact") {
    res.end(`
      <h1>Contact Page</h1>
      <p>You can contact us through this page.</p>

      <a href="/">Home</a> |
      <a href="/blog">Blog</a> |
      <a href="/about">About</a> |
      <a href="/contact">Contact</a>
    `);
  }
});

server.listen(5000, () => {
  console.log("Server running on port 5000");
});
