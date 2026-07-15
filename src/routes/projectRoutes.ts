import { Router } from "express"
import { getAllProjects, getProjectById } from "../controllers/projectController.js"


const router = Router()

router.get("/", getAllProjects)
router.get("/:id", getProjectById)

router.post("/", ...)
router.patch("/:id", ...)
router.delete("/:id", ...)

export default router

