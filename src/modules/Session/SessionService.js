const { ObjectId } = require('mongodb');
const Session = require('../Session/Session');

exports.ScheduledSessionsDay = async (userId) => {
    const currentDate = new Date();

    let sessions = await Session.find({
        _id: userId,
        appointment_date: currentDate,

    });

    return sessions.length
}

exports.ScheduledSessionsMonth = async (userId) => {
    const currentDate = new Date();
    let month = currentDate.getMonth();

    let sessions = await Session.find({
        _id: userId,
        appointment_date: month,
    });

    return sessions.length
}

exports.CanceledSessionsMonth= async (userId) => {
    const currentDate = new Date();
    let month = currentDate.getMonth();

    let sessions = await Session.find({
        _id: userId,
        appointment_date: month,
        status: 1
    });

    return sessions.length
}