//funcion para validar el nombre del vendedor y de los productos
function validaNom(texto){
    do {
    let nombre = prompt(texto);

    if (nombre !== "" && !(!/^[a-z A-Z]*$/g.test(nombre)))
      return nombre;
    } while (true);
  }
//funcion para validar los numeros (cantidad)
function validaNum(texto){
    do {
    let nombre = prompt(texto);

    if (nombre !== "" && !(!/^[0-9]*$/g.test(nombre)))
      return nombre;
    } while (true);
  }
//solicitamos el nombre del usuario y lo almacenamos en una variable
let usuario = validaNom("¿Cuál es tu nombre?");

//almacenamos el código del producto y el precio en la variable productos
let productos = {
  C: 15000,
  P: 50000,
  M: 10000
};

//Imprimimos una tabla que muestra los datos de los productos
alert(usuario+" para comprar un producto debes tener en cuenta lo siguiente: ")
alert("");
alert("    Código     |    Producto   |  Precio  ");
alert("---------------|---------------|----------");
alert(`      C        | Camisa        | ${productos.C}`);
alert(`      P        | Pantalon      | ${productos.P}`);
alert(`      M        | Medias        | ${productos.M}`);
alert("------------------------------------------");
alert("");

//definimos un do while que almacena todo el proceso 
do{
  //definimos un do while para realizar el proceso al menos una sola vez
  do{
    //le solicitamos al usuario insertar el código del producto que desea comprar
    cod = validaNom(usuario+" inserta el código del producto que desees comprar");
    //Ponemos el string en mayúsculas con la funcion toUpperCase
    cod = cod.toUpperCase(); 
    
  //definimos un switch para realizar un proceso para cada caso 
  switch (cod) {
    //en caso que el usuario digite el código C, se ralizará el siguiente proceso  
    case 'C':
        cant = validaNum("Digita la cantidad que desea llevar");

      total = productos.C * cant;
      alert("El precio total a pagar es: "+total+" pesos");
      break;
    
    //en caso que el usuario digite el código P, se ralizará el siguiente proceso  
    case 'P':
        cant = validaNum("Digita la cantidad que desea llevar");

      total = productos.P * cant;
      alert("El precio total a pagar es: "+total+" pesos");
      break;
      
    //en caso que el usuario digite el código M, se ralizará el siguiente proceso 
    case 'M':
        cant = validaNum("Digita la cantidad que desea llevar");
      total = productos.M * cant;
      alert("El precio total a pagar es: "+total+" pesos");
      break;
    
    //en caso que el usuario digite un código no existente, se ralizará el siguiente proceso 
    default:
      alert("Lo sentimos, este producto no existe");
      cant = false

  }
  } 
  while(cant === false);
  valid = confirm("¿Desea comprar otro producto?");
}
while(valid === true);
