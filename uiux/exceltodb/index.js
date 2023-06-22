const service=require("./service"); 
const xlsx=require("xlsx");

const uploadproductinfo = async (req, res) => {
try {
    if (req.file == undefined) {
        res.send({ code: 400, Message: "Please upload file..!" });
    }
    let path = "./images/" + req.file.filename;

    const workbook = xlsx.readFile(path);
    const worksheet = workbook.Sheets['Sheet1'];

    const data = xlsx.utils.sheet_to_json(worksheet);
 
   for (let product of data) {
    const match=await service.getproductdetails({pro_name:product.pro_name})
    if (match.length===0) {
        const saveProducts=await service.saveproductsdetails(product)
    } else {
        const updateProducts=await service.updateproductdetails(product)
    }
    
   }
res.send({Message:"success"})
} catch (error) {
    res.send({Message:"something went wrong"})
}
}

  const getproduct=async(req,res)=>{
    let product=await service.getproductdetails(req.query);
    if(product){
      res.send({code:200,Result:product})    
    }
    else{
      res.send({code:400,Message:"Can't fetch the product details"})
    }
  }



module.exports={
    uploadproductinfo,
    getproduct
};