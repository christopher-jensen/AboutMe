const express = require("express");
const router = express.Router();
const views = "../Views/";

router.get('/',(req, res)=>{
    res.sendFile(views + 'AboutMeStart.html');
})


module.exports = router;