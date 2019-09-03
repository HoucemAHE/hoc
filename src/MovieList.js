import React, { Fragment } from 'react'
import MovieCard from './MovieCard'
import Loaded from './loaded.js';

class MovieList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            rating: '',
            image: '',
            year: '',
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const { movies = [], onAddMovie = () => { } } = this.props
        return (
            <Fragment>
                <div className="movie-list">
                    {
                        movies.map(el => <MovieCard key={el.id} movie={el} />)
                    }
                </div>
                <div
                    className="new-movie-card">
                    +
        </div>
                <div className='modal-movie'>
                    <h3>Add Movie</h3>
                    <input type='text' placeholder="Add title" name="title" onChange={this.handleChange} />
                    <input type='text' placeholder="Add rating" name="rating" onChange={this.handleChange} />
                    <input type='text' placeholder="Add year" name="year" onChange={this.handleChange} />
                    <input type='text' placeholder="Add picture" name="image" onChange={this.handleChange} />
                    <input type='button' value="Add movie" onClick={() => onAddMovie({
                        id: Math.random(),
                        title: this.state.title,
                        rating: this.state.rating,
                        year: this.state.year,
                        image: this.state.image
                    })} />
                </div>
            </Fragment>)
    }
}


export default Loaded(MovieList);
// import React from 'react'
// import MovieCard from './MovieCard'

// const MovieList = ({movies = [], onAddMovie = () => {}}) => (
//      <div className="movie-list">
//         {
//             movies.map(el => <MovieCard key={el.id} movie={el} />)
//         }
//         <div
//             className="new-movie-card"
//             onClick={() => {
//                 onAddMovie({
//                     id: Math.random(),
//                     title: prompt('movie title: '),
//                     rating: Number(prompt('movie rating: ')),
//                     year: Number(prompt('movie year: '))
//                 })
//             }} >
//             +
//         </div>
//       </div>
// )

// export default MovieList