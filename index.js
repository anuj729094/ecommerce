const express = require('express')
const app = express()
const connect = require('./db/connection')
const cors = require('cors')
const cloudinary = require('cloudinary')

cloudinary.config({ 
    cloud_name: 'dw4wbtjju', 
    api_key: '318446464354253', 
    api_secret: 'cc-vECj6JoN7tR4G-Nz5zj-lZys' 
  });

  cloudinary.v2.uploader.upload("https://repository-images.githubusercontent.com/403817624/3d10f761-1027-4d0a-9906-48361e466d87",
  { public_id: "olympic_flag" }, 
  function(error, result) {console.log(result); });

connect()
app.use(cors())
          

app.use(express.json())
app.get('/' ,async(req,res)=>{
   res.send('Home')
})

app.use(require('./routes/product'))
app.use(require('./routes/Cart'))
app.use(require('./routes/Payment'))


app.listen(5000 , ()=>{
    console.log('Server started at port 5000');
})