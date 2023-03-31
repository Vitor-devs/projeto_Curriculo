function entrevistar() {
    var entrevista = document.getElementById("entrevista");
    var recrutador=document.getElementById("recrutador")
    if (recrutador.checked) {
      entrevista.style.display = "block";
      window.scrollTo(0, 0);
    } else {
      entrevista.style.display = "none";
    }
  }
  
  document.getElementById("nao-responder").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("entrevista").style.display = "none";


  });


window.alert("oi meu lindo")