const UserController = require('../modules/User/UserController');
const AuthService = require('../services/authService');
const express = require('express');
const router = express.Router();

router.post('/auth', UserController.authenticateUser);
router.post('/user/professional/register', UserController.registerProfessional);
router.post('/user/patient/register', AuthService.checkProfessional, UserController.registerPatient);

router.get('/user/list/patient', AuthService.checkProfessional, UserController.ListPatient);
router.get('/user/list/professional', AuthService.checkProfessional, UserController.ListProfessional);

router.put('/user/:id', AuthService.CheckOwn, UserController.editUser);

router.delete('/user/:id', AuthService.checkProfessional, UserController.deletePatient);

module.exports = router;