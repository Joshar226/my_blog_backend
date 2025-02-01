import mongoose, {Schema, Document} from "mongoose"


export type ContactType = Document & {
    name: string
    email: string
    phone: number
    message: string
    contacted: boolean
}


const ContactSchema : Schema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true
    },
    phone: {
        type: Number,
        require: true,
        trim: true
    },
    message: {
        type: String,
        require: true,
        trim: true
    },
    contacted: {
        type: Boolean,
        default: false
    }
}) 


const Contact = mongoose.model<ContactType>('Contact', ContactSchema)
export default Contact