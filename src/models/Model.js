import mongoose from 'mongoose'
import config from `${__dirname}/../../config/${process.env.NODE_ENV}/config`
mongoose.Promise = global.Promise
mongoose.connect(`mongodb://${config.mongo.host}:${config.mongo.port}/${config.mongo.db}`)
export default { mongoose }
