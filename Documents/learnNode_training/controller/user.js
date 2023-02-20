
const {getUserById}=require('../models/user')
function me(req,res)
{   
    getUserById(req.session).then((user)=>{
         
       if(user && user.userid)
       {
        console.log(user);
        res.status(200).json(user);
       }
    }).catch((error)=>{
        res.status(400).send(error);
    })
}
module.exports= {me};