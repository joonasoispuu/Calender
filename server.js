const express = require('express');
const date= require(__dirname+'/getDate.js')

const app = express();

app.get('/', (request, response)=>{
    response.send('Hello, world!');
});

app.get('/getdate', (req, res)=> {//req - request, res - response
    let today = date.getDate();
    res.send(today);

})


port = 6000;
app.listen(port, ()=> {
    console.log(`Server is running on port ${port}.`);
});