import { Schema, model } from 'mongoose'
const userSchema = new Schema(
  {
    SelectTime: {
      type: String
    },
    RemainSeet: {
      type: Number
    },
    userId: {
      type: String
    }
  },
  {
    timestamps: true
  }
)

const User = new model('User', userSchema)
export default User
