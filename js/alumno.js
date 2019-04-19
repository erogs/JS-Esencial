var obj = [
    {
        codigo: "001",
        nombre: "Alumno 001",
        nota: 15,
    },{
        codigo: "002",
        nombre: "Alumno 002",
        nota: 10,
    },{
        codigo: "003",
        nombre: "Alumno 003",
        nota: 13,
    },{
        codigo: "004",
        nombre: "Alumno 004",
        nota: 19,
    },{
        codigo: "005",
        nombre: "Alumno 005",
        nota: 14,
    },{
        codigo: "006",
        nombre: "Alumno 006",
        nota: 15,
    },{
        codigo: "007",
        nombre: "Alumno 007",
        nota: 17,
    },{
        codigo: "008",
        nombre: "Alumno 008",
        nota: 11,
    },{
        codigo: "009",
        nombre: "Alumno 009",
        nota: 14,
    },{
        codigo: "010",
        nombre: "Alumno 010",
        nota: 16,
    }
];

function mostrar(){
    var text = "";
    for(i = 0; i < obj.length; i++){
        text = text + "<div><p>Codigo: " + obj[i].codigo + "</p>";
        text = text + "<p>Nombre: " + obj[i].nombre + "</p>";
        text = text + "<p>Nota: " + obj[i].nota + "</p>";
        text = text + "<p>------------------------------ </p>";
    }
    document.getElementById("response").innerHTML=text;
}
function promedio(){
    var text = ""
    var sum = 0
    for(i = 0; i < obj.length; i++){
        sum = sum + obj[i].nota
    }
    text = "<p>La nota promedio es: "+sum/obj.length+"</p>"
    document.getElementById("response").innerHTML=text
}
function mayor(){
    var text = ""
    var may = 0
    for(i = 0; i < obj.length; i++){
        if(may < obj[i].nota){
            may = obj[i].nota
        }
        
    }
    text = "<p>La nota mayor es: "+ may +"</p>"
    document.getElementById("response").innerHTML=text
}
function menor(){
    var text = ""
    var men = 20
    for(i = 0; i < obj.length; i++){
        if(men > obj[i].nota){
            men = obj[i].nota
        }
        
    }
    text = "<p>La nota menor es: "+ men +"</p>"
    document.getElementById("response").innerHTML=text
}