const {Router} = require('express');
const userController = require('../controllers/users.controller')


const router = Router();


router.get('/', userController.usuariosGet);


router.post('/', userController.usuariosPost);
router.put('/:id', userController.usuariosPut);


module.exports = router;