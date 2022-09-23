const createPatient = {
    "/user/patient/register": {
        post: {
            summary: "Cadastrar Usuário Paciente",
            description:
                "Essa rota é responsável por cadastrar um cliente na plataforma.",
            tags: ["Account"],
            security: [
                {
                    bearerAuth: [],
                },
            ],
            requestBody: {
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/User",
                        },
                        examples: {
                            "Exemplo 1 - Paciente": {
                                value: {
                                    name: "Lucas Amadeu Soares",
                                    cpf: "26791868007",
                                    email: "luqitas@gmail.com",
                                    genre: "HM",
                                    birth_date: "04/04/2003",
                                    address: "Av. Rodrigo Vieira, 1400",
                                    city: "São Paulo",
                                    state: "SP",
                                },
                            },
                        },
                    },
                },
            },
            responses: {
                201: {
                    description: "Usuário cadastrado com sucesso",
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
                                            "Usuário cadastrado com sucesso",
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
                                                "O campo nome não pode ser vazio",
                                        },
                                        {
                                            message: "Cpf Inválido",
                                        },
                                        {
                                            message: "E-mail Inválido",
                                        },
                                        {
                                            message: "Gênero Inválido",
                                        },
                                        {
                                            message:
                                                "O campo data de nascimento não pode ser vazio",
                                        },
                                        {
                                            message:
                                                "O campo endereço não pode ser vazio",
                                        },
                                        {
                                            message:
                                                "O campo cidade não pode ser vazio",
                                        },
                                        {
                                            message: "Estado Inválido",
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

const createProfessional = {
    "/user/professional/register": {
        post: {
            summary: "Cadastrar Usuário Profissional",
            description:
                "Essa rota é responsável por cadastrar um profissional na plataforma.",
            tags: ["Account"],
            requestBody: {
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/User",
                        },
                        examples: {
                            "Exemplo 1 - Profissional": {
                                value: {
                                    name: "David Augusto",
                                    cpf: "35794863002",
                                    crp: "23232323",
                                    email: "david@gmail.com",
                                    genre: "HM",
                                    birth_date: "04/04/2003",
                                    address: "Av. Lins de Vasconcelos, 1320",
                                    city: "São Paulo",
                                    state: "SP",
                                },
                            },
                        },
                    },
                },
            },
            responses: {
                201: {
                    description: "Usuário cadastrado com sucesso",
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
                                            "Usuário cadastrado com sucesso",
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
                                                "O campo nome não pode ser vazio",
                                        },
                                        {
                                            message: "Cpf Inválido",
                                        },
                                        {
                                            message:
                                                "O campo crp não pode ser vazio",
                                        },
                                        {
                                            message: "E-mail Inválido",
                                        },
                                        {
                                            message: "Gênero Inválido",
                                        },
                                        {
                                            message:
                                                "O campo data de nascimento não pode ser vazio",
                                        },
                                        {
                                            message:
                                                "O campo endereço não pode ser vazio",
                                        },
                                        {
                                            message:
                                                "O campo cidade não pode ser vazio",
                                        },
                                        {
                                            message: "Estado Inválido",
                                        },
                                        {
                                            message:
                                                "O campo senha não pode ser vazio",
                                        },
                                    ],
                                },
                            },
                        },
                    },
                },
            },
        },
    },
};

module.exports = { ...createPatient, ...createProfessional };
