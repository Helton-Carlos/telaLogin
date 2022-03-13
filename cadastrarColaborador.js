document.querySelector(".salvar").addEventListener("click", function () {
  let nome = document.querySelector("#nome").value;
  let email = document.querySelector("#email").value;
  let senha = document.querySelector("#senha").value;
  let confirmar = document.querySelector("#confirmar").value;

  if (nome === "" || email === "" || senha === "" || confirmar === "") {
    alert("Preencha todos os campos!");
  }else if (senha !== confirmar){
    alert("Senha e confirmação de senha não são iguais.");
  } else{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
  }
});

document
  .querySelector(".cadastro-login")
  .addEventListener("click", function () {
    window.history.back();
  });
