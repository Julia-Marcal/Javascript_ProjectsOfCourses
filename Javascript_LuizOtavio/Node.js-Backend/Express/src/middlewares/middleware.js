exports.middlewareGlobal = (req, res, next) => {
    //é basicamente uma função que está antes de outra
    //para que a próxima se resolve é necessário chamar next
    //req.session = é pra pegar informações
    console.log('passei no middelaare')
    next()
}

exports.checkCsrfError = (err, req, res, next) => {
    if(er && err.code === 'EBADCSRFTOKEN'){
        return res.render('404')
    }
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken()
    next()
}