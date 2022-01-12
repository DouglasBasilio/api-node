const { response } = require('express')
const ProductsModel = require('../models/products')

async function get(req, res) {
    const { id } = req.params

    const obj = id ? { _id: id } : null

    const products = await ProductsModel.find(obj)

    res.send(products)
}

async function post(req, res){
    const {
        name,
        brand,
        price,
    } = req.body

    //console.log(req.body)

    const product = new ProductsModel({
        name,
        brand,
        price
    })

    product.save()

    res.send({
        message: 'success'
    })
}

async function put(req, res){
    const { id } = req.params

    // procurar o produto
    const product = await ProductsModel.findOneAndUpdate({ _id: id }, req.body, { new: true })

    res.send({
        message: 'success',
        product,
    })

    /*
    // procurar o produto
    const product = await ProductsModel.findOne({ _id: id })

    // alterar dados, req.body atualiza tudo
    await product.updateOne(req.body)

    // resposta, devolvo a mensageme o item atualizado para ser utilizado no front end
    res.send({
        message: 'success',
        product,
    })
    */


}

async function remove(req, res){
    // pegar o id
    const { id } = req.params

    const remove = await ProductsModel.deleteMany({ _id: id })

    const message  = remove.ok ? 'success' : 'error'
    
    /*
    let message = 'success'

    if (!remove.ok) {
        message = 'error'
    }
    */
   
    console.log(message)

    res.send({
        message,
    })
}

module.exports = {
    get,
    post,
    put,
    remove,
}