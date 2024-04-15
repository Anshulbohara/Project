const port=4000;
const express = require('express');
const app = express();
const productrouter=express.Router();
const ppr=require("./Routes/Products")
const mongoose = require('mongoose');
const { Schema } = mongoose;
app.use(express.json()) 
const cors=require('cors')
const env=require("dotenv").config();
const path=require("path")



main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("connect")

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
app.use('/',ppr.routes);

// Read the data file
app.use(cors())
app.use(express.static(path.resolve(__dirname,process.env.PUBLIC_DIR)))
app.use("*",(req,res)=>
{
    res.sendFile(path.resolve(__dirname,'build','index.html'))
}) 


// Start the server
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port`,process.env.PORT);
});