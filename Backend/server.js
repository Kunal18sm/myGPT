import "dotenv/config";
import { GoogleGenAI } from "@google/genai";
import mongoose from "mongoose";
import express from "express";
import chatRouts from "./routes/chat.js";
import cors from "cors";


const mongoURL = process.env.MongoDB_URL ;
const app = express();
const PORT = 8080;

const connectDB = async() => {
  try{
    await mongoose.connect(mongoURL);
    console.log("DataBase Connected");    
  }
  catch(err){
    console.log(err);
  }
}

app.use("/api",chatRouts);

app.get('/',(req,res)=>{
  res.send("HAA meri jaan");
})

app.post("/test", async(req,res)=>{
  const ai = new GoogleGenAI({apiKey: process.env.Gemini_API_KEY ,});
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "answer only in one word Human is",
  });
  res.send(response.text);
})

app.listen(PORT ,()=>{
  console.log(`App is listning Port: ${PORT}`);
  connectDB();
})



// The client gets the API key from the environment variable `GEMINI_API_KEY`.
// const ai = new GoogleGenAI({apiKey: process.env.Gemini_API_KEY ,});

// async function main() {
//   console.log("API KEY:", process.env.GEMINI_API_KEY);

//   const response = await ai.models.generateContent({
//     model: "gemini-2.5-flash",
//     contents: "answer only in one word Human is",
//   });
//   console.log(response.text);
// }

// main();