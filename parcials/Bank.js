


class BankService {

    #numberAccount
    #owner
    #money
    #status

    constructor(numberAccount , owner , money, status){


        this.#numberAccount   = numberAccount
        this.#owner           = owner
        this.#money           = money
        this.#status          = status

    }

    get showNumberAccount() {

        return this.#numberAccount
    }

    set showNumberAccount(newNumberAccount){

        this.#numberAccount = newNumberAccount
    }

    get showOwner () {
        return this.#owner
    }

    set showOwner (newOwner) {

        this.#owner = newOwner

    }

    get showMoney(){
        return this.#money
    }

    set showMoney(newMoney){
        if(newMoney <= 0) throw new Error("Please insert a valid mount")

        this.#money = newMoney

    }

    get showStatus(){
        return this.#status
    }

    set showStatus(newStatus){
        this.#status = newStatus
    }


    deposit(mount){

        if(mount <= 0 || this.#status === false) throw new Error("The account is not active or mount is invalid please insert valid data")

        const newMount = this.#money + mount

        this.#money = newMount


    }

    discount(mount){
        if(mount > this.#money) throw new Error("the mount cannot mayor the actuality money")

        if(mount <= 0 || this.#status === false) throw new Error("The account is not active or mount is invalid please insert valid data")

            const newMount = this.#money - mount
    
            this.#money = newMount
    }

    showInformationAccount(){

        console.log(`propietary : ${this.#owner}\nnumber account: ${this.#numberAccount}\nmoney : ${this.#money}\nstatus : ${this.#status}\n`);
        

    }


}



const bank = new BankService("122346787433", "Humberto Ezequiel Zelaya Campos", 4000, true)


console.log(bank.showOwner);
console.log(bank.showMoney);

console.log(bank.showNumberAccount);
console.log(bank.showStatus);


bank.showMoney = -6000


console.log(bank.showMoney);


bank.deposit(10000)

bank.discount(2000)

bank.showInformationAccount()