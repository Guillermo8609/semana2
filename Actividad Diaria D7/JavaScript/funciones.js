
/* function isInPage(panel) {
    return (panel === document.body) ? false : document.body.contains(panel);
  } */

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



