import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import "dotenv/config"
import { connect } from "http2"
import authRoutes from "./routes/auth.js"

const app = express()
app.use(express.json())
app.use(cors())
app.use(express.static("public"))

//Routes
app.use("/auth", authRoutes)

// MongoDB connection
const PORT = 4000;
const connectDB = async() => {
    await mongoose.connect(process.env.MONGODB_URL).then(()=>
        console.log("Database connected")
    )
}
connectDB()

app.listen(PORT, (err)=> {
    if(!err) {
        console.log(`Server started on http://localhost:${PORT}`)
    } else {
        console.log("Error: " + err)
    }
})