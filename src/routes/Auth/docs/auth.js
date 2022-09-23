module.exports = {
    "/auth": {
        post: {
            summary: "Autenticar Usuário",
            description:
                "Essa rota é responsável por autenticar um usuário no sistema.",
            tags: ["Account"],
            requestBody: {
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/User",
                        },
                        examples: {
                            "Exemplo 1 - Patient": {
                                value: {
                                    email: "paciente@gmail.com",
                                    password: "02903902",
                                },
                            },
                            "Exemplo 2 - Professional": {
                                value: {
                                    email: "profissional@gmail.com",
                                    password: "293@das09",
                                },
                            },
                            "Exemplo 3 - Admin": {
                                value: {
                                    email: "suporte@mentesa.com.br",
                                    password: "admin12345",
                                },
                            },
                        },
                    },
                },
            },
            responses: {
                200: {
                    description: "Usuário autenticado",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    token: {
                                        type: "string",
                                    },
                                },
                            },
                            examples: {
                                "Exemplo 1 - Admin": {
                                    value: {
                                        token: "eyJhbGciOiJIUzI1NiI@Sdasd@kpXVCJ9.eyJpZCI6IjYyYmU2YmEwNjFlZjcwZjhiY2JkYzJkYyIsImVtYWlsIjoiZGF2aWRhdWd1c3RvQGdtYWlsLmNvbSIsIm5hbWUiOiJEYXZpZCBBdWd1c3RvIiwicm9sZXMiOlsiYWRtaW4iXSwiaWF0IjoxNjU2NjQ4OTY4LCJleHAiOjE2NTY3MzUzNjh9.klYfOO690cgu6w1GNheAaC8b4HHjXmKMqsJYQx7mAJU",
                                    },
                                },
                                "Exemplo 2 - Operator": {
                                    value: {
                                        token: "sdR5cCI6IkpXVCJ9.dsad2@jYyeyJhbGciOiJIUzI1NiIsYmU2YmEwNjFlZjcwZjhiY2JkYzJkYyIsImVtYWlsIjoiZGF2aWRhdWd1c3RvQGdtYWlsLmNvbSIsIm5hbWUiOiJEYXZpZCBBdWd1c3RvIiwicm9sZXMiOlsiYWRtaW4iXSwiaWF0IjoxNjU2NjQ4OTY4LCJleHAiOjE2NTY3MzUzNjh9.klYfOO690cgu6w1GNheAaC8b4HHjXmKMqsJYQx7mAJU",
                                    },
                                },
                                "Exemplo 3 - Cliente": {
                                    value: {
                                        token: "InR5cCI6IkpXVCJ9.eyJp@wsddsadwyJhbGciOiJIUzI1NiIsYmU2YmEwNjFlZjcwZjhiY2JkYzJkYyIsImVtYWlsIjoiZGF2aWRhdWd1c3RvQGdtYWlsLmNvbSIsIm5hbWUiOiJEYXZpZCBBdWd1c3RvIiwicm9sZXMiOlsiYWRtaW4iXSwiaWF0IjoxNjU2NjQ4OTY4LCJleHAiOjE2NTY3MzUzNjh9.klYfOO690cgu6w1GNheAaC8b4HHjXmKMqsJYQx7mAJU",
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
                                                "O campo e-mail não pode ser vazio",
                                        },
                                        {
                                            message:
                                                "O campo senha não pode ser vazio",
                                        },
                                    ],
                                },
                                "Caso 2 - Usuário não encontrado": {
                                    value: {
                                        message: "Usuário não encontrado",
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
