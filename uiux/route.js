const express=require("express");
const router= express.Router();
const multer =require("./multer");
const data=require("./exceltodb/index")

let routes=(app)=>{
    router.post("/upload",multer.single("UItoUX"),data.uploadproductinfo)

    router.get("/getPros",data.getproduct)
    
    app.use("/api", router);
}
module.exports=routes