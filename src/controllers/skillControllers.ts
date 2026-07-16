import { Request, Response } from "express";
import { Skill } from "../models/Skill.js";

export const getAllSkills = async (req: Request, res: Response) => {
  try {
    const skill = await Skill.find()

    res.json(skill)
  } catch (error) {
    res.status(500).json({ message: "Server error" })
  }
}

export const getSkillById = async (req: Request, res: Response) => {
  try {
    const skill = await Skill.findById(req.params.id)

    if (!skill) {
      return res.status(404).json({ message: "Skill not found" })
    }
    res.json(skill)
  } catch (error) {
    res.status(500).json({ message: "Server error" })
  }
}

export const createSkill = async (req: Request, res: Response) => {
  try {
    const skill = await Skill.create(req.body)


    res.status(201).json(skill)
  } catch (error) {
    res.status(500).json({ message: "Server error" })
  }
}

export const updateSkill = async (req: Request, res: Response) => {
  try {
    const skill = await Skill.findByIdAndUpdate(req.params.id, req.body, { new: true })

    if (!skill) {
      return res.status(404).json({ message: "Skill not found" })
    }

    res.status(200).json(skill)
  } catch (error) {
    res.status(500).json({ message: "Server error" })
  }
}

export const deleteSkill = async (req: Request, res: Response) => {
  try {
    const skill = await Skill.findByIdAndDelete(req.params.id)

    if (!skill) {
      return res.status(404).json({ message: "Skill not found" })
    }

    res.status(200).json({ message: "Skill deleted" })
  } catch (error) {
    res.status(500).json({ message: "Server error" })
  }
}
