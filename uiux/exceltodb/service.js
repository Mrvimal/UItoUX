
const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
   category:String,
   image:String,
   pro_name:String,
   pro_price:String
});

const model = mongoose.model("productDetail", productSchema);

const saveproductsdetails = async (data) => {
    try {

        const product = new model(data);
        const savedata = await product.save();
        return savedata;
    } catch (err) {
        return false
    }
};

const getproductdetails = async (data) => {
    try {

        var query = [];
        var product;

        if (data.pro_name) {
           
            query.push({ $match: { "pro_name": data.pro_name } })
            product = await model.aggregate([
                query
            ]);
        }
        else {
    
            product = await model.find({})
        }
        return product;
    } catch (err) {
        return false
    }
};

const updateproductdetails = async (data) => {
    try {
        const users = await model.updateMany(
            { pro_name: data.pro_name },
            {
                $set: {
                    "pro_price": data.pro_price,
                    "category":data.category,
                }
            },
            {new:true}
        );

        return users;
    } catch (err) {
        return false
    }
};


module.exports = {
    saveproductsdetails,
    getproductdetails,
    updateproductdetails  
}