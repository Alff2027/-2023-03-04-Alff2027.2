/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/ 

let usuarios = {
         toni: {
             edad: 33,
           online: true
        },
         emi: {
             edad: 25,
           online: true
        },
          fran: {
          edad: 25,
         online: false
       },
        agus: {
             edad: 24,
           online: false
        }
     }; 
     
function cuantosOnline(usuarios) {
  
// Tu código aca:
  var verdaderos =0, falsos = 0;
  
    for (let user in usuarios){
      console.log(user)
      usuarios[user].online === true ? verdaderos++ : falsos++;
    }
    return verdaderos;
}

console.log(` Hay ${cuantosOnline(usuarios)} usuarios online`)
document.write(` Hay ${cuantosOnline(usuarios)} usuarios online`)  

  
  


// No modifiques nada debajo de esta linea //

module.exports = cuantosOnline