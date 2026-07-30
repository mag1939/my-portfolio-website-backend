import express from "express"
import mongoose from "mongoose"
import projectRoutes from "./routes/projectRoutes.js"
import experienceRoutes from "./routes/experienceRoutes.js"
import skillRoutes from "./routes/skillRoutes.js"
import cors from "cors"

const app = express()
const PORT = process.env.PORT
const MONGODB_URL = process.env.MONGODB_URL

if (!MONGODB_URL) throw new Error("MONGODB_URL is not defined in .env")
if (!PORT) throw new Error("PORT is not defined in .env")

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://mag1939.vercel.app"
  ]
}))
app.use(express.json())

app.use("/projects", projectRoutes)
app.use("/experiences", experienceRoutes)
app.use("/skills", skillRoutes)

// our first route
app.get("/", (req, res) => {
  res.send("Hello from backend! XDD")
})

try {
  // mongoDB connection
  await mongoose.connect(MONGODB_URL)
  console.log("Connected to MongoDB")

  // app.listen will running only if MongoDB connection is available
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
  })
} catch (error) {
  console.error("Failed to connect to MongoDB", error)
}
