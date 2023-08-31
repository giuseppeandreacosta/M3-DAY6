// Dichiaro la funzione che convalida il checkbox al button della pagina iniziale.


window.onload = function() {
    
    function enable() {
        let check = document.querySelector("#check-boxed");
        let buttonNextTo = document.querySelector("#buttonNextTo");
        if (check.checked) {
          buttonNextTo.removeAttribute("disabled");
        } else {
          buttonNextTo.disabled = "true";
        }
      }
    enable();
  };