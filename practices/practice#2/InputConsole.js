const leerLinea = require("readline")
const User = require("./User")


const interfazConsola = leerLinea.createInterface({
    input : process.stdin,
    output : process.stdout,
})


interfazConsola.question("please insert your names : ", (names) => {

    interfazConsola.question("please insert your lastnames : ", (lastnames) => {
        
        interfazConsola.question("please insert your age : ",(age) => {

            interfazConsola.question("please insert your email : ", (email) => {
                
                interfazConsola.question("please insert your password : ",(password) => {


                    const user = new User(names, lastnames, age, email, password)

                    console.log(user.showInformationUser);

                    interfazConsola.question("you want change name?\n1-Yes\n2-No" , (op) => {

                        switch (parseInt(op)) {
                            case 1:
                            
                            interfazConsola.question("please insert a new name", (newName) => {

                                user.showInformationUser = {
                                    names      : newName,
                                    lastnames  : lastnames,
                                    age        : age,
                                    email      : email,
                                    password   : password,
                                }

                                console.log(user.showInformationUser);
                                console.log("thank you for use my program");
                                interfazConsola.close()

                            })
                            
                                break;

                            case 2:

                                console.log("thank you for use my program");
                                interfazConsola.close()
                                break;
                        
                            default:
                                break;
                        }

                    })
                    

                })
            })
        }) 
    })

})




