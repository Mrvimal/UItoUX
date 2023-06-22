const app=require("express")();
const bodyParser=require("body-parser");
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));


require("./mongo");
require("./route")(app);

const PORT=5000;
app.listen(PORT, ()=>{
    console.log(`Server is running ${PORT}`);
})