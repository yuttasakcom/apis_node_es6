import client from './client'
import home from './home'
import admin from './admin'

export default (app) => {
    app.use('/client', client)

    app.use('/', home)
    app.use('/admin', admin)

    app.use('*', (req, res) => {
        res.status(400).send({msg: 'Api not support!'})
    })
}