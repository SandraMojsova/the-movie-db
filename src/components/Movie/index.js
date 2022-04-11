import { useEffect } from "react";
import { useParams } from "react-router";
import { useMovieContext } from "contexts";
import { image_path } from "const";

const Movie = () => {

    let { id } = useParams(); //useparams hook to extract the id from the url for each movie
    let { movie, getMovieById } = useMovieContext(); // access the context value

    useEffect(() => {
        getMovieById(id);
    }, [])


    return (
        <div className="movie">
            <img src={`${image_path}${movie.poster_path} `} alt="movie image" />
            <div className="movie__container">
                <h1>{movie.original_title}</h1>
                <div className="movie__wrapper">
                    <div className="movie__genres">
                        {
                            movie.genres ?
                                movie.genres.map((genre) => (
                                    <h4 key={genre.id}>{genre.name} </h4>

                                )) : null
                        }
                    </div>
                    <span className="popularity">{Math.round(movie.popularity / 100)}%</span>
                </div>
                <p className="movie__tagline">{movie.tagline}</p>
                <h3>0verview</h3>
                <p className="movie__overview">{movie.overview}</p>
                <div className="movie__wrapper1">
                    <span>Release date: {movie.release_date}</span>
                    <a href={movie.homepage}>Go to official website</a>
                </div>
            </div>
        </div>
    )
}

export default Movie;