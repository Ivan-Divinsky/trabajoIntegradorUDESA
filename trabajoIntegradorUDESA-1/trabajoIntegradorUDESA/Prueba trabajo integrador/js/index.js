function ingresarPeliculas(data, elementoAInyectar, type){
    for(let i = 0; i < 5; i++){
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


let listaPeliculasIndex = document.querySelector(".listaPeliculasIndex")
fetch("https://api.themoviedb.org/3/movie/popular?api_key=3c52a38246232970e5307a092f7321bc")
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        ingresarPeliculas(data, listaPeliculasIndex, "movie" )
    })
    .catch(function(error){
        console.log("El error es: " + error)
    })


let mejorvaloradas = document.querySelector(".mejorvaloradas")
fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=3c52a38246232970e5307a092f7321bc")
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
    ingresarPeliculas(data, mejorvaloradas, "movie")
})
.catch(function(error){
    console.log("El error es: " + error)
})


let series = document.querySelector(".series")
fetch("https://api.themoviedb.org/3/discover/tv?api_key=3c52a38246232970e5307a092f7321bc")
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
    for(let i = 0; i < 5; i++){
        series.innerHTML += `
        <div class="peliculaIndex">
            <a class="detalles" href="./detalle.html?id=${data.results[i].id}&type=tv">
            <img src=https://image.tmdb.org/t/p/w342/${data.results[i].poster_path} alt=${data.results[i].name} class="imagenPeliculaIndex">
            <h3>${data.results[i].name}</h3>
            </a>
            <p>Fecha de Estreno: ${data.results[i].first_air_date}</p>
        </div>
        `
}
})
.catch(function(error){
    console.log("El error es: " + error)
})