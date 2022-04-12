import { useEffect } from "react";
import { useParams } from "react-router";
import { Link } from 'react-router-dom';
import { useMovieContext } from "contexts";
import LoadingSpinner from "components/LoadingSpinner";
import ErrorComponent from "components/ErrorComponent";
import { image_path } from "const";
import returnImage from "assets/images/icon_back_white.svg";

const Movie = () => {

    let { id } = useParams(); //useparams hook to extract the id from the url for each movie
    let { movie, getMovieById, loading, setLoading, error, setError } = useMovieContext(); // access the context value

    useEffect(() => {
        getMovieById(id);
        setTimeout(() => {
            setLoading(false);
        }, 1000)
        setError(false);
    }, [])


    return (
        <div className="movie">
            {loading ?
                <div className="movie__loading-spinner">
                    <LoadingSpinner />
                </div>
                : error ?
                    <ErrorComponent id={id} />
                    : <>
                        <img src={`${image_path}${movie.poster_path} `} alt="movie image" />
                        <div className="movie__container">
                            <div className="movie__title-box">
                                <h1>{movie.original_title}</h1>
                                <Link to="/"><img src={returnImage} alt="" /></Link>
                            </div>
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
                    </>}
        </div>
    )
}

export default Movie;