import User from "../models/registerModel.js"
import { Router } from "express";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const router = Router()

export const registerUser = async (req, res) => {
    const {email, password, firstName, lastName} = req.body

    const userExists = await User.findOne({email})

    if(userExists) {
        res.status(406).json({message: 'user already exists'})
        return
    }
    const saltRounds = 10;
    const salt = await bcrypt.genSaltSync(saltRounds);
    const hash = await bcrypt.hashSync(password, salt);
    
    const user = new User({
        email,
        password: hash,
        firstName,
        lastName,
    });

    await user.save()
    res.status(201).json({message: 'user is created'})

}

export const confirmUser = async (req, res) => {
    const {email, password} = req.body

    const user = await User.findOne({email})
    if(!user) {
        res.status(406).json({message: 'user doesnt exist'})
        return
    }
   
    const passwordConfirm = await bcrypt.compare(password, user.password);
    if(!passwordConfirm) {
        res.status(406).json({message: 'user doesnt exist'})
        return
    }

    const key = {
        _id: user._id,
    }

    const token = jwt.sign(key, process.env.JWT_SECRET)
    res.json({message: 'successful', token, user})
}

