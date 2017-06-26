import mongoose from 'mongoose'
import { config } from '../config'

mongoose.Promise = global.Promise
mongoose.connect(`mongodb://${config.mongo.host}:${config.mongo.port}/${config.mongo.dbName}`)
export default { mongoose }
