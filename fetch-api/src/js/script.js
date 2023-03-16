document.querySelector("#pesquisar").addEventListener("click", pesquisar);

const showData = (resultado) => {
  for (const campo in resultado) {
    if (document.querySelector("#" + campo)) {
      document.querySelector("#" + campo).value = resultado[campo];
    }
  }
};

function pesquisar() {
  const cep = document.querySelector("#cep");

  let search = cep.value.replace("-", "");
  const options = {
    method: "GET",
    mode: "cors",
    cache: "default",
  };

  fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    .then((response) => {
      response.json().then((data) => showData(data));
    })
    .catch((e) => {
      console.log("Opa ! Deu erro" + e);
    });
}
