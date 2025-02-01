import mongoose, {Schema, Document} from "mongoose"

export type UserType = Document & {
    user: string
    password: string
}

const userSchema : Schema = new Schema({
  user: {
    type: String,
    require: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    require: true,
    unique: true,
    trim: true
  }  
})


const User = mongoose.model<UserType>('User', userSchema)
export default User