const baseURL = 'https://crudcrud.com/api'

// obtener unicornios
function unicornObtain(){ 
  fetch( `${baseURL}/c7fc2c5c4a99496bb8f0da17f1f759ee/unicorns` )
  .then(response => response.json())
  .then(data => console.log(data)

    // el bloque de abajo es para presentarlo en el dom esta desordenado -partial
    /* {
    const element = document.querySelector('#unicornData')
    element.innerHTML = JSON.stringify(data);
  } */
  )
  .catch(error => console.log(error))
};


// crear unicornio nuevo

function unicornCreate(){
  
  const data = {
    // datos del unicornio que deseas crear
    name: 'Unicornio mágico',
    color: 'Blanco',
    age: 100
  };

  fetch( `${baseURL}/c7fc2c5c4a99496bb8f0da17f1f759ee/unicorns`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error))

}

// actualizar unicornio

function unicornUpdate(){

  const unicorn_id = '65b8272b658e2403e8763673'
  const data = { 
    name: 'Unicornio pedorro',
    color: 'roranja',
  }
  fetch( `${baseURL}c7fc2c5c4a99496bb8f0da17f1f759ee/unicorns.${unicorn_id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error))
}

const botonLista = document.querySelector('#unicornList')
botonLista.addEventListener('click', unicornObtain)

const botonCrear = document.querySelector('#newUnicorn')
botonCrear.addEventListener('click', unicornCreate)

const botonActualizar = document.querySelector('#unicornUpdate')
botonActualizar.addEventListener('click', unicornUpdate)

