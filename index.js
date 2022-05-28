const express=require("express");
const app=express();
const port=8000;

// Set view engine
app.set("view engine","ejs");
app.set("views","./views");

app.use("/",require("./routes"));

// Running Node.js Server
app.listen(port,function(err){
    if(err){
        console.log("Some error in this surver >> ",err);
        return;
    }
    console.log("OK ! your server is running ......");
});