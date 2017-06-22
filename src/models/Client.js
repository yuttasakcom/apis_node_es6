import { mongoose } from './Model'

const ClientSchema = new mongoose.Schema({
    name: { type: String, unique: true, required: true },
    userId: { type: String, required: true },
    secret: { type: String, required: true },
    created: {type: Date, default: Date.now()},
    updated: {type: Date, default: Date.now()},
})

export default mongoose.model('Client', ClientSchema)