window.addEventListener('load', function () {

    fetch("/odontologos")
        .then(function(respuesta){
            return respuesta.json();
        })
        .then(function(informacion){
            console.log(informacion)
            for(let i = 0; i < informacion.length; i++){
                let id = "<p>" + informacion[i].id + "</p>";
                let matricula = "<p>" + informacion[i].matricula + "</p>";
                let nombre = "<p>" + informacion[i].nombre + "</p>";
                let apellido = "<p>" + informacion[i].apellido + "</p>";
                document.querySelector("table").innerHTML += "<tr>"+
                    "<td>" + id + "</td>"+
                    "<td>" + matricula + "</td>"+
                    "<td>" + nombre + "</td>"+
                    "<td>" + apellido + "</td>"
                +"</tr>"

            }
        })
        .catch(function(e){
            alert("Error")
        })









})
