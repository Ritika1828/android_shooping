
const {validateEmail,validateName,validatePassword} =require('../helpers/validation')
const {getUserByEmail, createUser, authUser , getPassword, LoginCheck}=require('../models/user');
const crypto=require('crypto');
const JWT=require('jsonwebtoken')


const JWT_Key="sretsdfhghljlhkwdkhwejdopwkowjdio";

async function registration(req, res) {
     const {email,username,password}=req.body;
     if (
        false && (
        !validateEmail(email) ||
        !validatePassword(password))
      ) {
        return res
          .status(400)
          .send({
            status:400,
            message:"validation issues"
        });
      }

    
    getUserByEmail(email)
      .then((result) => {
        
        console.log(result);
        if (result) {
          return res.status(400).send({
            status:400,
            message:"User email already exists"
        });
        }
        createUser({ username, email })
          .then((result) => {
             return authUser(email, password).then((data)=>{
              
              return res.status(200).send({
                status:200,
                message:`${username} is registered successfully`
                          })
            });
          })
          .catch((error) => {
            return res.status(400).send(error.message);
          });
      })
      .catch((error) => {
        return res.status(400).send(error.message);
      });
  };

async function login(req, res) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send({
      status: 400,
      message: "Incorrect email",
    });
  }
    
  getUserByEmail(email).then((data) => {
    const passwordHash = crypto
      .createHash("sha256")
      .update(password)
      .digest("hex");
    if (data) {
      return getPassword(email)
        .then((dbPassword) => {
          console.log({ dbPassword });
          if (dbPassword == passwordHash) {
            const token = JWT.sign(data.userid, JWT_Key);
            console.log("fxcghvj");
            res.send(token);

          }
        })
        .catch((error) => {
          return res.status(400).send(error.message);
        });
    }
  });
  
}
LoginCheck(email)
  .then((data) => {
    let x = data.rows
    if (x.length > 3) {
      return res.send("Maximum Limit Exeed")
    }
  

  

  
  



    


    module.exports = {
      registration,
      login, LoginCheck
    }

  