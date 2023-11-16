let busqueda = document.getElementById('textoBusqueda')
let resultado = document.querySelector('titulos')
let botonBusqueda = document.getElementById('submitDeBusqueda')


function ingresarPeliculas(data, elementoAInyectar, type) {

    for (let i = 0; i < 5; i++) {
        elementoAInyectar.innerHTML += `
        <div class="peliculaIndex">
            <a class="detalles" href="./detalle.html?id=${data.results[i].id}&type=${type}">
            <img src=https://image.tmdb.org/t/p/w342/${data.results[i].poster_path} alt=${data.results[i].title} class="imagenPeliculaIndex">
            <h3>${data.results[i].title}</h3>
            </a>
            <p>Fecha de Estreno: ${data.results[i].release_date}</p>
        </div>
        `
    }
}

botonBusqueda.addEventListener('click', function(){
    let listaPeliculasBusqueda = document.querySelector(".listaPeliculasBusqueda")
    fetch("https://api.themoviedb.org/3/search/movie?query=${busqueda}&include_adult=false&language=en-US&page=1")
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data)
            ingresarPeliculas(data, listaPeliculasBusqueda, "movie")
        })
        .catch(function (error) {
            console.log("El error es: " + error)
        })
    })