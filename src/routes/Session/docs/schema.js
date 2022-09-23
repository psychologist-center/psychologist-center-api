module.exports = {
    Session: {
        type: "object",
        properties: {
            patient_id: {
                type: "Array",
                items: {
                    type: "String",
                },
            },
            appointment_date: {
                type: "Date",
                required: true,
            },
            status: {
                type: "Number",
                enum: [0, 1, 2],
                default: 0,
            },
            topic: {
                type: "String",
                required: true,
            },
            duration: {
                type: "Number",
                required: true,
            },
            session_type: {
                type: "Number",
                enum: [0, 1, 2],
                required: true,
            },
            observation: {
                type: "String",
            },
        },
    },
};
