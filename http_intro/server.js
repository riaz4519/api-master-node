const http = require("http");
const todos = [
  {
    id: 1,
    text: "Todo one",
  },
  {
    id: 2,
    text: "Todo two",
  },
  {
    id: 3,
    text: "Todo three",
  },
];
const server = http.createServer((req, res) => {
  res.writeHead(400, {
    "Content-Type": "application/json",
    "X-Powered-By": "Node.js",
  });
  res.end(
    JSON.stringify({
      success: false,
      error: "Please add email",
      data: null,
    })
  );
});

const PORT = 5000;

server.listen(PORT, () => {
  console.log(`Server running at port : ${PORT}`);
});
