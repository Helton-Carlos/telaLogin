(function () {
  document.querySelector("#bntEnviar").addEventListener("click", (e) => {
    let empresa = document.querySelector("#empresa").value;
    let nota = document.querySelector("#nota").value;
    let status = document.querySelector("#status").value;
    let id = 1;
    if (!empresa || !nota || !status) {
      alert("Preencha todos os campos*");
    } else {
      function getTabela(local) {
        const row = document.createElement("tr");
        row.innerHTML= `
        <td>${local.id}</td>
        <td>${local.nota}</td>
        <td>${local.empresa}</td>
        <td>${local.status}</td>
        `
        document.querySelector("#tabela").appendChild(row)
      }
      const objEmpresa = { empresa, nota, status, id };
      const local = localStorage.local ? JSON.parse(localStorage.local) : [];
      local.push(objEmpresa);
      localStorage.local = JSON.stringify(local);
      document.querySelector("#empresa").value = "";
      document.querySelector("#nota").value = "";
      document.querySelector("#status").value = "";
      getTabela(local)
      window.location.href="index.html";
    }
  });
})();
