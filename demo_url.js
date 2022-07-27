var url = require('url');
var addr = 'http://localhost:8000/default.htm?year=2017&month=february';
var q = url.parse(addr,true);

console.log(q.host);// return localhost
console.log(q.pathname);// return default.html
console.log(q.search); // return ?year=2017&month=febuary

var qdata = q.query; // return an object :{year:2017, month: 'febuary'}
console.log(qdata.month); // return febuary