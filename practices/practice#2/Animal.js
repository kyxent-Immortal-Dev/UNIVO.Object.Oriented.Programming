

module.exports = class Animal {

    constructor(
        name,
        species,
        color
    ){
        this._name     = name;
        this._species  = species;
        this._color    = color;
    }


    get name () { return this._name }

    set name (name) { this._name = name }


}