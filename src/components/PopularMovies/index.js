import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.css';

const PopularMovies = (props) => {
    return (
        <div className='Movie'>
            {
                props.movies.map((movie, i) => {
                    return (
                        <Link to={`/movie/${movie.id}`} key={movie.id}>
                            <div className="movie-card">
                                <span>{movie.title}</span>
                                <span>{movie.release_date}</span>
                                <img className='movie-image' src={`${props.image_path}${movie.poster_path} `} />
                                <span>{Math.round(movie.popularity / 100)}%</span>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}

PopularMovies.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object),
    image_path: PropTypes.string
}

export default PopularMovies;