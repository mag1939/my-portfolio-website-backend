import { Request, Response } from "express"
import { Project } from "../models/Projects.js"

export const getAllProjects = async (req: Request, res: Response) => {
  try {
    const projects = await Project.find()

    res.json(projects)
  } catch (error) {
    res.status(500).json({ message: "Server error" })
  }
}

export const getProjectById = async (req: Request, res: Response) => {
  try {
    const project = await Project.findById(req.params.id)

    if (!project) {
      return res.status(404).json({ message: "Project not found" })
    }
    res.json(project)
  } catch (error) {
    res.status(500).json({ message: "Server error" })
  }
}

export const createProject = async (req: Request, res: Response) => {
  try {
    const project = await Project.create(req.body)


    res.status(201).json(project)
  } catch (error) {
    res.status(500).json({ message: "Server error" })
  }
}

export const updateProject = async (req: Request, res: Response) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true })

    if (!project) {
      return res.status(404).json({ message: "Project not found" })
    }

    res.status(200).json(project)
  } catch (error) {
    res.status(500).json({ message: "Server error" })
  }
}

export const deleteProject = async (req: Request, res: Response) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id)

    if (!project) {
      return res.status(404).json({ message: "Project not found" })
    }

    res.status(200).json({ message: "Project deleted" })
  } catch (error) {
    res.status(500).json({ message: "Server error" })
  }
}

