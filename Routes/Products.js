const express = require('express');
const app = express();
const productrouter=express.Router();
const productcontroller=require('../Controller/Products')

productrouter
.get('/',productcontroller.toallget)
.post('/', productcontroller.toget)
.delete('/:id',productcontroller.todelete)
.put('/:id',productcontroller.pget)


exports.routes=productrouter;  