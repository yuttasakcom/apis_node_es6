import express from 'express'
import router from './routes/router'

const app = express()
router(app)

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})