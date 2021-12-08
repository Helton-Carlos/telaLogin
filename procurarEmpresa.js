(function () {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((response) => response.json())
    .then((json) => {
      for (let i = 0; i < json.length; i++) {
        document.querySelector("#id").innerHTML = json[i].id;
        document.querySelector("#email").innerHTML = json[i].email;
        console.log( json[i].id);
      }
    });
})();
