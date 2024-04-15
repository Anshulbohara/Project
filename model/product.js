const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({   
    title: {type:String,required:true},
    description: String,
    price: {type:Number,min:[1,"wrong dis "]},
    discountPercentage: {type:Number,min:[0,"wrong dis "],max:[5,'right dis']},
    rating: {type:Number,min:[0,"wrong min rating"],max:[5,'wrong max rating']},
    brand:  {type:String},
    category:  {type:String},
    thumbnail:  {type:String},
    images: [ String ]
});

exports.Product = mongoose.model('Product', productSchema)

