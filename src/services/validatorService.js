const { validate } = require('gerador-validador-cpf');

let errors = [];

function ValidationContract() {
    errors = [];
}

ValidationContract.prototype.isRequired = (value, error) => {
    if (!value || value.length <= 0)
        errors.push({ message: error });
}

ValidationContract.prototype.isStateValid = (value, error) => {

    const listState = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];

    stateIsValid = listState.find((state) => {
        return state == value ? true : false;
    });

    if (!stateIsValid || value.length <= 0)
        errors.push({ message: error });
}

ValidationContract.prototype.isGenreValid = (value, error) => {

    const listGenre = ['HM', 'M', 'NB', "NR"];

    genreIsValid = listGenre.find((genre) => {
        return genre === value ? true : false;
    });

    if (!genreIsValid || value.length <= 0)
        errors.push({ message: error });
}

ValidationContract.prototype.isCpfValid = (value, error) => {

    let cpfIsValid = validate(value);

    if (!cpfIsValid || value.length <= 0)
        errors.push({ message: error });
}

ValidationContract.prototype.hasMinValue = (value, error) => {
    if (value < 0)
        errors.push({ message: error });
}

ValidationContract.prototype.hasMinLen = (value, min, error) => {
    if (!value || value.length < min)
        errors.push({ message: error });
}

ValidationContract.prototype.hasMaxLen = (value, max, error) => {
    if (!value || value.length > max)
        errors.push({ message: error });
}

ValidationContract.prototype.isFixedLen = (value, len, error) => {
    if (value.length != len)
        errors.push({ message: error });
}

ValidationContract.prototype.isEmail = (value, error) => {
    var reg = new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
    if (!reg.test(value))
        errors.push({ message: error });
}
ValidationContract.prototype.monthIsValid = (value, error) => {
    if (value > 12 || value < 0)
        errors.push({ message: error });
}

ValidationContract.prototype.errors = () => {
    return errors[0];
}

ValidationContract.prototype.clear = () => {
    errors = [];
}

ValidationContract.prototype.isValid = () => {
    return errors.length == 0;
}

module.exports = ValidationContract;