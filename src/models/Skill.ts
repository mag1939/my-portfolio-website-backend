import { Types, model, Schema } from "mongoose"

type Skill = {
  _id: Types.ObjectId
  category: string
  skills: { name: string, logo: string}[]
}

const SkillSchema = new Schema({
  category: { type: String, required: true},
  skills: [{ name: { type: String, required: true }, logo: { type: String, required: true }}]
})

export const Skill = model("Skill", SkillSchema)