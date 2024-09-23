let menuVisible = false;

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("typescriptjavascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("angular");
        habilidades[3].classList.add("asp");
        habilidades[4].classList.add("java");
        habilidades[5].classList.add("python");
        habilidades[6].classList.add("gitgithub");
        habilidades[7].classList.add("sql");
        habilidades[8].classList.add("php");
        habilidades[9].classList.add("comunicacion");
        habilidades[10].classList.add("trabajoequipo");
        habilidades[11].classList.add("creatividad");
        habilidades[12].classList.add("dedicacion");
        habilidades[13].classList.add("puntualidad");
        habilidades[14].classList.add("tratocliente");
        habilidades[15].classList.add("adaptacion");
        habilidades[16].classList.add("metodologia");
        habilidades[17].classList.add("trellofigma");
    }
}

window.onscroll = function(){
    efectoHabilidades();
} 