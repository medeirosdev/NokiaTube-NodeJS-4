const express = require('express');
const UserController = require('../controllers/UserController');

const router = express.Router();

router.get('/' , UserController.paginaInicial )
router.post('/enviar' , UserController.getLink)




module.exports = router;