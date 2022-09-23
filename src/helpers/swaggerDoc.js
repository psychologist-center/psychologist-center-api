const auth = require("../routes/Auth/docs");
const user = require("../routes/User/docs");
const session = require("../routes/Session/docs");
const resource = require("../routes/Resource/docs");
const userSchema = require("../routes/User/docs/schema");
const sessionSchema = require("../routes/Session/docs/schema");
const resourceSchema = require("../routes/Resource/docs/schema");

module.exports = {
    openapi: "3.0.0",
    info: {
        title: "Mente Sã - API",
        description: "API referente ao projeto Mente Sã",
        version: "1.0.0",
    },
    servers: [
        {
            url: "http://localhost:3000/api",
            description: "Servidor Local",
        },
        {
            url: "https://psychologist-center.herokuapp.com/api",
            description: "Servidor Hospedado",
        },
    ],
    paths: {
        ...auth,
        ...user,
        ...session,
        ...resource,
    },
    components: {
        schemas: {
            ...userSchema,
            ...sessionSchema,
            ...resourceSchema,
        },
        securitySchemes: {
            bearerAuth: {
                type: "http",
                scheme: "bearer",
                bearerFormat: "JWT",
            },
        },
    },
};
