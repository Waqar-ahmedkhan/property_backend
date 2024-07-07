import { Request, Response } from "express";
import User from "../db/models/user";

const getAllUser = async (req: Request, res: Response) => {
  try {
    const end = parseInt(req.query._end as string, 10) || 10; 
    const users = await User.find({}).limit(end);

    res.status(200).json({
      data: users,
      message: "All users fetched successfully",
      total: users.length,
    });
  } catch (error: any) {
    res.status(500).json({
        message: "Failed to fetch users",
        error: error.message,
    })
  }
}


const getUserInforbyId = async (req: Request, res: Response) => {
  try {

    const { id } = req.params;
    const user = await User.findOne({_id: id}).populate("allPorperties");
    
    if (user) {
      return res.json(200).json(user);
    } else {
        return res.json(404).json({message: "User not found"})
    }



  } catch(err:any){

    res.json(500).json({message: err.message})
  }
     

}


    

const CreateUser = async (req: Request, res: Response) => {

    try {
        const  {name ,  email, avatar, } = req.body;
        const userExist = await User.findOne({email: email});
    
        if(userExist){
            res.json(409).json({message: "User already exists"});
        }
    
       const newUser = await User.create({name, email, avatar});
       res.json(200).json({message: "User created"});
    } catch(err:any) {
        console.log(err);
        res.json(500).json({
            message: "Failed to create user",
            error: err.message,
        })
    }
   


   
}

export { CreateUser, getAllUser, getUserInforbyId };
