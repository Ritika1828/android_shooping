const express = require("express");
const router = express.Router();

function validateEmail(email){
    var regularExpression  = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (regularExpression.test(email)){
        return false
     }
     else{
         return true
     }

}
module.exports=validateEmail;
