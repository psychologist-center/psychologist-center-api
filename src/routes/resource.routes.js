const ResourceController = require("../modules/Resource/ResourceController");
const AuthService = require("../services/authService");
const express = require("express");
const router = express.Router();

router.post(
    "/resource/register",
    AuthService.checkProfessional,
    ResourceController.registerResource
);

router.get(
    "/resource/list",
    AuthService.checkProfessional,
    ResourceController.listResources
);

router.put(
    "/resource/:id",
    AuthService.checkProfessional,
    ResourceController.editResource
);

router.delete(
    "/resource/:id",
    AuthService.checkProfessional,
    ResourceController.deleteResource
);

module.exports = router;
