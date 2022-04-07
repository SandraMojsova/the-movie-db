import { useEffect } from 'react';
import { useParams } from "react-router";
import { useAuthContext } from '../../contexts';
import { image_path } from '../../const';

const Movie = () => {

    let { id } = useParams();
    let { movie, getMovieById } = useAuthContext();

    useEffect(() => {
        getMovieById(id);
    }, [])

    return (
        <div>
            <h3>{movie.original_title}</h3>
            <span>{movie.tagline}</span>
            <p>{movie.overview}</p>
            <img src={`${image_path}${movie.poster_path} `} />
            {/* <div>Genres : {
                movie.genres.map((genre, i) => {
                    return (
                        
                        <span key={i}>{genre.name} </span>
                        
                        )
                    })
                }</div> */}
            <span>{movie.popularity}</span>
            <span>{movie.release_date}</span>
            <span>{movie.homepage}</span>
            <span>{movie.adult}</span>
        </div>
    )
}

export default Movie;