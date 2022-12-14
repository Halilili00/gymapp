import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv'

import User from "../models/user.js";

dotenv.config();

export const signin = async(req, res) => {
    const {email, password} = req.body;

    try {
        const existingUser = await User.findOne({email})

        if(!existingUser)
            return res.status(404).json({message: "User doesn't exist"})

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        if(!isPasswordCorrect)
            return res.status(400).json({message: "Invalid password"})

        const token = jwt.sign({email: existingUser.email, id: existingUser._id}, process.env.JWT_KEY, {expiresIn: "1h"})
        res.status(200).json({result: existingUser, token});
    } catch (error) {
        res.status(400).json({message: "Something wrong"})
    }
}

export const signup = async(req, res) => {
    const { email, password, confirmPassword, firstName, lastName } = req.body;
    const strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})')

    try {
        const existingUser = await User.findOne({email})

        if(strongPassword.test(password)) return res.status(400).json({message: "Password need to be 8 characters and have one uppercase letter, one lowercase letter, one digit!"})
        if(existingUser) return res.status(404).json({message: "User already exist"})
        
        if(password !== confirmPassword) return res.status(400).json({message: "Password not match!"})

        const hashedPassword = await bcrypt.hash(password, 12)

        const result = await User.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` });
        const token = jwt.sign( { email: result.email, id: result._id }, process.env.JWT_KEY, { expiresIn: "1h" } );     
        res.status(201).json({ result, token });
    } catch (error) {
        res.status(400).json({message: "Something wrong"})
    }
}