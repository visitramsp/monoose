var mongoose = require("mongoose");

const readline =require('readline').createInterface({
	input:process.stdin,
	output:process.stdout
})

var ProductSchema = new mongoose.Schema(
    {id : Number, name : String, price : String,qty:Number,brand:String},
    {versionKey:false}
    );

mongoose.connect("mongodb://0.0.0.0:27017/ecommerce",{ 
    useNewUrlParser: true,
    useUnifiedTopology: true 
});


var ProductModel = mongoose.model("Model",ProductSchema,"products");



readline.question("Product ID:",(id)=>{
	// products.id=id
		readline.question("Product Name:",(name)=>{
		// products.name=name
			readline.question("Product price:",(price)=>{
			// products.price=price
				readline.question("Product qty:",(qty)=>{
				// products.qty=qty
					readline.question("Product brand:",(brand)=>{
					// products.brand=brand
					readline.close();
					
					var products = new ProductModel({id,name,price,qty,brand});
					
					//How to Insert the Record
					products.save(function(error,data){
					  if(error==null){
						  console.log("Data Inserted",data);
					  }else{
						  console.log("Exception Occured...");
					  }
						mongoose.disconnect();
					})
				})
			})
		})
	})
})








