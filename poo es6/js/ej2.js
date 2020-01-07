class Cuenta {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }

    set setIngresar(cant) {
        this.saldo = this.saldo + cant;
    }

    set setExtraer(extraer) {
        this.saldo = this.saldo - extraer;
    }

    get getInformar() {
        console.log(`estado de la cuenta: saldo: ${this.saldo}`);
    }
}


cuenta1 = new Cuenta('alex', 0);
console.log(cuenta1);


i = 0;
cuentas = [];

var values = () => {
    let inputValue = document.getElementById("titular").value;
    let inputValue2 = document.getElementById("saldo").value;
    console.log(inputValue,inputValue2)
    
    i = i + 1;

    for (const cta of cuentas) {
        if (cuentas[i].titular = inputValue) {
            console.log(`ya existe la cuenta`);
        }
        else {
            cuentas[i] = new Cuenta(inputValue, inputValue2);
            console.log(`cuenta creada: titular: ${cuentas[i].titular}, saldo inicial:${cuentas[i].saldo}saldo}`);
        }
    }

}