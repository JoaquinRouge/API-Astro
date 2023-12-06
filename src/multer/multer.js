const multer = require('multer')

const storage = multer.diskStorage({
    destination:(req,file,callback)=>{
        const pathStorage = `./src/images`
        callback(null,pathStorage)
    },
    filename: (req, file, callback) => {
        const ext = file.originalname.split('.').pop()
        const FileName = `img-${Date.now()}.${ext}`
        callback(null,FileName)
    }
})

const upload = multer({ storage })

module.exports = upload