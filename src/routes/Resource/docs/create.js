module.exports = {
    "/resource/register": {
        post: {
            summary: "Cadastrar Recurso",
            description: "Essa rota é responsável por registrar um recurso.",
            tags: ["Resource"],
            security: [
                {
                    bearerAuth: [],
                },
            ],
            requestBody: {
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Resource",
                        },
                        examples: {
                            "Exemplo 1": {
                                value: {
                                    title: "Some resource title",
                                    description: "Some resource description",
                                    category: "metáfora",
                                },
                            },
                        },
                    },
                },
            },
            responses: {
                201: {
                    description: "Recurso cadastrado com sucesso",
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
                                "Cadastro com sucesso": {
                                    value: {
                                        message:
                                            "Recurso cadastrado com sucesso",
                                    },
                                },
                            },
                        },
                    },
                },
                400: {
                    description: "Falha ao autenticar usuário",
                    content: {
                        "application/json": {
                            schema: {
                                type: "array",
                                items: {
                                    type: "object",
                                    properties: {
                                        message: {
                                            type: "string",
                                        },
                                    },
                                },
                            },
                            examples: {
                                "Caso 1 - Campos não preenchidos": {
                                    value: [
                                        {
                                            message:
                                                "O campo título não pode ser vazio",
                                        },
                                    ],
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
