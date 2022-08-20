const express = require('express');
const multer = require('multer');
const path = require('path')

const app = express();
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
  var upload = multer({ storage: storage })



app.get('/',(req,res) => {
   res.sendFile(path.join(__dirname,'/index.html'))
})

app.post('/profile', upload.single('avatar'), function (req, res, next) {
    res.send(`<h1 style="text-align: center;">File Uploaded</h1>`)
});
app.listen(8080, () => {
    console.log('server started')
})