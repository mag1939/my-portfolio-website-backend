import { Types, model, Schema } from "mongoose"

type Experience = {
  _id: Types.ObjectId
  role: string
  company: string
  description: string[]
  startDate: Date
  endDate?: Date
}

const ExperienceSchema = new Schema({
  role: { type: String, required: true},
  company: { type: String, required: true},
  description: [{ type: String, required: true}],
  startDate: { type: Date, required: true},
  endDate: { type: Date}
})

export const Experience = model("Experience", ExperienceSchema)