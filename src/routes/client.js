import express from 'express'
const router = express.Router()

router.post('/create', (req, res) => {
    res.json({msg: 'OK'})
})

export default router