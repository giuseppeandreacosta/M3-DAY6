/* funzione loader caricamento pagina */
function loader(){            
  document.querySelector('.loader-container').classList.add('fade-out');
}
/* setto l'intervallo di tempo del caricamento quando scompare */
function fadeOut(){             
  setInterval(loader, 6400);
}
/* quando si carica scompare */
window.onload = fadeOut();
    
    function enable() {
        let check = document.querySelector("#check-boxed");
        let buttonNextTo = document.querySelector("#buttonNextTo");
        if (check.checked) {
          buttonNextTo.removeAttribute("enabled");
        } else {
          buttonNextTo.disabled = "false";
        }
      }
    enable();

    
  