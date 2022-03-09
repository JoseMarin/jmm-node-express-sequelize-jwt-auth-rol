const express = require('express');
const router = express.Router();

//Importo modelo de datos
const CategoryController = require('../controllers/CategoryController');

// Middlewares
const auth = require('../middlewares/auth');

// Policies
const CategoryPolicy = require('../policies/CategoryPolicy');

// End-points CRUD movies
router.get('/',CategoryPolicy.getAll, CategoryController.getAll );
router.get('/:id', CategoryController.getById);
router.get('/type/:type',CategoryController.getByType);
router.post('/', CategoryPolicy.create, CategoryController.create);
router.put('/:id',CategoryPolicy.update, CategoryController.update);
router.delete('/', CategoryPolicy.deleteAll, CategoryController.deleteAll);
router.delete('/:id', CategoryPolicy.delete, CategoryController.delete);

module.exports = router;