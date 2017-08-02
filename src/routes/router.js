import client from './client'
import home from './home'

export default (app) => {
    app.use('/client', client)

    app.use('/', home)

    app.use('*', (req, res) => {
        res.status(400).send({msg: 'Api not support!'})
    })
}