const express = require("express");
const router = express.Router();
const upload = require ("../middlewares/multer");
const authMiddleware = require("../middlewares/authMiddleware")

//Sequelize
// const db = require ('../db/models');

// const ModeloProduct = db.Product;

// router.get('/', async (req, res, next) => {
//    const producto = await ModeloProduct.findAll();
//    return res.send(producto);
// })


//CONTROLADOR//
const productsController = require('../controllers/productControllers');

//TODOS LOS PRODUCOTS//
router.get('/', productsController.index);

//CREATE//
router.get('/create', authMiddleware, productsController.create);
router.post('/', upload.single('image'), productsController.store);

//GET// 
router.get('/:id/', productsController.detail);

//EDIT//
router.get('/:id/edit', productsController.edit);
router.put('/:id', upload.single('image'), productsController.update);

//DELETE//
router.post('/:id/delete', productsController.destroy);


module.exports = router;
