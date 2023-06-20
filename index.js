const express = require('express');
const app = express();
const port = 5000;
const mongoDB = require('./database')
mongoDB();

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.header(
        "Access-Control-Allow-Headers","Origin,X-requested-With, Content-Type, Accept"
    );
    next();
})

app.use(express.json())
app.use('/api',require('./routes/CreateUser'))
app.use('/api',require('./routes/DisplayData'))
app.use('/api',require('./routes/OrderData'))
app.use('/api',require('./routes/MyOrders'))

app.get('/',(req,res)=>{
    res.send('Hello world');
})


app.listen(port,()=>{
    console.log(`The app is listening on port ${port}`);
})