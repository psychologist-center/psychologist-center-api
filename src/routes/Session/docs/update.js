module.exports = {
    "/session/{id}": {
        put: {
            summary: "Editar dados",
            description:
                "Essa rota é responsável por editar informações de uma sessão",
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
                    description: "ID da sessão",
                    required: true,
                },
            ],
            requestBody: {
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Session",
                        },
                        examples: {
                            "Exemplo 1 - Campos permitidos para alteração": {
                                value: {
                                    patient_id: ["3243943434"],
                                    topic: "Ansiedade",
                                    duration: 40,
                                    status: 3,
                                    session_type: 0,
                                    observation: "Paciente não compareceu",
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
