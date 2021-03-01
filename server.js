const express = require('express');
const cors = require('cors')
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const path = require('path');
require('./config/config');
const morgan  = require('morgan');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

app.use(morgan('tiny'));
app.use(cors())


app.use(require('./routes/contact'));
app.use(require('./routes/user'));
app.use(require('./routes/index'));
app.use(require('./routes/login'))
app.use(require('./routes/register'))



const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'client/public')));

let renderHTML = path.resolve(__dirname,'/client/public/index.html');

app.get('/',function(req,res) {
    res.sendFile(renderHTML);
})


//DB
mongoose.connect(process.env.URLDB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
},(err)=>{
    if(err)throw err;
    console.log("DB online")
});

app.listen(process.env.PORT, () => {
    console.log("Server started on port 3000")
})










