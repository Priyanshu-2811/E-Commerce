import User from "../models/user.model.js";
export const signup = async(req, res) => {
  //desktop app => postman
  const {email,password,name} = req.body
  try {
    const userExists = await User.findOne({email});
    if (userExists){
      return res.status(400).json({message:"User already exists"});
    }
    const user = await User.create({name,email,password}) 

    res.status(201).json({message:"User created successfully"});
  } catch (error) {
    res.status(500).json({message:"Server error" + error.message});
  }
};
export const login = async(req, res) => {
    res.send("Login route call");
}
export const logout = async(req, res) => {
    res.send("Logout route call");
}