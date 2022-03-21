(function () {
  
  document.querySelector(".login").addEventListener("click", function () {
    let email = document.querySelector("#email").value;
    let senha = document.querySelector("#senha").value;

    if (email === "" || senha === "") {
      alert("Preencha corretamente os campos...");
    } else {
      if (email && senha) {
        fetch("http://localhost:3000/api/usuarios")
          .then((r) => r.json())
          .then((usuarios) => {
            const login = usuarios.result;
            for (let i = 0; i < login.length; i++) {
              if (login[i].email === email && login[i].senha === senha) {
                let obj = {
                  email: email,
                  token: "sedsad978404sadd23xmnaz",
                };
                localStorage.setItem("obj", JSON.stringify(obj));
                window.location.href = "index.html";
              } else {
                alert("Usuário ou senha não existente.");
              }
            }
          });
      } 
    }
  });
})();
