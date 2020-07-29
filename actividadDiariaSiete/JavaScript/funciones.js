let bd;


const abrirPestaña = (evt, idPanel ) => {

    let i, panel, button
    
    panel = document.getElementsByClassName("panel")
    for (i = 0; i < panel.length; i++) {
        panel[i].style.display = "none"

    }
    button = document.getElementsByClassName("button")
    for(i = 0; i < button.length; i++){
        button[i].className = button[i].className.replace("activo", "")
    }
    document.getElementById(idPanel).style.display = "block"
    evt.currentTarget.className += "activo"
    
    
}

document.querySelector('#boton').addEventListener('click', fetchJSONFile())
function fetchJSONFile(path, vuelta) {
    var peticion = new XMLHttpRequest();
    peticion.onreadystatechange = function() {
        if (peticion.readyState === 4) {
            if (peticion.status === 200) {
                var data = JSON.parse(peticion.responseText);
                if (vuelta) vuelta(data);
            }
        }
    };
    peticion.open('GET', path);
    peticion.send(); 
}
  
  //primero preguntar si la funcion principal es esta o la de arriba (hoisting)
  fetchJSONFile('../datos/data.json', function(data){
    
    bd=data.trabajos
    console.log (data) 
    bd.map(datos=>document.getElementById("proyectos").insertRow(-1).innerHTML = `<td>${datos.nombre}</td><td>${datos.lenguaje}</td><td>${datos.monto} dolares</td>`)
  });

 



