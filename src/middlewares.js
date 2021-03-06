const log = (req, res, next) => {
    console.log(req.url);
    next();
}

const checkSize = (req, res, next) => {
    if(req.params.param.length > 6){
    res.status(403).send('Parameter has more than 6 charachters')
    }
next();
}

export { log, checkSize }