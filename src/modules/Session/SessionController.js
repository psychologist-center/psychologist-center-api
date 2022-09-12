const ValidationContract = require('../../services/validatorService');
const SessionRepository = require('./SessionRepository');
const SessionService = require('../Session/SessionService');
const UserService = require('../User/UserService');
const UserRepository = require('../User/UserRepository');

exports.registerSession = async (req, res) => {
    let { current_user, patient_id, appointment_date, topic, duration, session_type } = req.body;

    let patient = [];

    let contract = new ValidationContract();
    contract.isRequired(patient_id, 'O campo paciente não pode ser vazio');
    contract.isSessionTypeValueValid(session_type, 'Tipo de sessão inválido');
    contract.isRequired(appointment_date, 'O campo data de agendamento não pode ser vazio');
    contract.isRequired(topic, 'O campo tópico não pode ser vazio');
    contract.isRequired(duration, 'O campo duração não pode ser vazio');

    if (!contract.isValid()) {
        res.status(400).send(contract.errors()).end();
        return;
    }

    try {
        for(let i in patient_id) {
            let patientInfo = await UserRepository.findOne({
                "$and": [
                    { _id: patient_id[i] },
                    { user_type: "patient" }
                ]
            }, {id: 1, name: 1, email: 1});

            patient.push(patientInfo);
        }

        let professional = await UserService.checkUserIsValid({
            id: current_user
        }, {id: 1, name: 1, email: 1});

        await SessionRepository.create({
            patient,
            appointment_date,
            topic,
            duration,
            session_type,
            professional
        });

        res.status(201).json({
            message: 'Sessão cadastrada com sucesso'
        });

        patient = [];
    } catch (e) {
        res.status(400).json({
            message: e.message
        });
    }
};

exports.ListSession = async (req, res) => {
    let { inputFilter = '', pageSize, page = 1 } = req.query;
    let { current_user } = req.body;

    filter = {
        "professional._id": current_user
    };

    try {
        let sessionList = await SessionRepository.find(filter, pageSize, page);

        res.status(200).json({ data: sessionList, total: sessionList.length });
    } catch (e) {
        res.status(400).json({ message: e.message });
    }
}

exports.dashboard = async (req, res) => {
    let { current_user } = req.body;

    try {
        let scheduledSessionsDay = await SessionService.ScheduledSessionsDay(current_user);
        let scheduledSessionsMonth = await SessionService.ScheduledSessionsMonth(current_user);
        let canceledSessionsMonth = await SessionService.CanceledSessionsMonth(current_user);

        res.status(200).json({ 
            scheduledSessionsDay,
            scheduledSessionsMonth,
            canceledSessionsMonth
        });
    } catch (e) {
        res.status(400).json({ message: e.message });
    }
}

exports.editSession = async (req, res) => {
    let { id } = req.params;
    let { patient_id, topic, duration, session_type, status, observation } = req.body;

    let contract = new ValidationContract();
    contract.isSessionTypeValueValid(session_type, 'Tipo de sessão inválido');
    contract.isSessionTypeValueValid(status, 'Status inválido');

    if (!contract.isValid()) {
        res.status(400).send(contract.errors()).end();
        return;
    }

    if(patient_id) {
        var patient = [];

        for(let i in patient_id) {
            let patientInfo = await UserRepository.findOne({
                 _id: patient_id[i],
            }, {id: 1, name: 1, email: 1});
    
            patient.push(patientInfo);
        }
    }

    try {
        await SessionRepository.update(id, {
            patient,
            appointment_date,
            topic,
            duration,
            session_type,
            status,
            observation
        });

        res.status(200).json({ message: "Dados atualizados com sucesso" });

        patient = [];
    } catch (e) {
        res.status(400).json({ message: e.message });
    }
};