const ResourceController = require('../modules/Resource/ResourceController');
const AuthService = require('../services/authService');
const express = require('express');
const router = express.Router();

router.post('/resource/register', AuthService.checkProfessional, ResourceController.registerResource);

router.get('/resource/list', AuthService.checkProfessional, ResourceController.listResources);

module.exports = router;
