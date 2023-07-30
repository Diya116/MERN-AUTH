import Usermodel from "../model/Usermodel";
import bcrypt from "bcrypt"
export async function verifyUser(req,res,next){
    try{
        const {username}=req.method== "GET"?req.query:req.body;
        let exist=await Usermodel.findOne({username});
        if(!exist) return res.status(404).send({error:"can't find user"});
        next();
    }
    catch(error)
    {
        return res.status(404).send({error:"Authentication Error"});
    }
}

export async function register(req,res){


    try{
        const{username,password,profile,email}=req.body;
        const existUsername = new Promise((resolve, reject) => {
            UserModel.findOne({ username }, function(err, user){
                if(err) reject(new Error(err))
                if(user) reject({ error : "Please use unique username"});
                resolve();
            })
        });
        const existEmail = new Promise((resolve, reject) => {
            UserModel.findOne({ email }, function(err, email){
                if(err) reject(new Error(err))
                if(email) reject({ error : "Please use unique Email"});
                resolve();
            })
        });
      Promise.all([existUsername,existEmail]).then(()=>{
        if(password){
            bcrypt.hash(password,10).then(hashedPassword=>{
                const user=new UserModel({
                    username,
                    password:hashedPassword,
                    profile:profile || '',
                    email
                });
                user.save().then(result=>)
            })
        }
      })
    } 



} 

