import { Types, model, Schema } from "mongoose"

type Experience = {
  _id: Types.ObjectId
  period: string
  role: string
  company: string
  description: string
}

const ExperienceSchema = new Schema({
  period: { type: String, required: true},
  role: { type: String, required: true},
  company: { type: String, required: true},
  description: { type: String, required: true},
})

export const Experience = model("Experience", ExperienceSchema)