import mongoose from "mongoose";
import {MONGO_URI} from './config.js'

export async function DBConnetion() {
    await mongoose.connect(MONGO_URI)
    console.log("Connected to DB")
 }