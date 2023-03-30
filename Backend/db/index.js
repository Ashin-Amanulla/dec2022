const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/productnew')
    .then(() => { console.log('DB is connected') })
    .catch((err) => { console.log('Not connected'+ err) })