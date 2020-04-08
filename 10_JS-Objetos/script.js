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
    url: "https://educacion.ufm.edu/wp-content/uploads/2013/08/VanGogh-starry_night_-1889.jpg",
    calcularEdad: function () {return 2020 - this.anio},
    numeroColores:function () {return "La pintura " + this.nombre + " del pintor " + this. autor + " tiene " +  this.colores.length + " colores"},
    obtenerInfo: function () {return "La obra " + this.nombre + " fue pintada por " + this.autor + " en el año " +  this.anio;}
}


//al colocar document pones acceso a todo lo que hay en html en console
//.getelemntById significa obtener un elemento de un ID
// DOM => Document Object Model Practicamente esto se trata de ver todos los elementos de un navegador

var objetoNombre = document.getElementById("objeto-nombre");
var objetoMensaje = document.getElementById("objeto-mensaje");
var objetoUrl = document.getElementById("objeto-url");

console.log(objeto);
console.log(objetoNombre);
console.log(objetoMensaje);

//HTML      => "remplazando" => valor 
objetoNombre.innerHTML = objeto.nombre;
objetoMensaje.innerHTML = objeto.obtenerInfo();
objetoUrl.src = objeto.url;
//innerHTML => es lo que se encuentra dentro de h1, p, etc el título o información como dicen...
console.log(objetoNombre.innerHTML);
console.log(objetoUrl.innerHTML);

//objeto.calcularEdad();
//objeto.numeroColores();
//console.log(objeto.calcularEdad());
//console.log(objeto.numeroColores());
//console.log(objeto.obtenerInfo());
//console.error("Esto es un error");
//console.warn("posiblemente esto es un error");
//console.log("Un log normal");

    //Métodos
    //Nombre de la función: delaración de función { lo que queremos ver}

  //  }
//}
// IMAGEN DOS
var objetoDos = {
    nombre: "El nacimiento de una divinidad",
    autor: "Salvador Dalí",
    tecnica: "Óleo",
    anio: 1960,
    url: "https://totenart.com/noticias/wp-content/uploads/2015/11/Salvador-Dali-el-nacimiento-de-una-divinidad-noticias-totenart.jpg",
    calcularEdad: function () {return 2020 - this.anio},
    numeroColores:function () {return "La pintura " + this.nombre + " del pintor " + this. autor + " tiene " +  this.colores.length + " colores"},
    obtenerInfo: function () {return "La obra " + this.nombre + " fue pintada por " + this.autor + " en el año " +  this.anio;}
}

var objetoDosNombre = document.getElementById("objeto-nombre-dos");
var objetoDosMensaje = document.getElementById("objeto-mensaje-dos");
var objetoDosUrl = document.getElementById("objeto-url-dos");

objetoDosNombre.innerHTML = objetoDos.nombre;
objetoDosMensaje.innerHTML = objetoDos.obtenerInfo();
objetoDosUrl.src = objetoDos.url;

console.log(objetoDosNombre.innerHTML);
console.log(objetoDosUrl.innerHTML);

// IMAGEN TRES
var objetoTres = {
    nombre: "Capilla Sixtina",
    autor: "Miguel Ángel",
    tecnica: "Óleo",
    anio: 1483,
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Sistina-interno.jpg/270px-Sistina-interno.jpg",
    calcularEdad: function () {return 2020 - this.anio},
    numeroColores:function () {return "La pintura " + this.nombre + " del pintor " + this. autor + " tiene " +  this.colores.length + " colores"},
    obtenerInfo: function () {return "La obra " + this.nombre + " fue pintada por " + this.autor + " en el año " +  this.anio;}
}

var objetoTresNombre = document.getElementById("objeto-nombre-tres");
var objetoTresMensaje = document.getElementById("objeto-mensaje-tres");
var objetoTresUrl = document.getElementById("objeto-url-tres");

objetoTresNombre.innerHTML = objetoTres.nombre;
objetoTresMensaje.innerHTML = objetoTres.obtenerInfo();
objetoTresUrl.src = objetoTres.url;

console.log(objetoTresNombre.innerHTML);
console.log(objetoTresUrl.innerHTML);
