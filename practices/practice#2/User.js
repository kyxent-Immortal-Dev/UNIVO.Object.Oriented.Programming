


module.exports = class User {


    constructor(
        names,
        lastnames,
        age,
        email,
        password,
    ){
        this._names      = names;
        this._lastnames  = lastnames;
        this._age        = age;
        this._email      = email;
        this._password   = password;
    }


    get showInformationUser () {

        const user = {
            names      : this._names,
            lastnames  : this._lastnames,
            age        : this._age,
            email      : this._email,
            password   : this._password,
        }

        return user
    }

    set showInformationUser ({names , lastnames , age , email, password}) {

        this._names      = names;
        this._lastnames  = lastnames;
        this._age        = age;
        this._email      = email;
        this._password   = password;

    }


}


// const user = new User("Ezequiel", "Campos", 21, "humbertoezequiel@gmail.com", "12345678")

// console.log(user.showInformationUser);

// user.showInformationUser = {
//     names      : "Humberto Ezequiel",
//     lastnames  : "Zelaya Campos",
//     age        : 21,
//     email      : "humbertoezequiel.z.c@gmail.com",
//     password   : "123456789",
// }

// console.log(user.showInformationUser);
