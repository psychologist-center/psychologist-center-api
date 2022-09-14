const ValidationContract = require("../../services/validatorService");
const ResourceRepository = require("./ResourceRepository");

exports.registerResource = async (req, res) => {
    let { title, description, category, current_user } = req.body;

    let contract = new ValidationContract();
    contract.isRequired(title, "O campo título não pode ser vazio");
    contract.isRequired(category, "O campo categoria não pode ser vazio");
    contract.isValidCategory(
        category,
        "O campo categoria deve possuir um dos seguintes valores: metáfora, transe ou ferramenta"
    );

    if (!contract.isValid()) {
        res.status(400).send(contract.errors()).end();
        return;
    }

    try {
        await ResourceRepository.create({
            title,
            description,
            category,
            user_id: current_user,
        });

        res.status(201).json({
            message: "Recurso cadastrado com sucesso",
        });

        patient = [];
    } catch (e) {
        res.status(400).json({
            message: e.message,
        });
    }
};
