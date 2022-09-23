module.exports = {
    "/session/{id}": {
        delete: {
            summary: "Remover sessão",
            description: "Essa rota é responsável por remover uma sessão",
            tags: ["Session"],
            security: [
                {
                    bearerAuth: [],
                },
            ],
            parameters: [
                {
                    name: "id",
                    in: "path",
                    description: "ID da Sessão",
                    required: true,
                },
            ],
            responses: {
                200: {
                    description: "Sessão deletada",
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
                                        message: "Sessão deletada com sucesso",
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
