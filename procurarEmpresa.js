document.querySelector("#bntEnviar").addEventListener("click", (e) => {
  let pedido = document.querySelector("#pedido").value;
  let empresa = document.querySelector("#empresa").value;
  let nota = document.querySelector("#nota").value;
  let status = document.querySelector("#status").value;
  if (!empresa || !nota || !status || !pedido) {
    alert("Preencha todos os campos*");
  } else {
    const objEmpresa = { empresa, nota, status, pedido };
    const local = localStorage.local ? JSON.parse(localStorage.local) : [];
    local.push(objEmpresa);
    localStorage.local = JSON.stringify(local);
    document.querySelector("#empresa").value = "";
    document.querySelector("#nota").value = "";
    document.querySelector("#status").value = "";
    window.location.href = "index.html";
  }
});

function goBack() {
  window.history.back();
}
