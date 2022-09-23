module.exports = {
    Resource: {
        type: "object",
        properties: {
            title: {
                type: "String",
                required: true,
            },
            description: {
                type: "String",
            },
            category: {
                type: "String",
                enum: ["metáfora", "transe", "ferramenta"],
                required: true,
            },
        },
    },
};
