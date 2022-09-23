const UserController = require("../../modules/User/UserController");
const AuthService = require("../../services/authService");

module.exports = (router) => {
    router.post(
        "/user/professional/register",
        UserController.registerProfessional
    );
    router.post(
        "/user/patient/register",
        AuthService.checkProfessional,
        UserController.registerPatient
    );
    router.get(
        "/user/list/patient",
        AuthService.checkProfessional,
        UserController.ListPatient
    );
    router.get(
        "/user/list/professional",
        AuthService.checkProfessional,
        UserController.ListProfessional
    );
    router.put("/user/:id", AuthService.CheckOwn, UserController.editUser);
    router.delete(
        "/user/:id",
        AuthService.checkProfessional,
        UserController.deletePatient
    );
};
