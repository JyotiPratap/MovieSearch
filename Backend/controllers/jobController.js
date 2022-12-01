const jobModel = require("../models/jobModel");
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
    res.status(201).send({ status: true, message: 'User created successfully', data: job })

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


module.exports.createJob = createJob
module.exports.getAllJob = getAllJob
