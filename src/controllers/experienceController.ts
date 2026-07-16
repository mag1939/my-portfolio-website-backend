import { Request, Response } from "express";
import { Experience } from "../models/Experience.js";

export const getAllExperiences = async (req: Request, res: Response) => {
  try {
    const experience = await Experience.find()

    res.json(experience)
  } catch (error) {
    res.status(500).json({ message: "Server error" })
  }
}

export const getExperienceById = async (req: Request, res: Response) => {
  try {
    const experience = await Experience.findById(req.params.id)

    if (!experience) {
      return res.status(404).json({ message: "Experience not found" })
    }
    res.json(experience)
  } catch (error) {
    res.status(500).json({ message: "Server error" })
  }
}

export const createExperience = async (req: Request, res: Response) => {
  try {
    const experience = await Experience.create(req.body)


    res.status(201).json(experience)
  } catch (error) {
    res.status(500).json({ message: "Server error" })
  }
}

export const updateExperience = async (req: Request, res: Response) => {
  try {
    const experience = await Experience.findByIdAndUpdate(req.params.id, req.body, { new: true })

    if (!experience) {
      return res.status(404).json({ message: "Experience not found" })
    }

    res.status(200).json(experience)
  } catch (error) {
    res.status(500).json({ message: "Server error" })
  }
}

export const deleteExperience = async (req: Request, res: Response) => {
  try {
    const experience = await Experience.findByIdAndDelete(req.params.id)

    if (!experience) {
      return res.status(404).json({ message: "Experience not found" })
    }

    res.status(200).json({ message: "Experience deleted" })
  } catch (error) {
    res.status(500).json({ message: "Server error" })
  }
}
