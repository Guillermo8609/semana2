


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

let bd;

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
    peticion.open('GET', path, true);
    peticion.send(); 
}
  
  //primero preguntar si la funcion principal es esta o la de arriba (hoisting)
  fetchJSONFile('../datosDos/data.json', function(data){
    
    bd=data.trabajos
    /* console.log (data)  */
    bd.map(datos=>document.getElementById("proyectos").insertRow(-1).innerHTML = `<td>${datos.nombre}</td><td>${datos.lenguaje}</td><td>${datos.monto} dolares</td>`)
  });
 
  function meter(event){
    event.preventDefault()
    añadirUsuario={proyecto:document.getElementById('proyecto').value,lenguajes:document.getElementById('lenguajes').value,montos:document.getElementById('montos').value}
    
    document.getElementById("proyectos").insertRow(-1).innerHTML = `<td>${añadirUsuario.proyecto}</td><td>${añadirUsuario.lenguajes}</td><td>${añadirUsuario.montos} dolares</td>`


    document.getElementById("proyecto").value=""
    document.getElementById("lenguajes").value=""
    document.getElementById("montos").value=""
  
  } 