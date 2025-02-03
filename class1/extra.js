const readline = require('readline');
const fs = require('fs').promises;
const path = require('path');
const uuid = require('uuid');


class User {


    constructor({ names, lastnames, age, email, password }) {
    this.id = uuid.v4();

    this.names = names;

    this.lastnames = lastnames;

    this.age = age;
    this.email = email;
    this.password = password;
  }

  static async create() {

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    
    });


    const question = (query) => new Promise(resolve => rl.question(query, resolve));

    try {

      const names = await question('Ingrese su nombre: ');
      const lastnames = await question('Ingrese su apellido: ');
      const age = parseInt(await question('Ingrese su edad: '));
      const email = await question('Ingrese su email: ');

      const password = await question('Ingrese su contraseña: ');


      if (!names || !lastnames || isNaN(age) || !email || !password) {

        throw new Error('Todos los campos son obligatorios');

      }

      const user = new User({ names, lastnames, age, email, password });


      const usersFilePath = path.join(__dirname, 'users.json');

      let users = [];

      try {

        const data = await fs.readFile(usersFilePath, 'utf-8');

        users = JSON.parse(data || '[]');

      } catch (error) {

        if (error.code !== 'ENOENT') throw error;
      }

      users.push(user);

      await fs.writeFile(usersFilePath, JSON.stringify(users, null, 2));
      
      console.log('Usuario creado con éxito');

    } catch (error) {

      console.error('Error al crear usuario:', error.message);

    } finally {

      rl.close();
      
    }
  }
}

User.create();