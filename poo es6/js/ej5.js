class Persona {
    constructor(nombre, edad, dni, sexo, peso, altura, anio) {
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.anio = anio;
    }

    get getGen(){
        if (this.anio>=1930 && this.anio<=1948) {
            console.log(`la persona ${this.nombre}, pertenece a la generacion Silent. Caracteristica:austeridad`);
        }
        else if (this.anio>=1949 && this.anio<=1968) {
            console.log(`la persona ${this.nombre}, pertenece a la generacion baby boom. Caracteristica:ambicion`);
        }
        else if (this.anio>=1969 && this.anio<=1980) {
            console.log(`la persona ${this.nombre}, pertenece a la generacion X. Caracteristica:obsesion por el exito`);
        }
        else if (this.anio>=1981 && this.anio<=1993) {
            console.log(`la persona ${this.nombre}, pertenece a la generacion Y. Caracteristica:frustracion`);
        }
        else if (this.anio>=1994 && this.anio<=2010) {
            console.log(`la persona ${this.nombre}, pertenece a la generacion Z. Caracteristica:Irreverencia`);
        }
    }

    get getMayor(){
        if(this.edad>18){
            console.log(`es mayor de edad`);
        }
        else{
            console.log(`es menor de edad`);
        }
    }
 
    get getDatos(){
        console.log(`datos persona: ${this.nombre}, ${this.edad}, ${this.dni}, ${this.sexo}, ${this.peso}, ${this.altura}, ${this.anio}`)
    }

    get getNuevoDni(){
        this.dni=Math.floor(Math.random() * 10000000);
        console.log(this.dni);
    }
}



var personas = [];
i=0;


var valores = () =>{
    let inputVal1 = document.getElementById("nombre").value;
    let inputVal2 = document.getElementById("edad").value;
    let inputVal3 = document.getElementById("dni").value;
    let inputVal4 = document.getElementById("sexo").value;
    let inputVal5 = document.getElementById("peso").value;
    let inputVal6 = document.getElementById("altura").value;
    let inputVal7 = document.getElementById("anio").value;

    personas[i] = new Persona (inputVal1,inputVal2,inputVal3,inputVal4,inputVal5,inputVal6,inputVal7);
    console.log(personas[i]);
    i=i+1;
}


//PORQUE NO FUNCIONA EL GET
var generation = () =>{
    const gen = personas[i].getGen;
    console.log(gen); 
}