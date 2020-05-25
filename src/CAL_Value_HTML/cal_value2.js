
const http = require('http')
const hostname = '127.0.0.1'
const port = 3000

//var http = require('http');
//var url = require('url');
var person = require('./data.js');
var person1 = new person(50, 30);
var person2 = new person(40, 30);
let person3 = person2.fullName();
console.log(person1.fullName());
console.log(person2.fullName());
console.log(person3);

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
	res.write("C = " + person3);

    return res.end();
	
})
//.listen(3000);

const server = http.createServer(handler)
// server.listen() เพื่อระบุ port และ hostname ถ้าเราไม่กำหนด
// ตัว server ก็ยังไม่ start นั่นเอง
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/4`)
})
