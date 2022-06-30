/*Cristian Quevedo
Jorge Orlando Castro Nova
2470980
15/05/2022*/

//definimos un do while para realizar por lo menos una tabla de multiplicar
do{
  //definimos un do while para solicitar la tabla de multiplicar que requiera el usuario, en caso que no digite nada, se comstrará la tabla del 10
    do{
        let pre_tabla = prompt("¿Que tabla de multiplicar desea imprimir?(valor por defecto 10)");

        //si el valor que digite el usuario es vacio, nos mostrará por defecto la tabla del 10
        if(pre_tabla === ""){
          pre_tabla = 10;
      }
  
      //convertimos el valor de pre_tabla a numero 
      tabla = Number(pre_tabla);  
  
      //realizamos una validacion de datos 
      if(Number.isNaN(tabla) === true){
        alert("este programa solo recibe valores numericos, digite de nuevo...");
      
      }
     }while(Number.isNaN(tabla) === true);
    
    //definimos una variable que usaremos depues para mostrar toda la tabla 
    let showTabla = "";

    //ciclo for para realizar la operacion hasta el numero 10
    for (let i = 1; i < 11; i++) {
      //\n se usa para generar saltos de linea
      showTabla = showTabla+ tabla + " * "+ i +" = " + tabla*i+ '\n';
    }
    //imprimimos la tabla
    alert(showTabla)
  
    //le preguntamos al usuario si quiere otra tabla, en caso true, se repite el preoceso, en caso false termina la ejecución
  }while("¿Quiere imprimir otra tabla de multiplicar?")