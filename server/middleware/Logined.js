module.exports = (req, res, next) => {
  if (req.user) {
    res.status(200).redirect('/api/current_user')
    return
  }
  next()
}