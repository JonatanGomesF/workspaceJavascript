const data = new Date('1978-04-21 00:00:00');
const diaSemana = data.getDay();
const diaSemanaTexto = getDiaSemanaTexto();


function getDiaSemanaTexto (diaSemana) {
    let diaSemanaTexto;
    
    switch (diaSemana) {
    case 0:
        diaSemanaTexto = 'domingo';
            return diaSemanaTexto;
    case 1:
        diaSemanaTexto = 'segunda';
            return diaSemanaTexto;
    case 2:
        diaSemanaTexto = 'terça';
            return diaSemanaTexto;
    case 3:
        diaSemanaTexto = 'quarta';
             return diaSemanaTexto;
    case 4:
        diaSemanaTexto = 'quinta';
             return diaSemanaTexto;
    case 5:
        diaSemanaTexto = 'sexta';
            return diaSemanaTexto;
    case 6:
        diaSemanaTexto = 'sabado';
            return diaSemanaTexto;
    default:
        diaSemanaTexto = '';
        };
        
}



console.log(diaSemana, diaSemanaTexto);




















//método utilizando BREAK


// switch (diaSemana) {
// case 0:
//     diaSemanaTexto = 'domingo';
//     break;
// case 1:
//     diaSemanaTexto = 'segunda';
//     break;
// case 2:
//     diaSemanaTexto = 'terça';
//     break;
// case 3:
//      diaSemanaTexto = 'quarta';
//     break;
// case 4:
//      diaSemanaTexto = 'quinta';
//     break;
// case 5:
//     diaSemanaTexto = 'sexta';
//     break;
// case 6:
//     diaSemanaTexto = 'sabado';
//     break;
// default:
//     diaSemanaTexto = '';
// }
//            console.log(diaSemana, diaSemanaTexto);   






// if (diaSemana === 0) { 
//     diaSemanaTexto = 'domingo';
// } else if (diaSemana === 1) {  
//     diaSemanaTexto = 'segunda';
// } if (diaSemana === 2) { 
//     diaSemanaTexto = 'terça';
// } else if (diaSemana === 3) {
//     diaSemanaTexto = 'quarta';
//     } if (diaSemana === 4) { 
//     diaSemanaTexto = 'quinta';
// } else if (diaSemana === 5) {
//     diaSemanaTexto = 'sexta';
//     } if (diaSemana === 6) { 
//         diaSemanaTexto = 'sabado';
// } 

// console.log(diaSemana);