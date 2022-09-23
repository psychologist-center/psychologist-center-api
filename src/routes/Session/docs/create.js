module.exports = {
    "/session/register": {
        post: {
            summary: "Cadastrar Sessão",
            description: "Essa rota é responsável por registrar uma sessão.",
            tags: ["Session"],
            security: [
                {
                    bearerAuth: [],
                },
            ],
            requestBody: {
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Session",
                        },
                        examples: {
                            "Exemplo 1": {
                                value: {
                                    patient_id: [
                                        "630c0dbab8aa97843febb9d9",
                                        "630c9aaf3c5c46e0547f6d4f",
                                    ],
                                    appointment_date: "10/10/2022",
                                    topic: "Ansiedade",
                                    duration: "60",
                                    session_type: 2,
                                },
                            },
                        },
                    },
                },
            },
            responses: {
                201: {
                    description: "Sessão cadastrada com sucesso",
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
                                            "Sessão cadastrado com sucesso",
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
                                                "O campo paciente não pode ser vazio",
                                        },
                                        {
                                            message: "Cpf Inválido",
                                        },
                                        {
                                            message:
                                                "O campo data de agendamento não pode ser vazio",
                                        },
                                        {
                                            message:
                                                "O campo tópico não pode ser vazio",
                                        },
                                        {
                                            message:
                                                "O campo duração não pode ser vazio",
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
