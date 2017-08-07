import path from 'path'

const index = (req, res) => {
    res.render(path.join(__dirname,'..','views/admin/index.ejs'))
}

export default {
    index
}