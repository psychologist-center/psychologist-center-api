const SessionController = require('../modules/Session/SessionController');
const AuthService = require('../services/authService');
const express = require('express');
const router = express.Router();

router.post('/session/register', AuthService.checkProfessional, SessionController.registerSession);

router.get('/session/list', AuthService.checkProfessional, SessionController.ListSession);

router.put('/session/:id', AuthService.checkProfessional, SessionController.editSession);

module.exports = router;