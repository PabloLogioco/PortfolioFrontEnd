//
console.log("Main.JS activo");

LeerDatosTitular();

LeerDatosExperiencia();

LeerDatosEstudios();

LeerDatosProyectos();

/////////////////////////////////////////////////////////////////
//
//                  FUNCIONES
//
/////////////////////////////////////////////////////////////////

function LeerDatosEstudios(){

    let datos_estudios = document.querySelector('#datos_estudios');
    datos_estudios.innerHTML = ''; /// pone en blanco, cero

    for(let item of array_estudios) { // recorre array
        datos_estudios.innerHTML += `  
        <tr>
            <td>${item.anio}</td>
            <td>${item.institucion}</td>
            <td>${item.descripcion}</td>
        </tr> ` /// comillas especiales, ALT 96
    }
}

/////////////////////////////////////////////////////////////////

function LeerDatosTitular(){
    
    let datos_titular = document.querySelector('#titular');
    datos_titular.innerHTML = ''; /// pone en blanco, cero

    for(let item of array_titular) { // recorre array
        datos_titular.innerHTML += `  
        <h6>${item.nombre}</h6>
        <h6>${item.titulo}</h6>  ` /// comillas especiales, ALT 96
    }
}

//////////////////////////////////////////////////////////////////////////

function LeerDatosProyectos(){

    let datos_proyectos = document.querySelector('#datos_proyectos');
    datos_proyectos.innerHTML = ''; /// pone en blanco, cero

    for(let item of array_proyectos) { // recorre array
        datos_proyectos.innerHTML += `  
        <tr>
            <td>${item.anio}</td>
            <td>${item.descripcion}</td>
            </tr>  ` /// comillas especiales, ALT 96
    }
}

//////////////////////////////////////////////////////////////////////////
    
function LeerDatosExperiencia(){

    let datos_experiencia = document.querySelector('#datos_experiencia');
    datos_experiencia.innerHTML = ''; /// pone en blanco, cero

    for(let item of array_experiencia) { // recorre array
        datos_experiencia.innerHTML += `  
            <tr>
                <td>${item.desde}</td>
                <td>${item.hasta}</td>
                <td>${item.empresa}</td>
                <td>${item.descripcion}</td>
            </tr>  ` /// comillas especiales, ALT 96
    }
}

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
