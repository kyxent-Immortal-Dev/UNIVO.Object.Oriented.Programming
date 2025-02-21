

module.exports = class AgeCalculator {
    constructor(birthDate) {
        this.birthDate = birthDate;
    }

    get birthDate() {
        return this._birthDate;
    }

    set birthDate(date) {

        if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
            throw new Error("Date must be in format YYYY-MM-DD");
        }

        const [year, month, day] = date.split("-").map(Number);
        const dateObj = new Date(year, month - 1, day);

        if (isNaN(dateObj.getTime())) {
            throw new Error("Invalid date");
        }

        if (dateObj > new Date()) {
            throw new Error("Birth date cannot be in the future");
        }

        if (year < 1900) {
            throw new Error("Birth year must be 1900 or later");
        }

        this._birthDate = dateObj;
    }

    calculateAge() {
        const today = new Date();
        let age = today.getFullYear() - this.birthDate.getFullYear();
        const monthDiff = today.getMonth() - this.birthDate.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < this.birthDate.getDate())) {
            age--;
        }

        return age;
    }

    showAge() {
        const age = this.calculateAge();
        return `Age: ${age} years old`;
    }
}
