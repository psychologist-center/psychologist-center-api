const SessionController = require("../modules/Session/SessionController");
const AuthService = require("../services/authService");

module.exports = (router) => {
    router.post(
        "/session/register",
        AuthService.checkProfessional,
        SessionController.registerSession
    );

    router.get(
        "/session/list",
        AuthService.checkProfessional,
        SessionController.ListSession
    );

    router.get(
        "/dashboard",
        AuthService.checkProfessional,
        SessionController.dashboard
    );

    router.put(
        "/session/:id",
        AuthService.checkProfessional,
        SessionController.editSession
    );

    router.delete(
        "/session/:id",
        AuthService.checkProfessional,
        SessionController.deleteSession
    );
};
