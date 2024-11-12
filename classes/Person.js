class Person {
    constructor(name) {
        this.name = name;
        this.dateOfBirth = null;
    }

    setDateOfBirth(year) {
        this.dateOfBirth = year;
    }

    getDateOfBirth() {
        return this.dateOfBirth
    }

    age() {
        if (!this.dateOfBirth) {
            return "Vanus on teadmata";
        }
        const currentYear = new Date().getFullYear();
        return `Ta on ${currentYear - this.dateOfBirth} aastane.`;
    }

    getName() {
        return this.name
    }

    description() {
        return `Selle inimese nimi on: ${this.name}, ta on väga lahe.`;
    }

    toJSON() {
        return {
            name: this.name,
            dateOfBirth: this.dateOfBirth,
        };
    }
}


module.exports = Person;