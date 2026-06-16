import express from "express"

const app = express()
const PORT = process.env.PORT

// if something wrong with port
if (!PORT) {
  throw new Error("PORT is not defined in .env")
}

// our first route
app.get("/", (req, res) => {
  res.send("Hello from backend! XDD")
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
