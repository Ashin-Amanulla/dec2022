const express = require('express')
const app = express()
const PORT = 3256 || process.env.PORT

require('./db') //initialize DB when server starts

const cors = require('cors')
const morgan = require('morgan')

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


const productAPI = require('./routes/product')
app.use('/product', productAPI)


//authentication routes
const jwt = require('jsonwebtoken');
app.post('/auth', async (req, res) => {

    try {

        let { email, password } = req.body
        console.log(req.body)
        console.log(email, password)
        if (email == 'ashin' && password == 'ashin123') {

            let payload = { email: email, password: password }
            let token = jwt.sign(payload,'ilikeapples13')
            

            res.status(200).json({ message: 'Success!', status: 200 ,token:token})
        }
        else {
            throw ('unauthorized')
        }
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: error })
    }
})


// Server Initialization 
app.listen(PORT, () => {
    console.log(`My server is running at ${PORT} !!!`)
})