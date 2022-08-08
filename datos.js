//
//  datos, luego vendran del server, en formato JSON
//
var array_login = [
    {
        usuario: "JuanPabloLogioco",
        comtrasenia : "contraseña"
    }

]
var array_titular = [
    {
        nombre : "Juan Pablo Logioco", 
        titulo : "Programador Full Stack Developer Jr." 
    } 
];

var array_estudios = [
    {
        anio : "2022",
        institucion : "Argentina Programa",
        descripcion : "#YoProgramo - Full Stack Developer Jr."
    },
    {
        anio : "2022",
        institucion : "Egg Cooperation",
        descripcion : "Programcion desde cero - Aprendizaje en cooperación - Fundamentos, Lógica algorítmica, lógica matemática"
    },
    {
        anio : "2021",
        institucion : "Argentina Programa",
        descripcion : "#SeProgramar - Fundamentos, Programación imperativa, Programación con Objetos"
    },
    {
        anio : "1994",
        institucion : "Fundación Tecnológica Argentina",
        descripcion : "Programación en C"
    }
];

var array_experiencia = [
    {
        desde : "1998",
        hasta : "2015",
        empresa : "Morvillo",
        descripcion : "Mantenimiento electrónica gráfica - Automatizaciones con PLC"
    },
    {
        desde : "1992",
        hasta : "2018",
        empresa : "Komafisa",
        descripcion : "Automatización de guillotinas CNC - Microcontroladores, C y ASM"
    }
];

var array_proyectos = [
    {
        anio : "2002",
        descripcion : "Gloria 1 - Programador CNC para guillotinas - PIC18F422 - lenguaje C y ASM"
    }
];

console.log("datos.JS activo");

include("Main.js");
//
////////////////////////////////////////////////////////////////////
//
function include(archivo)   // incluye otros archivos .js
{
    var oHead = document.getElementsByTagName('head')[0];
    var oScript = document.createElement('script');
    oScript.type = 'text/javascript';
    oScript.charset = 'utf-8';
    oScript.src = archivo;
    oHead.appendChild(oScript);        
};

////////////////////////////////////////////////////////////////////