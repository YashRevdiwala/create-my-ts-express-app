import { Router } from "express"

const router = Router()

router.get("/", (_req, res) => {
  res.send("Hello world from route!")
})

export default router
