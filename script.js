const inputSim = document.getElementById("inputSim");
const inputNao = document.getElementById("inputNao");
const entrevista = document.getElementById("entrevista");

inputSim.addEventListener("change", function() {
  if (this.checked) {
    entrevista.style.display = "block";
  } else {
    entrevista.style.display = "none";
  }
});

inputNao.addEventListener("change", function() {
  if (this.checked) {
    entrevista.style.display = "none";
  } else {
    entrevista.style.display = "block";
  }
});