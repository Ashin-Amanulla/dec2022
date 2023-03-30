const router = require('express').Router()
const productDATA = require('../model/product')
const jwt = require('jsonwebtoken')
const { response } = require('express')


function verifyToken(req, res, next) {

    try {
        if (!req.headers.authorization) throw ('unauthorized JWT')
        let token = req.headers.authorization.split(' ')[1]
        if (!token) throw ('unauthorized JWT')

        let payload = jwt.verify(token, 'ilikeapples13')

        if (!payload) throw ('unauthorized JWT')

        // res.status(200).send(payload)
        next()

    } catch (error) {
        console.log(error)
        res.status(401).send(error)
    }




}

// to add data 
router.post('/',verifyToken, async (req, res) => {
    try {

        let item = req.body

        let token = req.headers
        console.log('token from front end', token)

        if (item == null) throw ('No data') //error if data is null

        const data = new productDATA(item)
        await data.save()

        res.json({ message: 'Data saved successfully' }).status(201)

    } catch (error) {
        console.log(error)
        res.json({ message: error }).status(400)
    }
})


// to read data 

router.get('/', async (req, res) => {

    try {

        let products = await productDATA.find()
        res.json({ data: products, message: "success" }).status(200)

    } catch (error) {
        console.log(error)
        res.json({ message: error }).status(400)
    }
})


//delete

router.delete('/:id', verifyToken, async (req, res) => {

    try {

        let token = req.headers.authorization
        console.log('token from front end', token)


        let id = req.params.id
        await productDATA.findByIdAndDelete({ _id: id })
        res.json({ message: 'Data deleted successfully' }).status(200)

    } catch (error) {
        console.log(error)
        res.json({ message: error }).status(400)
    }

})




module.exports = router