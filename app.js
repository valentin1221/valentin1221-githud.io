//MENU LATERAL
var menu_visible =false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//si esta oculto
         menu.style.display ="block";
         menu_visible = true;
    }
    else{
         menu.style.display ="none";
         menu_visible = false;
    }
}
//oculto el menu una vez que selecciono la opción
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links [x].onclick =function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

//animaciones
function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e"
        id_barra.appendChild(div);
    }
}
//seleccionos las barras generales
let html = document.getElementById("html");
crearBarra(html);
let javascipt = document.getElementById("javascript");
crearBarra(javascipt);
let wordpress = document.getElementById("wordpress");
crearBarra(wordpress);
let photoshop = document.getElementById("photoshop");
crearBarra(photoshop);
let php = document.getElementById("php");
crearBarra(php);
let ilustrator = document.getElementById("ilustrator");
crearBarra(ilustrator);

//llenar barras
let contadores = [-1,-1,-1,-1,-1,-1];
let entro = false

//función que aplica la animacion
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 15, 0, intervalHtml);
        },100);
        const intervalJavascript = setInterval(function(){
            pintarBarra(javascipt, 14, 1, intervalJavascript);
        },100);
        const intervalWordpass = setInterval(function(){
            pintarBarra(wordpress, 14, 2, intervalWordpass);
        },100);
        const intervalPhotoshop = setInterval(function(){
            pintarBarra(photoshop, 16, 3, intervalPhotoshop);
        },100);
        const intervalPhp = setInterval(function(){
            pintarBarra(php, 15, 4, intervalPhp);
        },100);
        const intervalIlustrator = setInterval(function(){
            pintarBarra(ilustrator, 16, 5, intervalIlustrator);
        },100);
    }
}
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#f2e4f9";
    }else{
        clearInterval(interval)
    }
}
window.onscroll = function(){
    efectoHabilidades();
}