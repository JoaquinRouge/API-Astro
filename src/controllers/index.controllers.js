const controller = {}

controller.index = (req,res) => {
    res.send('controller index')
}

controller.prueba = (req,res) => {
    res.send('prueba')
}

module.exports = controller
