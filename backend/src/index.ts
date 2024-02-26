import express, { Request, Response} from 'express';
import cors from 'cors';
import "dotenv/config";//loads environment variables
import mongoose from 'mongoose';//allows connection to database

mongoose.connect(process.env.MONGO_CONNECTION_STRING as string);

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.get("/api/test", async (req: Request, res: Response)=>{
 res.json({message: "hello from express endpoint!"});
});

app.listen(7000, ()=>{
    console.log("server running on localhost:7000");
});
