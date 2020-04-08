var arreglo = [1,3,5,8];

//No tienen un orden, la persona que está interpretando le da el orden. 
//Llave: valor


// JSON = JS de JavaScript + O de objet + N de Notation


var objeto = {
    nombre: "La noche estrellada",
    autor: "Van Gogh",
    tecnica: "Óleo",
    colores: ["#FFFFFF","#000000"],
    anio: 1889,
    Lugar: "Ámsterdam",
    Mensaje: "Es una obra muy linda",
    Museo: "Museo de Van Gogh",

    //Métodos
    //Nombre de la función: delaración de función { lo que queremos ver}
    
    calcularEdad: function () {return 2020 - this.anio},
    numeroColores:function () {return "La pintura " + this.nombre + " del pintor " + this. autor + " tiene " +  this.colores.length + " colores"},
    obtenerInfo: function () {
        return "La obra " + this.nombre + " fue pintada por " + this.autor + " en el año " +  this.anio;
    }
}
console.log(objeto);
console.log(objeto.nombre);

objeto.calcularEdad();
objeto.numeroColores();
console.log(objeto.numeroColores());
console.log(objeto.obtenerInfo());