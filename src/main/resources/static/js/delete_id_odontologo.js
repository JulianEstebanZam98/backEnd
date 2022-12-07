window.addEventListener('load', function (){

const formulario = document.querySelector('#delect_odontologo_id');

      formulario.addEventListener('submit', function(event){
      const id= document.querySelector('#id').value
      const url = '/odontologos/'+id;
      const settings = {
         method: 'DELETE'
      }


        fetch(url,settings)
        .then(response => response.json())
        .then(function(data){

        })
        })
        .catch(function(e){
            alert("Error")
        })

      formulario.reset();
})