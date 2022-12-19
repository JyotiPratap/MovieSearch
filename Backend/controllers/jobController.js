const jobModel = require("../models/jobModel");
const usermodel = require("../models/userModel");
const validator = require("../utils/validator");


const createJob = async (req, res) => {
  try {
    let requestBody = req.body

    if (!validator.isValidRequestBody(requestBody))
      return res.status(400).json({
        status: false, msg: "Invalid request parameters ,please provide the user details",
      });

    let { CompanyName,Role, Batch,Salary , Location} = requestBody;

    if (!validator.isValid(CompanyName))
      return res.status(400).json({ status: false, msg: "please provide the CompanyName" });

    if (!validator.isValid(Role))
      return res.status(400).json({ status: false, msg: "please provide the Role" });

    if (!validator.isValid(Batch))
      return res.status(400).json({ status: false, msg: "please provide the Batch" });

    if (!validator.isValid(Salary))
      return res.status(400).json({ status: false, msg: "please provide the Salary" });
    
    if (!validator.isValid(Location))
      return res.status(400).json({ status: false, msg: "please provide the Location" });

    const updatedBody = { CompanyName,Role, Batch,Salary, Location}

    let job = await jobModel.create(updatedBody)
    res.status(201).send({message: 'User created successfully', data: job })

  } catch (err) {
    res.status(500).json({ status: false, msg: err.message });
  }
};

const getAllJob = async (req,res)=>{
  try{
    const data = req.query;
    let job = await jobModel.find(data);
    if(!job){
      return res.status(401).send({ status: false, message: `No Such Data  Here` });
    }
    res.status(201).send({ result: job })
      //  status: true, message: 'User get successfully', 
  } catch (err) {
    res.status(500).json({ status: false, msg: err.message });
  }
}





const createuser = async (req, res) => {
  try {
    let requestBody = req.body

    if (!validator.isValidRequestBody(requestBody))
      return res.status(400).json({
        status: false, msg: "Invalid request parameters ,please provide the user details",
      });

    let { email,password} = requestBody;

    if (!validator.isValid(email))
      return res.status(400).json({ status: false, msg: "please provide the email" });

    if (!validator.isValid(password))
      return res.status(400).json({ status: false, msg: "please provide the password" });

   

    const createUser = { email,password}

    let user = await usermodel.create(createUser)
    res.status(201).send({ status: true, message: 'User created successfully', data: user })

  } catch (err) {
    res.status(500).json({ status: false, msg: err.message });
  }
};



const loginUser = async function(req,res){
     try{
      let requestBody = req.body;
      let { email,password} = requestBody;

          if(!email){
               return res.status(400).send({status : false, msg : "Enter Valid Email"})}
          if(!password){
               return res.status(400).send({status:false,msg:"Enter valid Password"})}

          let data = await usermodel.findOne({email : email,password : password})
          if(!data){
               return res.status(400).send({status:false,msg:"credentials dont match,plz check and try again"})} 
            
          res.status(200).send({message: 'login successfully',data : data})

     }
     catch(error)
     {
          console.log(error)
          res.status(500).send({status: false, msg: error.message})
     }
}



module.exports.createJob = createJob
module.exports.getAllJob = getAllJob
module.exports.createuser = createuser
module.exports.loginUser = loginUser
