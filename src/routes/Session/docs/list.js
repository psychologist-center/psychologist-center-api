module.exports = {
    "/session/list": {
        get: {
            summary: "Listar Sessões",
            description:
                "Essa rota é responsável por listar as sessões do profissional",
            tags: ["Session"],
            security: [
                {
                    bearerAuth: [],
                },
            ],
            parameters: [
                {
                    name: "inputFilter",
                    in: "query",
                    description: "Filtrar sessões por texto.",
                },
                {
                    name: "page",
                    in: "query",
                    description: "Número da página",
                },
                {
                    name: "pageSize",
                    in: "query",
                    description: "Limitar a quantidade de exibições por página",
                },
            ],
            responses: {
                200: {
                    description: "Lista de Sessões",
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Session",
                            },
                            examples: {
                                "Lista de usuários": {
                                    value: {
                                        data: [
                                            {
                                                professional: {
                                                    _id: "630c0cc07cf26e9b918eddcb",
                                                    name: "David Augusto de Andrade Ribeiro",
                                                    email: "davidribeiro@gmail.com",
                                                },
                                                _id: "630d31cbe715d1c80030adfd",
                                                patient: [
                                                    {
                                                        _id: "630c0dbab8aa97843febb9d9",
                                                        name: "Alexandre Jorge Ribeiro",
                                                        email: "lucasamadeu1234@gmail.com",
                                                    },
                                                    {
                                                        _id: "630c9aaf3c5c46e0547f6d4f",
                                                        name: "Lucas Amadeu Soares",
                                                        email: "luqitas@gmail.com",
                                                    },
                                                ],
                                                appointment_date:
                                                    "2022-10-02T03:00:00.000Z",
                                                status: 3,
                                                topic: "Depressão",
                                                duration: 60,
                                                session_type: 0,
                                                __v: 0,
                                                observation:
                                                    "Paciente não compareceu",
                                            },
                                        ],
                                        total: "1",
                                    },
                                },
                            },
                        },
                    },
                },
                401: {
                    description: "Token inválido",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    message: {
                                        type: "string",
                                    },
                                },
                            },
                            examples: {
                                "Exemplo 1": {
                                    value: {
                                        message: "Token inválido",
                                    },
                                },
                            },
                        },
                    },
                },
                403: {
                    description: "Acesso restrito",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    message: {
                                        type: "string",
                                    },
                                },
                            },
                            examples: {
                                "Exemplo 1": {
                                    value: {
                                        message: "Acesso restrito",
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
    },
};
