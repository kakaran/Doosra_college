// M = MONGO , E = EXPRESS , R = REACT , N = NODE
const express = require("express");
const app = express();
const PORT = 4000;

app.get("/",function(req,res){
    return res.send("Hello Karan")
})
app.listen(PORT,function(error){
    if (error) { 
        console.log("Error in starting the server");
    }
    console.log(`server started successfully on port : ${PORT}`)
})