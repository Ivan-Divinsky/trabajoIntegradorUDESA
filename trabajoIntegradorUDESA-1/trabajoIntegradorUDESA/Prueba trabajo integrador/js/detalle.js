let queryString = location.search
let queryStringObj = new URLSearchParams(queryString)
let id = queryStringObj.get("id")
let type = queryStringObj.get("type")


function ponergeneros(objeto, objeto2) {
    let generos = ''
    if (objeto && objeto[objeto2] && Array.isArray(objeto[objeto2])){
        for (let i = 0; i < objeto[objeto2].length; i++) {
            if (typeof objeto[objeto2][i] === 'object' && objeto[objeto2][i].name) {
                generos += objeto[objeto2][i].name + ' ';
            }
        }
    }
    return generos
}


let infodetalle = document.querySelector(".infodetalle")
let varURL=""
if(type==="movie"){
    varURL = `https://api.themoviedb.org/3/movie/${id}?api_key=3c52a38246232970e5307a092f7321bc`
    fetch(varURL)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
            infodetalle.innerHTML = `
            <h1 class="titulosdetalle">${data.title}</h1>
            <h3 class="titulosdetalle">Calificación: ${data.vote_average}</h3>
            <h3 class="titulosdetalle">Fecha de Estreno: ${data.release_date}</h3>
            <h3 class="titulosdetalle">Duración:${data.runtime} minutos</h3>
            <a class="enlacecruzado" href="drama.html"><h3 class="titulosdetalle">Género: ${ponergeneros(data, "genres")}</h3></a>
            <p class="titulosdetalle"> ${data.overview}</p>
            <article class="favoritos">
                <a class="fav" href="favoritos.html">Añadir a Favoritos</a>
            </article>
            `
    })
    .catch(function(error){
        console.log("El error es: " + error)
    })

}else if(type==="tv"){
    varURL = `https://api.themoviedb.org/3/tv/${id}?api_key=3c52a38246232970e5307a092f7321bc`
    fetch(varURL)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
            genero = data.genres
            infodetalle.innerHTML = `
            <h1 class="titulosdetalle">${data.name}</h1>
            <h3 class="titulosdetalle">Calificación: ${data.vote_average}</h3>
            <h3 class="titulosdetalle">Fecha de Estreno: ${data.first_air_date}</h3>
            <a class="enlacecruzado" href="drama.html"><h3 class="titulosdetalle">Género: ${ponergeneros(data, "genres")}</h3></a>
            <p class="titulosdetalle"> ${data.overview} </p>
            <article class="favoritos">
                <a class="fav" href="favoritos.html">Añadir a Favoritos</a>
            </article>
            `
    })
    .catch(function(error){
        console.log("El error es: " + error)
    })

}
