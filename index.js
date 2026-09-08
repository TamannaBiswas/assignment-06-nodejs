const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });

    res.end(`
      <h1>Home Page</h1>
      <p>Welcome to my Home Page.</p>

      <a href="/">Home</a> |
      <a href="/blog">Blog</a> |
      <a href="/about">About</a> |
      <a href="/contact">Contact</a>
    `);
  } else if (req.url === "/blog") {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });

    res.end(`
      <h1>Blog Page</h1>
      <p>Welcome to my Blog Page.</p>

      <a href="/">Home</a> |
      <a href="/blog">Blog</a> |
      <a href="/about">About</a> |
      <a href="/contact">Contact</a>
    `);
  } else if (req.url === "/about") {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });

    res.end(`
      <h1>About Page</h1>
      <p>This is the About Page.</p>

      <a href="/">Home</a> |
      <a href="/blog">Blog</a> |
      <a href="/about">About</a> |
      <a href="/contact">Contact</a>
    `);
  } else if (req.url === "/contact") {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });

    res.end(`
      <h1>Contact Page</h1>
      <p>This is the Contact Page.</p>

      <a href="/">Home</a> |
      <a href="/blog">Blog</a> |
      <a href="/about">About</a> |
      <a href="/contact">Contact</a>
    `);
  } else {
    res.writeHead(404, {
      "Content-Type": "text/html",
    });

    res.end(`
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>

      <a href="/">Go to Home</a>
    `);
  }
});

server.listen(5000, () => {
  console.log("Server running on port 5000");
});
