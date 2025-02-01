
class UserNoteRegister {

    static fullname = "Humberto Ezequiel Zelaya Campos";

    static tittle = "POO API REST";

    static note = 10;

    static details = `User ${UserNoteRegister.fullname} you completed this task`;

    static countWords(text) {
        return text.trim().split(/\s+/).length; 
    }

    static printNotes() {
        return `******************************
Title: ${UserNoteRegister.tittle}
******************************
Your note: ${UserNoteRegister.note}
******************************
Details: ${UserNoteRegister.details}
******************************

Number words in details: ${UserNoteRegister.countWords(UserNoteRegister.details)}
******************************`;
    }
}

console.log(UserNoteRegister.printNotes());
