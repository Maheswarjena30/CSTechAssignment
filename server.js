const http = require("http");

const fs = require("fs")


let data = fs.readFileSync("Html1/employee.json", "utf-8");
data = JSON.parse(data);

http.createServer((req, res) => {
  const url = req.url;
  if (url === "/employees") {
    res.end(JSON.stringify(data));

  }
  else if (url[url.length - 1] >= 1) {
    res.end(JSON.stringify(data[url[url.length - 1] - 1]))
  }
  else {
    res.end("<h1>No data Available</h1>")
  }

}).listen(3000, () => {
  console.log("server started with port no 3000")
})




