(function () {
  document.querySelector(".login").addEventListener("click", function () {
    let email = document.querySelector("#email").value;
    let senha = document.querySelector("#senha").value;
    console.log(email + senha);
    if(email === "" || senha==="")
    {
        alert("Preencha corretamente os campos...")
    }else{
        if(email === "adm" || senha==="123456"){
            window.location.href="index.html"
        }else{
            alert("Esse usuário não existe")
        }
    }
  });
})();




