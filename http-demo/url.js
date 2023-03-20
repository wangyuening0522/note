
const url=require('url');
const obj=url.parse('https://www.baidu.com:9999?somepath?name=cc&pwd=888#1234',true)
//hash:#1234  port:9999  host:www.baidu.com:999
//ture query变成对象
console.log(obj);

