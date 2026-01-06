import mongoose from "mongoose";
import express from "express";
import Thread from "../models/Thread.js";


const router = express.Router();

router.post("/testingDB", async (req,res) => {
  const thread = new Thread({
    threadId: "testTheread2",
    title: "testing002",
  })
  try {
    const response = await thread.save();
    res.send(response);
  }
  catch (err) {
    console.log(err);
    res.status(500).json({error:"failed to save"});
  }
})

router.get("/thread", async(req,res)=>{
  try{
    const threads = await Thread.find({}).sort({updatedAt: -1});
    res.send(threads);
  }catch(err){
    console.log(err);
    res.status(500).json({erroe:"Failed to get Threads"})
  }
})

router.get("/thread/:threadId", async(req,res)=>{
  const {id} = req.params ;
  try{
    const thread = await Thread.findOne({id});
    res.send(thread);
  }catch(err){
    console.log(err);
    res.status(500).json({error: "Failed to find Thread"});
  }
})

export default router;