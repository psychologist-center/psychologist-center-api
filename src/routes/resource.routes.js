const ResourceController = require('../modules/Resource/ResourceController');
const AuthService = require('../services/authService');
const express = require('express');
const router = express.Router();

router.post('/resource/register', AuthService.checkProfessional, ResourceController.registerResource);

module.exports = router;
