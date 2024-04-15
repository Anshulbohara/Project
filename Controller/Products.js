const fs = require('fs');
const data = JSON.parse(fs.readFileSync('data.json', 'utf8'));
const products=data.products;
const model=require('../model/product');
const Product =model.Product;

exports.toget=((req, res) => {
    
    const product=new Product(req.body);
    // product.title='cc ';
    // product.price=5;
    // product.rating=1115;
      product.save().then(data=>{
        res.status(201).json(data)
      }).catch(err=>{ 
        console.log("error Happende",err)
        res.status(500).json(err)
      })
     

});

exports.todelete=async(req,res)=>
{
  const id=req.params.id
  try{
    const doc= await Product.findOneAndDelete({_id:id})
    res.status(201).json(doc)
  }
  catch(err){
    console.log(err);
    res.status(400).json(err);
  }
}

exports.pget=async(req,res)=>
{
  const id=req.params.id
  try{
    const doc= await Product.findOneAndUpdate({_id:id},req.body,{new:true})
    res.status(201).json(doc)
  }
  catch(err){
    console.log(err);
    res.status(400).json(err);
  }
}
exports.toallget=async(req,res)=>
{
  const products=await Product.find()
    res.json(products);
}

