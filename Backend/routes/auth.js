const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


router.post("/register", async (req, res) => {
    try {
        // Extract username, email, and password from the request body
        const { username, email, password } = req.body;

        // Generate a salt for password hashing
        const salt = await bcrypt.genSalt(10);

        // Hash the password using the generated salt
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new User instance with the hashed password
        const newUser = new User({ username, email, password: hashedPassword });

        // Save the new user to the database
        const savedUser = await newUser.save();

        // Respond with the saved user object
        res.status(200).json(savedUser);
    } catch (err) {
        // If an error occurs during registration, respond with a 500 status code and the error message
        res.status(500).json({ error: err.message });
    }
});


// Login

router.post("/login",async (req,res)=>{
        try{
            const user=await User.findOne({email:req.body.email})
           
            if(!user){
                return res.status(404).json("User not found!")
            }
            const match=await bcrypt.compare(req.body.password,user.password)
            
            if(!match){
                return res.status(401).json("Wrong credentials!")
            }
            const token=jwt.sign({_id:user._id,username:user.username,email:user.email},process.env.SECRET,{expiresIn:"3d"})
            const {password,...info}=user
            res.cookie("jwtToken",token).status(200).json(info)
    
        }
        catch(err){
            res.status(500).json(err)
        }
    })

    //LOGOUT


router.get("/logout",async (req,res)=>{
    try{
        res.clearCookie("token",{sameSite:"none",secure:true}).status(200).send("User logged out successfully!")

    }
    catch(err){
        res.status(500).json(err)
    }
})


// Exporting the router
module.exports = router;










//REFETCH USER
router.get("/refetch", (req,res)=>{
    const token=req.cookies.token
    jwt.verify(token,process.env.SECRET,{},async (err,data)=>{
        if(err){
            return res.status(404).json(err)
        }
        res.status(200).json(data)
    })
})



module.exports=router