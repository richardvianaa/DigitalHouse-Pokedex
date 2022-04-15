function isAuthenticated(request, response, next) {
     if (!request.headers.authorization) {


          return response.redirect('/login')
     }
     next();
}

module.exports = isAuthenticated;