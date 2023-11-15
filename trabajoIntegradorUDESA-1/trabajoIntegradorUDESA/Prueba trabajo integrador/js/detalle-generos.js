let detalleGenerosPeliculas = document.querySelector(".detalleGenerosPeliculas")
fetch("")
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)

    })
    .catch(function(error){
        console.log("El error es: " + error)
    })