(function () {
  document.querySelector(".login").addEventListener("click", function () {
    let usuario = document.querySelector("#usuario").value;
    let password = document.querySelector("#password").value;
    console.log(usuario + password);
    if(usuario === "" || password==="")
    {
        alert("Preencha corretamente os campos...")
    }else{
        if(usuario === "adm" || password==="123456"){
            window.location.href="index.html"
        }else{
            alert("Esse usuário não existe")
        }
    }
  });
})();




