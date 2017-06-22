import client from './client'

export default (app) => {
    app.use('/client', client)

    app.use('*', (req, res) => {
        res.status(400).send({msg: 'Api not support!'})
    })
}