const UserController = require("../../modules/User/UserController");
const AuthService = require("../../services/authService");

module.exports = (router) => {
    router.post("/auth", UserController.authenticateUser);
    router.get(
        "/checktoken",
        AuthService.checkToken,
        UserController.checkToken
    );
};
