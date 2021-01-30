const express = require('express');
const bodyParser=require('body-parser');
const mongoose= require("mongoose");
mongoose.connect("mongodb://localhost:27017/fuckDB",{useNewUrlParser:true},{ useUnifiedTopology: true });

const itemSchema= new mongoose.Schema({
  name:String,
  gender:String,
  number:Number,
  email:String,
  department:String,
  checkUpType:String

});
const neurologygeneral=mongoose.model("neurology-general",itemSchema);
const neurologyemergency=mongoose.model("neurology-emergency",itemSchema);
const cardiologygeneral=mongoose.model("cardiology-general",itemSchema);
const cardiologyemergency=mongoose.model("cardiology-emergency",itemSchema);
const orthopedicgeneral=mongoose.model("orthopedic-general",itemSchema);
const orthopedicemergency=mongoose.model("orthopedic-emergency",itemSchema);
const dermatalogygeneral=mongoose.model("dermatalogy-general",itemSchema);
const dermatalogyemergency=mongoose.model("dermatalogy-emergency",itemSchema);
const oncologygeneral=mongoose.model("oncology-general",itemSchema);
const oncologyemergency=mongoose.model("oncology-emergency",itemSchema);



const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.get('/', function (req, res) {
  
  res.render("index");

})
function insert (name){
  const item1=new (req.body.department+req.body.consultantType)({
    name:req.body.name,
    gender:req.body.gender,
    number:req.body.contactnumber,
    email:req.body.email,
    department:req.body.consultantType,
    checkUpType:req.body.department
  });
  item1.save()

}
app.get('/appoinment', function (req, res) {
  
  res.render("appoinment");

})
app.post('/appoinment',function(req,res){
  
  console.log(req.body);
  var collectionName=req.body.department+req.body.consultantType;
  console.log(collectionName);
  if (collectionName==="neurologygeneral"){
    const item1=new neurologygeneral({
      name:req.body.name,
      gender:req.body.gender,
      number:req.body.contactnumber,
      email:req.body.email,
      department:req.body.consultantType,
      checkUpType:req.body.department
    });
    item1.save()
  }
  else if (collectionName==="neurologyemergency"){
    const item1=new neurologyemergency({
      name:req.body.name,
      gender:req.body.gender,
      number:req.body.contactnumber,
      email:req.body.email,
      department:req.body.consultantType,
      checkUpType:req.body.department
    });
    item1.save()
  }
  else if(collectionName==="cardiologygeneral"){
    const item1=new cardiologygeneral({
      name:req.body.name,
      gender:req.body.gender,
      number:req.body.contactnumber,
      email:req.body.email,
      department:req.body.consultantType,
      checkUpType:req.body.department
    });
    item1.save()
  }
  else if(collectionName==="cardiologyemergency"){
    const item1=new cardiologyemergency({
      name:req.body.name,
      gender:req.body.gender,
      number:req.body.contactnumber,
      email:req.body.email,
      department:req.body.consultantType,
      checkUpType:req.body.department
    });
    item1.save()
  }
  else if(collectionName==="orthopedicgeneral"){
    const item1=new orthopedicgeneral({
      name:req.body.name,
      gender:req.body.gender,
      number:req.body.contactnumber,
      email:req.body.email,
      department:req.body.consultantType,
      checkUpType:req.body.department
    });
    item1.save()
  }
  else if(collectionName==="orthopedicemergency"){
    const item1=new orthopedicemergency({
      name:req.body.name,
      gender:req.body.gender,
      number:req.body.contactnumber,
      email:req.body.email,
      department:req.body.consultantType,
      checkUpType:req.body.department
    });
    item1.save()
  }
  else if(collectionName==="dermatalogygeneral"){
    const item1=new dermatalogygeneral({
      name:req.body.name,
      gender:req.body.gender,
      number:req.body.contactnumber,
      email:req.body.email,
      department:req.body.consultantType,
      checkUpType:req.body.department
    });
    item1.save()
  }
  else if(collectionName==="dermatalogyemergency"){
    const item1=new dermatalogyemergency({
      name:req.body.name,
      gender:req.body.gender,
      number:req.body.contactnumber,
      email:req.body.email,
      department:req.body.consultantType,
      checkUpType:req.body.department
    });
    item1.save()
  }
  else if (collectionName==="oncologygeneral"){
    const item1=new oncologygeneral({
      name:req.body.name,
      gender:req.body.gender,
      number:req.body.contactnumber,
      email:req.body.email,
      department:req.body.consultantType,
      checkUpType:req.body.department
    });
    item1.save()
  }
  else {
    const item1=new oncologyemergency({
      name:req.body.name,
      gender:req.body.gender,
      number:req.body.contactnumber,
      email:req.body.email,
      department:req.body.consultantType,
      checkUpType:req.body.department
    });
    item1.save()
  }

  res.render('index');
})

app.get('/login', function (req, res) {
  
  res.render("login");

})
app.listen(3000,function(){
    console.log("server port on 3000");
  })