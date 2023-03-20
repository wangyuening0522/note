const fs=require('fs');
fs.readFile('db.json',(error,data)=>{
    if(error)
    {
        return console.log('readFile failed,please contact manager');
    }
    //打印json对象
     console.log(JSON.parse(data).students);
    const students=data.toString();
    //写入填入字符串数据而不是对象
    fs.writeFile('copy.json',students,(err)=>{
        if(err) throw err;
        console.log('The file has been saved!');
    })
})