//a. una variable que contenga un string.
//b. una variable que contenga un array.
//c. una variable que contenga un boolean.
var string="hola soy un string";
var array=["soy","un","array",8];
var boolean=true;
//Hacer un console.log() de cada una de las variables anteriormente
//creadas.

console.log(string);
console.log(array);
console.log(boolean);

var array137=[];
for (var i = 1; i < 138; i++) {
array137.push(i++);
}
console.log(array137);
//
//
//
var ironMan={
  nombre:"Iron Man",
  equipo:"Avengers",
  poderes:["Volar", "Lanzar misiles", "Disparar láser"],
  energia:100,
  getPoder: function(num){
    /*if(num=0) {
      ironMan.energia-=10;
    }
    if(num=1) {
        ironMan.energia-=15;
    }
    if(num=2){
        ironMan.energia-=25;
    }*/
    return ironMan.poderes[num];
    }

}
var num1= Math.floor(Math.random()*3);
console.log(num1);
console.log(ironMan.getPoder(num1));
console.log(ironMan.energia);

var hulk={
  nombre:"Hulk",
  equipo:"Avengers",
  poderes:["Aplastar", "Gritar", "Golpear"],
  energia:100,
  getPoder: function(num){
    /*if(num=0) {
      hulk.energia-=5;
    }
    if(num=1) {
        hulk.energia-=25;
    }
    if(num=2){
        hulk.energia-=10;

  }  */
  return hulk.poderes[num];
}
}
var num2= Math.floor(Math.random()*3);
console.log(num2);
console.log(hulk.getPoder(num2));
console.log(hulk.energia);


var misDatos={
  nombre:"Fernanda",
  apellido:"Aurelio",
  dni:27027871,
  comidaFavorita:"pastel de papa",
  edad:40,
  saludar: function(){
    return "Hola mi nombre es " + misDatos.nombre + " " + misDatos.apellido + " y tengo " + misDatos.edad + " años.";
  }
}

for (var dato in misDatos) {
  console.log(misDatos[dato]);
}

  console.log(misDatos.saludar());


  /*El evento onclick() ocurre cuando un usuario clickea en el elemento
seleccionado. Para probarlo brevemente vamos a crear en el index.html un
<button> con id="miBoton". Luego de ello, en el archivo app.js vamos a
capturarlo en una variable botonDePrueba, luego, sobre esta variable
implementar el siguiente código:
botonDePrueba.onclick = function(){alert("Testeando el click")}
¿Qué ocurre si al ver el archivo en el navegador hacemos click?*/

var botonDePrueba=document.getElementById("miBoton");

botonDePrueba.onclick=function(){alert("Testeando el click")};
