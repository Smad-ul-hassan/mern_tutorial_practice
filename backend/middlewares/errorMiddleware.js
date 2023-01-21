const errorHandler = (err, req, res, next) => {
    const Statuscode = res.statuscode ? res.statuscode : 500;
    res.statuscode = Statuscode;
    res.json({
        message: res.statuscode,
        stack: process.env.NODE_ENV == "production" ? null : err.stack
    })
}
module.exports = { errorHandler }