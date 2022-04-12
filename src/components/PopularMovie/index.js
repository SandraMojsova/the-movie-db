import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { image_path } from 'const';

const PopularMovie = ({ movie }) => {
    
    return (
        <div className='popular-movie'>
            <Link to={`/movie/${movie.id}`}>
                <div className="popular-movie__card">
                    <div className='popular-movie__image-box'>
                        <img src={`${image_path}${movie.poster_path} `} />
                        <span className='popularity main-page'>{Math.round(movie.popularity / 100)}%</span>
                    </div>
                    <div className="popular-movie__wrapper">
                        <h2>{movie.title}</h2>
                        <span>{movie.release_date}</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

PopularMovie.propTypes = {
    movie: PropTypes.object,
}

export default PopularMovie;