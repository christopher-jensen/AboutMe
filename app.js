const express = require("express");
const path = require("path");
const moment = require("moment");

const app = express();

// app.use('/', router);

app.use(express.static(path.join(__dirname, 'Public')))

app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname,'/Public/Views/AboutMeStart.html'));
})


const logger = (req, res, next)=>{
    console.log(`${moment().format()}:  ${req.protocol}://${req.get("host")}${req.originalUrl}`);
    next();
}

//middleware
// app.use(logger); Skal laves om til at logge til en fil

const PORT = process.env.PORT || 8000;

app.listen(PORT, ()=> console.log(`Server running on port: ${PORT}`));