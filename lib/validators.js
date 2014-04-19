var Validators;

function register() {

    window.ParsleyValidator
    .addValidator("city", function (value, requirement) {
        var allowedCharacterRegex = /^[a-zA-Z\'\"\ ]+$/;

        value = value.trim();

        return allowedCharacterRegex.test(value);
    }, 32)
    .addMessage("en", "city", "City name is invalid.");
}

Validators = {
    register: register
};

module.exports = Validators;
