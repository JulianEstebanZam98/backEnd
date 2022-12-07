window.addEventListener('load', function () {
    const formulario = document.querySelector('#get_odontologo_id');

    formulario.addEventListener('submit', function (event) {
        const id= document.querySelector('#id').value
        const url = '/odontologos/'+id;
        const settings = {
            method: 'GET'
        }



    fetch(url,settings)
        .then(response => response.json())
        .then(function(informacion){
            console.log("funciona")
            let id = "<p>" + informacion.id + "</p>";
            let matricula = "<p>" + informacion.matricula + "</p>";
            let nombre = "<p>" + informacion.nombre + "</p>";
            let apellido = "<p>" + informacion.apellido + "</p>";
            document.querySelector("table").innerHTML += "<tr>"+
                 "<td>" + id + "</td>"+
                 "<td>" + matricula + "</td>"+
                 "<td>" + nombre + "</td>"+
                 "<td>" + apellido + "</td>"
                 +"</tr>"
        })
        .catch(function(error){
            console.log(error)
        })


    });
})




