componentDidMount = () => {
    console.log('App, componentDidMount');
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
    .then(response => response.json())
    .then(data => {
      console.log(data)
      this.setState({movies: data})
    })
    .catch(error => {
      console.log(error)
      this.setState({error: `${error}`})
    })
  }

  export default componentDidMount();