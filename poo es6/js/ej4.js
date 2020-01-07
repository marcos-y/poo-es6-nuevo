class Producto{
    constructor(codigo,nombre,precio){
        this.codigo=codigo;
        this.nombre=nombre;
        this.precio=precio;
    }

    get getDatos(){
        console.log(this.codigo);
        console.log(this.nombre);
        console.log(this.precio);
    }
}

i=0;
var productos = [];

var ingresoval = () =>{
    i=i+1;
    let inputval1 = document.getElementById("codigo").value;
    let inputval2 = document.getElementById("nombre").value;
    let inputval3 = document.getElementById("precio").value;

    productos[i] = new Producto(inputval1,inputval2,inputval3);
    console.log(productos[i]);
}


