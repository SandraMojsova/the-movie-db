import { useState, useEffect } from 'react';
import { useParams } from "react-router";
import { image_path, api_key } from '../../const';

const Movie = () => {

    let { id } = useParams();
    const [movie, setMovie] = useState("");

    function getMovieById() {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`)
            .then(res => res.json())
            .then(json => setMovie(json))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getMovieById();
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