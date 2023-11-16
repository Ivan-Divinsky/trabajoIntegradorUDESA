let detalleGenerosPeliculas = document.querySelector(".detalleGenerosPeliculas")

let botonBusqueda = document.querySelector('#submitDeBusqueda')

botonBusqueda.addEventListener('click', function(){
    let busqueda = document.querySelector('#textoBusqueda')
    sessionStorage.setItem('busquedaUsuario', busqueda.value)
})

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