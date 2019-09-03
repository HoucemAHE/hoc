import React, { Component } from "react";
import NameFilter from './NameFilter'
import RatingFilter from './RatingFilter'
import MovieList from './MovieList'

let moviesToDisplay = [
    {
        id: 'inception',
        title: 'Inception',
        rating: 4,
        image: 'https://i.ytimg.com/vi/E1iqGiX0lSg/movieposter.jpg',
        year: 2010
    },
    {
        id: 'shawshank',
        title: 'Shawshank Redeption',
        year: 1994,
        image: 'https://images-na.ssl-images-amazon.com/images/I/51zUbui%2BgbL._SY445_.jpg',
        rating: 4
    },

    {
        id: 'Oldboy',
        title: 'Oldboy',
        rating: 5,
        image: 'https://images-na.ssl-images-amazon.com/images/I/51y3eIiW2gL._SX342_.jpg',
        year: 2003
    }]


class MovieApp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            minRatingFilter: 3,
            movies: moviesToDisplay,
            titleFilter: '',
            loaded:true
        }
    }

    addNewMovie(newMovie) {
        this.setState({
            movies: this.state.movies.concat(newMovie)
        })
    }

    getVisibleMovies() {
        return this.state.movies.filter(
            el =>
                el.rating >= this.state.minRatingFilter &&
                el.title.toLowerCase().includes(
                    this.state.titleFilter.toLowerCase().trim()
                )
        )
    }

    componentDidMount () {
        // console.log('didMOUNT ; ' ,this.state.loaded)
      setTimeout(()=>{
          this.setState({loaded:false,});
      },3000)
    }

    render() {
      console.log(this.state.loaded)
        return (
            <div className="movie-app">
                <header className="movie-app-header">
                    <NameFilter
                        value={this.state.titleFilter}
                        onChange={(newTitleFilter) => {
                            this.setState({
                                titleFilter: newTitleFilter
                            })
                        }} />
                    <RatingFilter
                        count={this.state.minRatingFilter}
                        onChange={(newRating) => {
                            this.setState({
                                minRatingFilter: newRating
                            })
                        }} />
                </header>
                <main className="movie-app-main">
                    <MovieList
                        movies={
                            this.getVisibleMovies()
                        }
                        onAddMovie={(newMovie) => this.addNewMovie(newMovie)} loaded={this.state.loaded}/>
                </main>
            </div>
        )
    }
}

export default MovieApp;
