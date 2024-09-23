function isValidatorUser (req, res, next){
    try {
        let { email, password } = req.body;
        if (!email || !password ){
            const error = new Error("The product must contain all its values");
            error.statusCode = 404;
            throw error;
        }
        next(error)
    } catch (error) {
        return next(error)
    }
}

export default isValidatorUser
