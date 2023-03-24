var mongoose = require("mongoose");


var ProductSchema = new mongoose.Schema(
    {id : Number, name : String, price : String,qty:Number,brand:String},
    {versionKey:false}
    );

mongoose.connect("mongodb://0.0.0.0:27017/ecommerce",{ 
    useNewUrlParser: true,
    useUnifiedTopology: true 
});


var ProductModel = mongoose.model("Model",ProductSchema,"products");



var product = new ProductModel({id:1004,name:"watch",price:"140.00",qty:5,brand:'luckie'});


//How to Insert the Record
product.save(function(error,data){
  if(error==null){
      console.log("Data Inserted",data);
  }else{
      console.log("Exception Occured...");
  }
    mongoose.disconnect();
});




