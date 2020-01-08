var productos = [];
var i = 0;

class Producto {
    constructor(nombre, precio, cantidad, categoria) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.categoria = categoria;
    }

    agregar() {
        let prodExiste = false;
        i = i + 1;

        for (const produ of productos) {
            if (this.nombre == productos[i].nombre) {
                prodExiste = true;
            }
        }

        if (prodExiste = true) {
            productos[i].cantidad = this.cantidad + productos[i].cantidad;
        }
        else {
            console.log('no existe');
            productos[i].nombre = this.nombre;
            productos[i].precio = this.precio;
            productos[i].cantidad = this.cantidad;
            productos[i].categoria = this.categoria;
        }
    }

    cambiarStock(nom,cant) {

        //PRIMERO BUSCO POR NOMBRE

        for (const produ of productos) {
            if (nom == productos[i].nombre) {
                prodExiste = true;
                let j = i;
            }
        }

        //CAMBIANDO STOCK
        productos[j].cantidad=cant;

    }

    cambiarPrecio(nom,prec){

         //PRIMERO BUSCO POR NOMBRE

         for (const produ of productos) {
            if (nom == productos[i].nombre) {
                prodExiste = true;
                let j = i;
            }
        }

         //CAMBIANDO PRECIO 
         productos[j].precio=prec;
    }

    get getListado(){
        for(let j=0;j<productos.length;j++)
        {
            if(productos[j].cantidad!=0)
            {
                console.log(productos[i]);
            }
        }
    }
}


prod1 = new Producto('coca', 50, 500, 2);
console.log(prod1);


prod1.agregar();


 const test = [
    {
        nombre:"coka",
        precio:10
    },
    {
        nombre:"pepsi",
        precio:20
    }
];


//busca objeto = a coka
const encontrado = productos.find(producto=> producto.nombre === 'coka');

//busca por nombre;
var nomb;
const encontrado = productos.find(producto => producto.nombre === nomb);

// filter te da todas las ocurrencias q cumplan esa condiciion
const encontrado = productos.filter(producto => producto.precio >= 10);
console.log('se encontro',encontrado);

//el return esta implicito
const calcularCuadrado = num => num*num;
console.log(`valor calculado: ${calcularCuadrado(2)}`);


//NO VAMOS A USAR THIS FOO  DE ES6!!!!!!!!!!!!!!!!!!!!!!!!

//dDESTRUCTURING / DESECSTRUCTURACION DE OBJETIOS //llaves cuando es objet - corchetes para array
const nombre = producto.nombre;
console.log(nombre);

const {nombre,precio}= producto[0];
console.log(nombre);

const array = ['kevin','gomez'];

const[nombre,apellido] = array;
console.log(nombre,edad);

class persona{
    constructor({nombre,apellido,edad});
}

//MODULOS SE VE EN REACT JUNTO CON DESESTRUTURACION