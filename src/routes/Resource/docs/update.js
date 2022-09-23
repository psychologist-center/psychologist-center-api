module.exports =  {
    "/resource/{id}": {
        put: {
            summary: "Editar Recurso",
            description:
                "Essa rota é responsável por editar informações de um recurso",
            tags: ["Resource"],
            security: [
                {
                    bearerAuth: [],
                },
            ],
            parameters: [
                {
                    name: "id",
                    in: "path",
                    description: "ID do recurso",
                    required: true,
                },
            ],
            requestBody: {
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Resource",
                        },
                        examples: {
                            "Exemplo 1 - Campos permitidos para alteração": {
                                value: {
                                    title: "Any resource title",
                                    description: "Any resource description",
                                    category: "metáfora",
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
