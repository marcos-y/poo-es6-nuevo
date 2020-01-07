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


