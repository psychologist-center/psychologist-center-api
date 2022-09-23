const ResourceController = require("../../modules/Resource/ResourceController");
const AuthService = require("../../services/authService");

module.exports = (router) => {
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
};
