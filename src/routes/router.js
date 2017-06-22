export default function(app) {
    app.use('/', (req, res) => {
        res.send('Welcome to node api with JavaScript2015')
    })
}