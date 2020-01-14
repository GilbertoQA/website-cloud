let again
let contador
let puntos= 0
do{
    alert('Bienvenido a Preguntados! Este juego consistirá en que tendrás que responder dos preguntas correctas de cada una de las 5 categorías que tiene este juego para ganar.')
    alert('Las preguntas tienen puntos, y mientras más puntos tengan, más difícil será la pregunta.')
    alert('Cada categoría es más difícil que la anterior, y para poder pasar de categoría en categoría, tendrás que responder dos preguntas correctamente de esa categoría.')
    alert('Ganas si conestatas 10 preguntas correctas en total, en cada categoría tendrás tres oportunidades de fallar, si fallas una cuarta vez, habrás perdido.')  
    let name = prompt('Antes de iniciar, ¿Cómo te llamas?')
    alert(name+', la primera categoría es Entretenimiento')
    contador = 3
    let preguntasEntretenimiento = [
        '¿Cómo se llama la cuarta película de Harry Potter? El cáliz de fuego, el misterio del príncipe, la piedra filosofal o la orden del Fénix (Responde 1, 2, 3 o 4)',
        '¿Cómo se llama el personaje de la mejor amiga de Mia Thermopolis en la película "El Diario de la Princesa"? Lilly, Emma, Anna, Bonny (Responde 1,2,3 o 4)',
        '¿Quién es la artista más joven en ganar un premio Country?  Dolly Parton, Miley Cyrus, Taylor Swift, Carrie Underwood (Responde 1, 2, 3, 4)',
        '¿Quién es el creador del talent show "The X Factor"? Louis Walsh, Simon Cowell, Sharon Osbourne, Nicole Scherzinger (Responde 1, 2, 3, 4)',
        '¿En qué año se estrenó la película de Disney "Pinocho"? 1940, 1944, 1930, 1960 (Responde 1, 2, 3, 4)',
     ];
   let opcion1=prompt("elige una pregunta: Para 100 puntos elige 1, para 200 elige 2, para 300 elige 3, para 400 elige 4, para 500 elige 5");
   if(opcion1 ==! '1' || opcion1 ==! '2' || opcion1 ==! '3' || opcion1 ==! '4' || opcion1 ==! '5'){
        contador = contador-1
        alert('Opción no válida, te quedan '+contador+' oportunidades restantes')
    } else {
        alert(preguntasEntretenimiento[opcion1-1]);
        let respuestasEntretenimiento = ['1', '1', '3', '3', '1'];
    }
    alert(name+', la segunda categoría es Arte')
    contador = 3
    let preguntasArte = [
        '¿Qué color consigues mezclando todos los colores del CMYK? Negro, blanco, cafe, gris (Responde 1,2,3 o 4)',
        '¿Cuál compositor de música clásica era zurdo? Beethoven, Mozart, Vivaldi, Chaikovski (Responde 1,2,3 o 4)',
        '¿Dónde se encontraba el cuadro "El Grito"?  Italia, Francia, España, Mexico (Responde 1,2,3 o 4)',
        '¿Cuál de las siguientes no pertenece a las 7 maravillas del mundo antiguo? Los Jardines Colgantes de Babilonia, el Templo de Artemisa en Éfeso, la Estatua de Zeus en Olimpia, El Coliseo Romano (Responde 1,2,3 o 4)',
        '¿A partir de cuántas sílabas se considera verso de arte mayor? 7, 8, 9, 1 (Responde 1,2,3 o 4)',
    ];
    let opcion2=prompt("elige una pregunta: Para 100 puntos elige 1, para 200 elige 2, para 300 elige 3, para 400 elige 4, para 500 elige 5");
    if (opcion2 ==! '1' || opcion2 ==! '2' || opcion2 ==! '3' || opcion2 ==! '4' || opcion2 ==! '5'){
        contador = contador-1
        alert('Opción no válida, te quedan '+contador+' oportunidades restantes')
    } else {
    alert(preguntasArte[opcion2-1]);
    let respuestasArte = ['1', '1', '2', '3', '3'];
    }
    alert(name+', la tercera categoría es Ciencias')
    contador = 3
    let preguntasCiencia = [
        '¿Dónde tienen el sentido del gusto las moscas? En las patas, En la lengua, En la nariz, En los ojos (Responde 1,2,3 o 4)',
        '¿De qué país proviene del pez dorado? Australia, China, Japón, Brazil (Responde 1,2,3 o 4)',
        '¿Cómo se llama la arteria principal del cuerpo humano? Arteria coronaria izquierda,  Arteria coronaria derecha, Arteria circunfleja, Aorta (Responde 1,2,3 o 4)',
        '¿Qué parte del cuerpo tiene 27 huesos y 35 músculos? Pie, Cara, Mano, Rodilla (Responde 1,2,3 o 4)',
        '¿Cuántas células de esperma fabrican los testículos de un hombre al día? 10 millones, 100 mil, 10 mil, mil(Responde 1,2,3 o 4)',
   ];
   let opcion3=prompt("elige una pregunta: Para 100 puntos elige 1, para 200 elige 2, para 300 elige 3, para 400 elige 4, para 500 elige 5");
   if(opcion3 ==! '1' || opcion3 ==! '2' || opcion3 ==! '3' || opcion3 ==! '4' || opcion3 ==! '5'){
        contador = contador-1
        alert('Opción no válida, te quedan '+contador+' oportunidades restantes')
    } else {
     alert(preguntasCiencia[opcion3-1]);
     let respuestasCiencias = ['1', '2', '4', '3', '1'];
    }
    alert(name+', la cuarta categoría es Geografía')
    contador = 3
    let preguntasGeografia = [
        '¿Cuántas estrellas tiene la bandera de China? 4, 5, 6, 7 (Responde 1,2,3 o 4)',
        '¿Cuál es la capital de Nueva Zelanda? Auckland, Queenstown, Wellington, Chirstchruch (Responde 1,2,3 o 4)',
        '¿Cómo se le conoce a los habitantes de Málaga? Ramblos, Malaguenses, Malágonos, Boquerones (Responde 1,2,3 o 4)',
        '¿Cómo se les llama a los habitantes de Huelva?  Españoles, Huelvaenses, Huelvanos, Onubenses (Responde 1,2,3 o 4)',
        '¿Cuál es el sexto país más grande el mundo?  Estados Unidos, China, Australia, India (Responde 1,2,3 o 4)',
   ];
   let opcion4=prompt("elige una pregunta: Para 100 puntos elige 1, para 200 elige 2, para 300 elige 3, para 400 elige 4, para 500 elige 5");
   if(opcion4 ==! '1' || opcion4 ==! '2' || opcion4 ==! '3' || opcion4 ==! '4' || opcion4 ==! '5'){
        contador = contador-1
        alert('Opción no válida, te quedan '+contador+' oportunidades restantes')
    } else {
        alert(preguntasGeografia[opcion4-1]);
        let respuestasGeografia = ['2', '3', '4', '4', '3'];
    }
    alert(name+', la quinta y última categoría es Historia')
    contador = 3
    let preguntasHistoria = [
        '¿Cuántos mandamientos hay en el cristianismo? 10, 22, 540, 5 (Responde 1,2,3 o 4)',
        '¿Quién gobernó Francia desde 1799 a 1815? Jean Jacques Régis de Cambacérès,  Napoleón Bonaparte, Jerónimo Bonaparte, François Arago (Responde 1,2,3 o 4)',
        '¿Con qué hombre estuvo casada Cleopatra? Marco Antonio, Ptolomeo XIII, Ptolomeo XIV, Todas son correctas (Responde 1,2,3 o 4)',
        '¿Qué país fue dirigido por Stalin? Unión Soviética, Rusia, Ucrania, República Checa (Responde 1,2,3 o 4)',
        '¿En qué país nació el protestantismo?  China, India, Reino Unido, Alemania (Responde 1,2,3 o 4)',
   ];
   let opcion5=prompt("elige una pregunta: Para 100 puntos elige 1, para 200 elige 2, para 300 elige 3, para 400 elige 4, para 500 elige 5");
   if(opcion5 ==! '1' || opcion5 ==! '2' || opcion5 ==! '3' || opcion5 ==! '4' || opcion5 ==! '5'){
        contador = contador-1
        alert('Opción no válida, te quedan '+contador+' oportunidades restantes')
    }   else {
        alert(preguntasHistoria[opcion5-1]);
        let respuestasHistoria = ['1', '2', '4', '1', '3'];
    }
    again = confirm('¿Quiéres volver a jugar?')
}while (again) 
alert ('¡Gracias por jugar!')