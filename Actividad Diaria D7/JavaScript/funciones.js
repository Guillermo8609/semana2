


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

function  fetchJSONFile (){

   let conexion = new XMLHttpRequest()
   console.log(conexion)
   conexion.open('GET', 'file:///Actividad', false)
   conexion.send(null);
if (conexion.status == 200)
  dump(conexion.responseText);
    /* conexion.onreadystatechange = function(){
        if (conexion.readyState === 4) {
            if(conexion.status === 200) {
                let datos = JSON.parse(conexion.responseText)
                if(regreso) regreso(datos)

            }
        }

     }
     conexion.open('GET', via)
     conexion.send()
      */
    }
    fetchJSONFile()
   /*  fetchJSONFile(`../datos`, function(datos){
        db=datos.trabajos
        db.map(datos => document.getElementById("proyectos").insertRow(-1).innerHTML = `<td>${datos.nombre}</td><td>${datos.lenguaje}</td><td>${datos.monto} dolares</td>`)

    }) */




