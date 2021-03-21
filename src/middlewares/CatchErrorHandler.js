module.exports = (error, req, res, next) => {
    if(error) {
        return res.send(error);
    } else{
        next()
    }
}