import { Router } from "express"
import { createSkill, deleteSkill, getAllSkills, getSkillById, updateSkill } from "../controllers/skillControllers.js"

const router = Router()

router.get("/", getAllSkills)
router.get("/:id", getSkillById)

router.post("/", createSkill)
router.patch("/:id", updateSkill)
router.delete("/:id", deleteSkill)

export default router