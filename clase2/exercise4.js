


class StudentSanction {

    static studentName = "Eze Campos";

    static violations = {
        "Tardiness": 1,
        "Walking in hallways during class": 3,
        "Not wearing appropriate attire": 5,
        "Improper use of facilities": 10
    };

    static applySanction(violation) {
        const fee = this.violations[violation];

        if (fee === undefined) {
            return `Violation "${violation}" is not recognized.`;
        }

        return `Student: ${this.studentName}\n` +
               `Violation: ${violation}\n` +
               `Total fee: $${fee}`;
    }
}

console.log(StudentSanction.applySanction("Tardiness"));

console.log(StudentSanction.applySanction("Walking in hallways during class"));

console.log(StudentSanction.applySanction("Not wearing appropriate attire"));

console.log(StudentSanction.applySanction("Improper use of facilities"));

console.log(StudentSanction.applySanction("Talking in class"));
