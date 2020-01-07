class auto{
    constructor(color,marca,modelo,encendido){
        this.color=color;
        this.marca=marca;
        this.modelo=modelo;
        this.encendido=false;
    }

    encender(){
        this.encender=true;
    }

    apagar(){
        this.encender=false;
    }
}

var autos = [];
var i=0;


var ingresarValor = () =>{
    let inputval1=document.getElementById("color").value;
    let inputval2=document.getElementById("nombre").value;
    let inputval3=document.getElementById("modelo").value;
    i=i+1;
    autos[i]=new auto(inputval1,inputval2,inputval3);
    console.log(autos[i]);
}

var enciende = () =>{
    autos[i].encender;
    console.log(autos[i].encender);
}

var apaga = () =>{
    autos[i].apagar;
    console.log(autos[i].apagar);
}
