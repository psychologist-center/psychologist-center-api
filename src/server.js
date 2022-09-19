const { mongoConnect } = require("./database/mongodb");

const swaggerUi = require("swagger-ui-express");
const swaggerDocs = require("./swagger.json");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { setupRoutes } = require("./helpers/setupRoutes");

dotenv.config();

mongoConnect();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Carregando rotas
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
setupRoutes(app);

app.listen(process.env.PORT);
console.log("Servidor rodando na porta " + process.env.PORT);
