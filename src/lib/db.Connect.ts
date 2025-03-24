import { promises } from "dns";
import mongoose  from "mongoose";
import { Monofett } from "next/font/google";

type ConnetionObject= {
    isConnected?: number
}

const connection: ConnetionObject = {}

async function dbConnect(): Promise<void> {
    if(connection.isConnected){
        console.log("already connected to db")
        return
    }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URL || '', {})
  connection.isConnected=  db.connections[0].readyState
    
  } catch (error) {
    console.log('conection failed')
    process.exit(1)
  }
    
   
}

export default  dbConnect