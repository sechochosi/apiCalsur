const validate = function validate(userId, res) {
    return /^\d+$/.test(userId) ?rest.send("Si es un numero") : rest.send("no es numero")
}

export default validate;