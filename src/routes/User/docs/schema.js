module.exports = {
    User: {
        type: "object",
        properties: {
            name: {
                type: "String",
                required: true,
            },
            password: {
                type: "String",
                required: true,
            },
            crp: {
                type: "Number",
            },
            cpf: {
                type: "Number",
                required: true,
                unique: true,
            },
            phone_number: {
                type: "Number",
            },
            email: {
                type: "String",
                required: true,
                unique: true,
            },
            genre: {
                type: "String",
                enum: ["HM", "M", "NB", "NR"],
            },
            birth_date: {
                type: "Date",
                required: true,
            },
            address: {
                type: "String",
                required: true,
            },
            city: {
                type: "String",
                required: true,
            },
            state: {
                type: "String",
                required: true,
                enum: [
                    "AC",
                    "AL",
                    "AP",
                    "AM",
                    "BA",
                    "CE",
                    "DF",
                    "ES",
                    "GO",
                    "MA",
                    "MT",
                    "MS",
                    "MG",
                    "PA",
                    "PB",
                    "PR",
                    "PE",
                    "PI",
                    "RJ",
                    "RN",
                    "RS",
                    "RO",
                    "RR",
                    "SC",
                    "SP",
                    "SE",
                    "TO",
                ],
            },
            user_typ: {
                type: "String",
                require: true,
                enum: ["patient", "professional", "admin"],
            },
        },
    },
};
