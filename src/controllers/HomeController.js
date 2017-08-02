import path from 'path'

const home = (req, res) => {
    res.render(path.join(__dirname,'..','views/home.ejs'))
}

export default {
    home
}