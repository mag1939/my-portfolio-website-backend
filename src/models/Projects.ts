import { model, Schema, Types } from "mongoose"

type Project = {
  _id: Types.ObjectId
  name: string
  description: string
  githubLink: string
  imageLink: string
  skills: { name: string}[]
  demoLink?: string
}

const ProjectSchema = new Schema({
  name: { type: String, required: true},
  description: { type: String, required: true},
  githubLink: { type: String, required: true},
  imageLink: { type: String, required: true},
  skills: [{ name: { type: String, required: true}}],
  demoLink: { type: String },
})

export const Project = model("Project", ProjectSchema)