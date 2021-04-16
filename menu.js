 const botonClick = () => 
{
  const dias = document.querySelector('#dias').value;
  const menus = document.querySelector('#menus').value;
  let resultado = '';
  let PlatoV = '';
  let PlatoE = '';
  let PlatoC = '' ;
  
    switch (dias)
    {
      case 'lunes':
        
          PlatoE = 'Churrasco con ensalada y papas al gusto.';
          PlatoV = 'Coliflor Agridulce.';
          PlatoC = 'Arroz con lentejas, ensalada verde y carne asada.';
          
        switch(menus)
        {
          case 'ejecutivo':
            resultado = `El plato Ejectutivo del dia es: <br> ${PlatoE}`;
          break;
            
          case 'vegetariano':
            resultado = `El plato Vegetariano del dia es: <br> ${PlatoV}`;
          break;

          case 'corriente':
            resultado = `El plato Corriente del dia es: <br> ${PlatoC}`;
          break

          case 'todos':
            resultado = `El menu del dia Lunes es: <br> Plato Ejecutivo: ${PlatoE} <br> Plato Vegetariano: ${PlatoV} <br> Plato Corriente: ${PlatoC}`;
          break;
        }
      break;
      
      case 'martes':
          PlatoE = 'Mojarra Asada con ensalada y papas al gusto.';
          PlatoV = 'Risotto de amaranto y hongos.';
          PlatoC = 'Arroz con garbanzo, ensalada roja y pollo sudado.';
          
        switch(menus)
        {
          case 'ejecutivo':
            resultado = `El plato Ejectutivo del dia es: <br> ${PlatoE}`;
          break;
            
          case 'vegetariano':
            resultado = `El plato Vegetariano del dia es: <br> ${PlatoV}`;
          break;

          case 'corriente':
            resultado = `El plato Corriente del dia es: <br> ${PlatoC}`;
          break

          case 'todos':
            resultado = `El menu del dia Martes es: <br> Plato Ejecutivo: ${PlatoE} <br> Plato Vegetariano: ${PlatoV} <br> Plato Corriente: ${PlatoC}`;
          break;
        }
      break;
        
      case 'miercoles':
          PlatoE = 'Agiaco con pocion de arroz y aguacate.';
          PlatoV = 'Tostada de frijoles con oregano y jitomate';
          PlatoC = 'Arroz con frijol, ensalada verde y albondigas en salsa.';
          
        switch(menus)
        {
          case 'ejecutivo':
            resultado = `El plato Ejectutivo del dia es: <br> ${PlatoE}`;
          break;
            
          case 'vegetariano':
            resultado = `El plato Vegetariano del dia es: <br> ${PlatoV}`;
          break;

          case 'corriente':
            resultado = `El plato Corriente del dia es: <br> ${PlatoC}`;
          break

          case 'todos':
            resultado = `El menu del dia Miercoles es: <br> Plato Ejecutivo: ${PlatoE} <br> Plato Vegetariano: ${PlatoV} <br> Plato Corriente: ${PlatoC}`;
          break;
        }
      break;
        
      case 'jueves':
          PlatoE = 'Pechuga de pollo Gratinada con ensalada y papas al gusto.';
          PlatoV = 'Tortillas de lentejas en salsa verde';
          PlatoC = 'Arroz con spaghetti de pollo, ensalada verde y papas a la francesa.';
       
        switch(menus)
        {
          case 'ejecutivo':
            resultado = `El plato Ejectutivo del dia es: <br> ${PlatoE}`;
          break;
            
          case 'vegetariano':
            resultado = `El plato Vegetariano del dia es: <br> ${PlatoV}`;
          break;

          case 'corriente':
            resultado = `El plato Corriente del dia es: <br> ${PlatoC}`;
          break

          case 'todos':
            resultado = `El menu del dia Jueves es: <br> Plato Ejecutivo: ${PlatoE} <br> Plato Vegetariano: ${PlatoV} <br> Plato Corriente: ${PlatoC}`;
          break;
        }
      break;
        
      case 'viernes':
          PlatoE = 'Bistec a caballo con ensalada y papas al gusto.';
          PlatoV = 'Chile poblano relleno de quinoa';
          PlatoC = 'Arroz con ensalada fria, chuleta de cerdo y papas a la francesa.';
       
        switch(menus)
        {
          case 'ejecutivo':
            resultado = `El plato Ejectutivo del dia es: <br> ${PlatoE}`;
          break;
            
          case 'vegetariano':
            resultado = `El plato Vegetariano del dia es: <br> ${PlatoV}`;
          break;

          case 'corriente':
            resultado = `El plato Corriente del dia es: <br> ${PlatoC}`;
          break

          case 'todos':
            resultado = `El menu del dia Viernes es: <br> Plato Ejecutivo: ${PlatoE} <br> Plato Vegetariano: ${PlatoV} <br> Plato Corriente: ${PlatoC}`;
          break;
        }
      break;
        
      case 'sabado':
          PlatoE = 'Costillas de cerdo en BBQ con ensalada y papas al gusto.';
          PlatoV = 'Tamales Veganos con Champiñones al Pibil.';
          PlatoC = 'Arroz con lentejas, carne en Bistec, platano maduro y ensalada verde.';
       
        switch(menus)
        {
          case 'ejecutivo':
            resultado = `El plato Ejectutivo del dia es: <br> ${PlatoE}`;
          break;
            
          case 'vegetariano':
            resultado = `El plato Vegetariano del dia es: <br> ${PlatoV}`;
          break;

          case 'corriente':
            resultado = `El plato Corriente del dia es: <br> ${PlatoC}`;
          break

          case 'todos':
            resultado = `El menu del dia Sabado es: <br> Plato Ejecutivo: ${PlatoE} <br> Plato Vegetariano: ${PlatoV} <br> Plato Corriente: ${PlatoC}`;
          break;
        }
      break;
        
      case 'domingo':
          PlatoE = 'Bandeja Paisa.';
          PlatoV = 'Espagueti de Calabacita a la Mexicana.';
          PlatoC = 'Arroz con frijol, ensalada roja, patacon y pollo sudado.';
       
        switch(menus)
        {
          case 'ejecutivo':
            resultado = `El plato Ejectutivo del dia es: <br> ${PlatoE}`;
          break;
            
          case 'vegetariano':
            resultado = `El plato Vegetariano del dia es: <br> ${PlatoV}`;
          break;

          case 'corriente':
            resultado = `El plato Corriente del dia es: <br> ${PlatoC}`;
          break

          case 'todos':
            resultado = `El menu del dia Domingo es: <br> Plato Ejecutivo: ${PlatoE} <br> Plato Vegetariano: ${PlatoV} <br> Plato Corriente: ${PlatoC}`;
          break;
        }
      break;
   }
   
  //Manejo de errores

  if (dias == 0)
    {
      resultado = 'Favor elegir el dia.'
    }
  
  if (menus == 0)
    {
      resultado = 'Favor elegir el menu.'
    }
  
  if (dias == 0 && menus == 0)
    {
      resultado = 'Favor elegir dia y menu.';
    }  
  return resultado;
}

document.querySelector('.boton').addEventListener('click', event => {
  const resultado = botonClick();
  const elemento = document.querySelector('.resultado');

  if(resultado !== '') {  
    elemento.classList.remove('oculto');
    elemento.innerHTML = resultado;
    elemento.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    });
  } else {
    elemento.classList.add('oculto');
  }
});