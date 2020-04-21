import {Router} from 'express';
import mongoose from 'mongoose'

const router = Router()
mongoose.connect('mongodb://localhost:27017/shopapi')

const Products = mongoose.model('Product', {
    name: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: String
    }
})


router.get('/', (req, res) => {
    Products.find().then(data => {
        res.json(data)
    })
})

router.post('/cart', (req, res) => {
    Products.create({name: req.body.name, description: req.body.description, price: req.body.price})
    .then(() => res.json({created: true}))
    .catch(() => res.json({created: false}))
}
)

export default router