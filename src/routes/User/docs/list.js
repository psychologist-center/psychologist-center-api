const listPatient = {
    "/user/list/patient": {
        get: {
            summary: "Listar Usuários Pacientes",
            description: "Essa rota é responsável por listar os pacientes",
            tags: ["Account"],
            security: [
                {
                    bearerAuth: [],
                },
            ],
            parameters: [
                {
                    name: "inputFilter",
                    in: "query",
                    description: "Filtrar usuários por texto.",
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
                    description: "Lista de pacientes",
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/User",
                            },
                            examples: {
                                "Lista de usuários": {
                                    value: {
                                        data: [
                                            {
                                                _id: "630c0cc07cf26e9b918eddcb",
                                                name: "David Augusto de Andrade Ribeiro",
                                                cpf: 27561887000,
                                                phone_number: null,
                                                email: "davidribeiro@gmail.com",
                                                genre: "NR",
                                                birth_date:
                                                    "2003-07-11T03:00:00.000Z",
                                                address: "Av. Paulista, 1400",
                                                city: "São Paulo",
                                                state: "RJ",
                                                user_type: "professional",
                                            },
                                            {
                                                _id: "630c0cc07cf26e9b918eddcb",
                                                name: "Vitor Mantovani",
                                                cpf: 27561887000,
                                                phone_number: null,
                                                email: "vitor@gmail.com",
                                                genre: "NR",
                                                birth_date:
                                                    "2003-07-11T03:00:00.000Z",
                                                address: "Av. Imigrantes, 1400",
                                                city: "São Paulo",
                                                state: "RJ",
                                                user_type: "professional",
                                            },
                                        ],
                                        total: "2",
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

const listProfessional = {
    "/user/list/professional": {
        get: {
            summary: "Listar Usuários Profissionais",
            description: "Essa rota é responsável por listar os profissionais",
            tags: ["Account"],
            security: [
                {
                    bearerAuth: [],
                },
            ],
            parameters: [
                {
                    name: "inputFilter",
                    in: "query",
                    description: "Filtrar usuários por texto.",
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
                    description: "Lista de usuários",
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/User",
                            },
                            examples: {
                                "Lista de usuários": {
                                    value: {
                                        data: [
                                            {
                                                _id: "630c0cc07cf26e9b918eddcb",
                                                name: "David Augusto de Andrade Ribeiro",
                                                crp: 232323,
                                                cpf: 27561887000,
                                                phone_number: null,
                                                email: "davidribeiro@gmail.com",
                                                genre: "NR",
                                                birth_date:
                                                    "2003-07-11T03:00:00.000Z",
                                                address: "Av. Paulista, 1400",
                                                city: "São Paulo",
                                                state: "RJ",
                                                user_type: "professional",
                                            },
                                            {
                                                _id: "630c0cc07cf26e9b918eddcb",
                                                name: "Vitor Mantovani",
                                                crp: 232323,
                                                cpf: 27561887000,
                                                phone_number: null,
                                                email: "vitor@gmail.com",
                                                genre: "NR",
                                                birth_date:
                                                    "2003-07-11T03:00:00.000Z",
                                                address: "Av. Imigrantes, 1400",
                                                city: "São Paulo",
                                                state: "RJ",
                                                user_type: "professional",
                                            },
                                        ],
                                        total: "2",
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

module.exports =  { ...listPatient, ...listProfessional };
