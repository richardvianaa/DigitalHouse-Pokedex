const indexController = {
     index: (req, res) => {
          return res.render('index')
     },
     login: (req, res) => {
          return res.render('login')
     }
}

module.exports = indexController;