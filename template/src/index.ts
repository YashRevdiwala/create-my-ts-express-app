import express from "express"

import helloRoute from "@/routes/hello"

const app = express()
const PORT = 3000

app.use(helloRoute)

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
