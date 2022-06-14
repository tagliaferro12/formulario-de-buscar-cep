
const cep = document.querySelector("#cep")


const showData =(result)=>{
    for(const campo in result){
        if(document.querySelector("#"+campo))
          document.querySelector("#"+campo).value = result[campo];
    }
}



cep.addEventListener("blur", (e)=>{
    let search = cep.value.replace("=", "")
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }



    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    .then(response =>{response.json()
      .then(data => showData(data))
     })
    .catch(e => console.log('Deu Erro: '+ e,message))

})










//'use strict';

//const pesquisarCep = () => {
  //  const cep = document.getElementById('cep').value;
  //  const url = `http://viacep.com.br/ws/${cep}79215000/json/`
  //  fetch(url).then(console.log);
//}
//const options = {
  //  method: 'GET',
  //  mode: 'cors',
 //   cache: 'default'
//}

//document.getElementById('cep')
      //  .addEventListener('focusout', pesquisarCep);