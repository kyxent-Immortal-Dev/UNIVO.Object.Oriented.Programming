const { v4: uuidv4 } = require('uuid');

module.exports = class Person {
    constructor(id, name, phone, gender, department) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.gender = gender;
        this.department = department;
    }

    get id() {
        return this._id;
    }

    set id(newId) {
        if (typeof newId !== "string" || newId.length !== 36) {
            throw new Error("Invalid ID");
        }
        this._id = newId;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        if (typeof newName !== "string") {
            throw new Error("Name must be text");
        }
        if (newName.length > 20) {
            throw new Error("Name must not exceed 20 characters");
        }
        if (!/^[a-zA-Z\s]+$/.test(newName)) {
            throw new Error("Name must contain only letters and spaces");
        }
        this._name = newName;
    }

    get phone() {
        return this._phone;
    }

    set phone(newPhone) {
        if (typeof newPhone !== "string") {
            throw new Error("Phone must be a string");
        }
        if (!/^\d{8}$/.test(newPhone)) {
            throw new Error("Phone must contain exactly 8 numbers");
        }
        this._phone = newPhone;
    }

    get gender() {
        return this._gender === "M" ? "Male" : "Female";
    }

    set gender(newGender) {
        if (typeof newGender !== "string" || !["M", "F"].includes(newGender.toUpperCase())) {
            throw new Error("Gender must be 'M' or 'F'");
        }
        this._gender = newGender.toUpperCase();
    }

    get department() {
        return this._department;
    }

    set department(newDepartment) {
        const validDepartments = ["Sales", "HR", "Administration"];
        if (!validDepartments.includes(newDepartment)) {
            throw new Error(`Invalid department. Must be one of: ${validDepartments.join(", ")}`);
        }
        this._department = newDepartment;
    }

    showUserInformation() {
        return `
            ID: ${this.id}
            Name: ${this.name}
            Phone: ${this.phone}
            Gender: ${this.gender}
            Department: ${this.department}
        `;
    }
}


