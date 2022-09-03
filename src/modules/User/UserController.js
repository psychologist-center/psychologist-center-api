const ValidationContract = require('../../services/validatorService');
const AuthService = require('../../services/authService');
const UserRepository = require('./UserRepository');
const UserService = require('./UserService');
const mailService = require('../../services/mailService');
const crypto = require('crypto');
const md5 = require('md5');

exports.authenticateUser = async (req, res) => {
    let { email, password } = req.body;

    let contract = new ValidationContract();
    contract.isRequired(email, 'O campo email não pode ser vazio');
    contract.isRequired(password, 'O campo senha não pode ser vazio');

    if (!contract.isValid()) {
        res.status(400).send(contract.errors()).end();
        return;
    }

    try {
        const userInfo = await UserRepository.findOne({
            email,
            password: md5(password + process.env.SALT_KEY )
        }, { name: 1, email: 1, user_type: 1 });

        const token = await AuthService.generateToken(userInfo);

        res.status(200).send({
            token: token,
            data: userInfo
        });
    } catch (e) {
        res.status(400).json({ message: e.message });
    }
};

exports.checkToken = async (req, res) => {
    let { current_user } = req.body;

    try {

        const userInfo = await UserService.checkUserIsValid(current_user, 
            { name: 1, email: 1, user_type: 1 })

        res.status(200).send(userInfo);

    } catch(e) {
        res.status(400).json({ message: e.message });
    }   
};

exports.registerPatient = async (req, res) => {
    let { name, cpf, email, phone_number, genre, birth_date, address, city, state } = req.body;
    let { current_user } = req.body;

    let password = crypto.randomBytes(6).toString("HEX");

    let contract = new ValidationContract();
    contract.isRequired(name, 'O campo nome não pode ser vazio');
    contract.isCpfValid(cpf, 'Cpf Inválido');
    contract.isEmail(email, 'E-mail inválido');
    contract.isGenreValid(genre, 'Gênero inválido');
    contract.isRequired(birth_date, 'O campo data de nascimento não pode ser vazio');
    contract.isRequired(address, 'O campo endereço não pode ser vazio');
    contract.isRequired(city, 'O campo cidade não pode ser vazio');
    contract.isStateValid(state, 'Estado Inválido');
    contract.isRequired(password, 'O campo senha não pode ser vazio');

    if (!contract.isValid()) {
        res.status(400).send(contract.errors()).end();
        return;
    }

    try {
        await UserRepository.create({
            name,
            cpf,
            email,
            phone_number: phone_number ?? null,
            genre,
            birth_date,
            address,
            city,
            state,
            register_by: current_user,
            user_type: 'patient',
            password: md5(password + process.env.SALT_KEY ),
        });

        res.status(201).json({
            message: 'Paciente cadastrado com sucesso'
        });
    } catch (e) {
        res.status(400).json({
            message: e.message
        });
    }
};

exports.registerProfessional = async (req, res) => {
    let { name, crp, cpf, email, phone_number, genre, birth_date, address, city, state, password } = req.body;

    let contract = new ValidationContract();
    contract.isRequired(name, 'O campo nome não pode ser vazio');
    contract.isCpfValid(cpf, 'Cpf Inválido');
    contract.isRequired(crp, 'O campo crp não pode ser vazio');
    contract.isEmail(email, 'E-mail inválido');
    contract.isGenreValid(genre, 'Gênero inválido');
    contract.isRequired(birth_date, 'O campo data de nascimento não pode ser vazio');
    contract.isRequired(address, 'O campo endereço não pode ser vazio');
    contract.isRequired(city, 'O campo cidade não pode ser vazio');
    contract.isRequired(state, 'O campo estado não pode ser vazio');
    contract.isRequired(password, 'O campo senha não pode ser vazio');

    if (!contract.isValid()) {
        res.status(400).send(contract.errors()).end();
        return;
    }

    try {
        await UserRepository.create({
            name,
            cpf,
            crp,
            email,
            phone_number: phone_number ?? null,
            genre,
            birth_date,
            address,
            city,
            state,
            user_type: 'professional',
            password: md5(password + process.env.SALT_KEY ),
        });

        const userInfo = await UserRepository.findOne({
            email,
            password: md5(password + process.env.SALT_KEY )
        }, { name: 1, email: 1, user_type: 1 });

        const token = await AuthService.generateToken(userInfo);

        res.status(201).json({
            message: 'Profissional cadastrado com sucesso',
            token: token,
            data: userInfo
        });
    } catch (e) {
        res.status(400).json({
            message: e.message
        });
    }
};

exports.ListPatient = async (req, res) => {
    let { inputFilter = '', pageSize, page = 1 } = req.query;
    let { current_user } = req.body;

    let filter = {
        user_type: "patient",
        register_by: current_user,
        "$or": [
            { email: { '$regex': inputFilter, '$options': 'i' } },
            { name: { '$regex': inputFilter, '$options': 'i' } },
        ]
    }

    let projection = {
        name: 1,
        cpf: 1,
        email: 1,
        phone_number: 1,
        genre: 1,
        birth_date: 1,
        address: 1,
        city: 1,
        state: 1,
        user_type: 1,
        register_by: 1,
    }

    try {

        let userList = await UserRepository.find(filter, pageSize, page, projection);

        res.status(200).json({ data: userList, total: userList.length });
    } catch (e) {
        res.status(400).json({ message: e.message });
    }
}

exports.ListProfessional = async (req, res) => {
    let { inputFilter = '', pageSize, page = 1 } = req.query;

    let filter = {
        user_type: "professional",
        "$or": [
            { email: { '$regex': inputFilter, '$options': 'i' } },
            { name: { '$regex': inputFilter, '$options': 'i' } },
        ]
    }

    let projection = {
        name: 1,
        cpf: 1,
        crp: 1,
        email: 1,
        phone_number: 1,
        genre: 1,
        birth_date: 1,
        address: 1,
        city: 1,
        state: 1,
        user_type: 1
    }

    try {

        let userList = await UserRepository.find(filter, pageSize, page, projection);

        res.status(200).json({ data: userList, total: userList.length });
    } catch (e) {
        res.status(400).json({ message: e.message });
    }
}

exports.editUser = async (req, res) => {
    let { id } = req.params;
    let { name, phone_number, birth_date, genre, address, city, state } = req.body;

    let contract = new ValidationContract();
    contract.isGenreValid(genre, 'Gênero inválido');
    contract.isStateValid(state, 'Estado inválido');

    if (!contract.isValid()) {
        res.status(400).send(contract.errors()).end();
        return;
    }

    try {

        let checkUserExists = await UserService.checkUserIsValid(id);

        if (checkUserExists.user_type != "patient") {
            throw new Error("Rota para alterar dados de pacientes");
        }

        await UserRepository.update(id, {
            name,
            phone_number,
            birth_date,
            genre,
            address,
            city,
            state
        });

        res.status(200).json({ message: "Dados atualizados com sucesso" });
    } catch (e) {
        res.status(400).json({ message: e.message });
    }
};

exports.deletePatient = async (req, res) => {
    let { id } = req.params;

    try {
        await UserRepository.delete(id);

        res.status(200).json({ message: "Usuário deletado com sucesso" });
    } catch (e) {
        res.status(400).json({ message: e.message });
    }
};