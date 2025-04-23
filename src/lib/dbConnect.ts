import mongoose from "mongoose";



type ConnectionObject={
    isConnected?:number
}

const connection:ConnectionObject ={}


async function dbConnect(): Promise<void>{
if (connection.isConnected) {
    console.log("allready connected to database")
}

try {
    const db = await mongoose.connect(process.env.MONGODB_URI || " ")
   connection.isConnected= db.connections[0].readyState
   console.log("DB connected succesfully");
   
} catch (error) {
    console.log("DB connection failed");

    process.exit()
}

}


export default dbConnect




