const fetchMovies =() => {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
        .then(responses => {
        console.log(responses)
        responses.json()
    })
}

export default fetchMovies;