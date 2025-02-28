const readline = require("readline")
const Employe = require("./Employe")


const TerminalInterface = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})



const initTerminal = () => {

    TerminalInterface.question("please insert a fullname employee ", (fullname) => {

        TerminalInterface.question("please insert salary ", (salary)=> {

            TerminalInterface.question("Please insert age ", (age) => {


                TerminalInterface.question("Please insert role user ", (Role)=> {


                    const employee = new Employe(fullname, parseFloat(salary), parseInt(age), Role)

                    console.log(employee.showInformation());
                    employee.userSalary

                    TerminalInterface.question("Youre change salary for this employe?? \n1-yes\n2-no\n ", (op) => {

                        switch (parseInt(op)) {
                            case 1:
                            
                            TerminalInterface.question("Please insert new salary ", (newSalary) => {

                                employee.userSalary = parseFloat(newSalary)

                                employee.userSalary

                                console.log(employee.showInformation());
                                initTerminal()
                                

                            })

                                break;

                            case 2:

                            console.log("thanks for use my program");

                                TerminalInterface.close()
                            

                                break
                        
                            default:
                                break;
                        }

                    })
                    

                })

            })

        })

    })

}

initTerminal()