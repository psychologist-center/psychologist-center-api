module.exports = {
    "user/{id}": {
        put: {
            summary: "Editar dados",
            description:
                "Essa rota é responsável por editar informações de uma conta",
            tags: ["Account"],
            security: [
                {
                    bearerAuth: [],
                },
            ],
            parameters: [
                {
                    name: "email",
                    in: "path",
                    description: "Email do usuário",
                    required: true,
                },
            ],
            requestBody: {
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/User",
                        },
                        examples: {
                            "Exemplo 1 - Campos permitidos para alteração": {
                                value: {
                                    name: "David Augusto de Andrade Ribeiro",
                                    email: "david@gmail.com",
                                    address: "Av. Paulista, 1400",
                                    city: "São Paulo",
                                    state: "RJ",
                                },
                            },
                        },
                    },
                },
            },
            responses: {
                200: {
                    description: "Dados alterados com sucesso",
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
                                        message: "Dados alterados com sucesso",
                                    },
                                },
                            },
                        },
                    },
                },
                400: {
                    description: "Falha ao tentar editar informações.",
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
                                "Caso 1 - Usuário não encontrado": {
                                    value: {
                                        message: "Usuário não encontrado",
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
