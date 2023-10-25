const { Employees } = require("./Employees")

class SoftwareEngineer extends Employees {
    #salary;
    #isHired;
    #programmingLanguages;
    constructor(name, position, salary, programmingLanguages) {
        super(name, position, salary);
        this.#programmingLanguages = programmingLanguages;
    }

    getProgrammingLanguages() {
        return this.#programmingLanguages;
    }

    setProgrammingLanguages(language) {
        this.#programmingLanguages.push(language);
    }
}

module.exports = {
    SoftwareEngineer,
}