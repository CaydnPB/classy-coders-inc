class Employees {
    #salary;
    #isHired;
    static #allEmployees = [];
    static getEmployees(){
        return this.#allEmployees;
    }
    static getTotalPayroll(){
        let total = 0;
        for (const employee of this.getEmployees()) {
            total += employee.#salary;
        }
        return total;
    }
    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.#salary = salary;
        this.#isHired = true;
        Employees.#allEmployees.push(this);
    }

    getSalary() {
        return this.#salary;
    }

    setSalary(amount) {
        this.#salary = amount;
    }

    getStatus() {
        return this.#isHired
    }

    setStatus(command) {
        if (command === "hire") {
            this.#isHired = true;
        } else {
            this.#isHired = false;
        }
    }   
}

module.exports = {
    Employees,
}