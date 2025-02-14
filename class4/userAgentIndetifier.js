class User {

    constructor(
        names,
        lastnames, 
        age, 
        dui, 
        email, 
        password, 
        city) {
        this._names      = names;
        this._lastnames  = lastnames;
        this._age        = age;
        this._dui        = dui;
        this._email      = email;
        this._password   = password;
        this._city       = city;
    }

    get user() {

        if (!Number.isInteger(this._dui) || String(this._dui).length !== 9) throw new Error('El DUI debe ser un número entero de 9 dígitos.');
        

        return {
            names      : this._names,
            lastnames  : this._lastnames,
            age        : this._age,
            dui        : this._dui,
            email      : this._email,
            password   : this._password,
            city       : this._city
        };
    }
}

try {                                              //cuando tiene comillas es un string
    const newUser = new User('Eze', 'Campos', 21, "200000000", 'h@gmail.com', '123456', 'San Salvador');
    console.log(newUser.user); 
} catch (error) {
    console.error(error.message);
}
