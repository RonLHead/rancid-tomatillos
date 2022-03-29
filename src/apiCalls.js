const fetchMovies = {
    allMovieData(){
        return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
            .then(response => {
                if(!response.ok) {
                    throw new Error("Unable to retrieve data")
                } else {
                    return response.json()
                }
            })
    }
}

export default fetchMovies