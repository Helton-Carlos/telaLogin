document.querySelector("#bntEnviar").addEventListener("click", (e) => {
  let pedido = document.querySelector("#pedido").value;
  let nf = document.querySelector("#nota").value;
  let empresa = document.querySelector("#empresa").value;
  let status = document.querySelector("#status").value;
  if (!empresa || !nota || !status || !pedido) {
    alert("Preencha todos os campos*");
  } else {
    fetch("http://localhost:3000/api/cadastrar-notas", {
      method: 'POST',
       body: JSON.stringify({
        pedido,
        nf,
        empresa,
        status
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => response.json())
    .then((json) => json);
    window.location.href = "index.html";
  }
});

function goBack() {
  window.location.href = "index.html";
}
function carregarPagina() {
  var objLocal =  JSON.parse(localStorage.getItem('obj'))
  if(objLocal=== null){
      document.location.href ="login.html"
    }
}
