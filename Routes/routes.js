const express = require("express");
const router = express.Router();
const views = "../Views/";
const axios = require("axios");
const token = require("../Private/token")


const config = {
    headers: { Authorization: `Bearer ${token.getToken()}` }
};

router.get('/foodwaste', async (req, res)=>{
    let result = await
    axios.get('https://api.sallinggroup.com/v1/food-waste/?zip=9000', config)
    .then(res => {
        return res.data.slice(0,3)
    })
    
})


module.exports = router;