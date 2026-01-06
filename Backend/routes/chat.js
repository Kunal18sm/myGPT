import mongoose from "mongoose";
import express from "express";
import Thread from "../models/Thread.js";


const router = express.Router();

//Add thread for testing ✅✅
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

//Show all threads ✅✅
router.get("/thread", async(req,res)=>{
  try{
    const threads = await Thread.find({}).sort({updatedAt: -1});
    res.send(threads);
  }catch(err){
    console.log(err);
    res.status(500).json({erroe:"Failed to get Threads"})
  }
})

//find One Thread ✅✅
router.get("/thread/:threadId", async(req,res)=>{
  const {threadId} = req.params ;
  
  try{
    const thread = await Thread.findById(threadId);
    if (!thread) {
      return res.status(404).json({ error: "Thread not found" });
    }
    console.log({thread});
    res.json(thread);
  }catch(err){
    console.log(err);
    res.status(500).json({error: "Failed to find Thread"});
  }
})


//delete one thread ✅✅
router.delete("/thread/:threadId",async(req,res)=>{
  const {threadId} = req.params ;
  try{
    const deletedThread = await Thread.findByIdAndDelete(threadId);
    res.send("Thread successfully removed");
  }catch(err){
    console.log(err);
    res.status(500).json({error:"deletion failed"});
  }
})

export default router;