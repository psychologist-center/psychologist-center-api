module.exports = {
    "/resource/list": {
        get: {
            summary: "Listar Recursos",
            description:
                "Essa rota é responsável por listar os recursos do profissional",
            tags: ["Resource"],
            security: [
                {
                    bearerAuth: [],
                },
            ],
            parameters: [
                {
                    name: "inputFilter",
                    in: "query",
                    description: "Filtrar recursos por título.",
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
                    description: "Lista de Recursos",
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Resource",
                            },
                            examples: {
                                "Lista de recursos": {
                                    value: {
                                        data: [
                                            {
                                                _id: "632219af02be6548436da5c3",
                                                title: "Some resource title",
                                                description:
                                                    "Some resource description",
                                                category: "metáfora",
                                                user_id:
                                                    "6322191402be6548436da5bb",
                                                create_date:
                                                    "2022-09-14T18:13:03.163Z",
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
