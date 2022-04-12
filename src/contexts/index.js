import React, { useState, useContext } from 'react';
import { api } from 'const';

export const MovieContext = React.createContext();

export const Context = ({ children }) => {

    const [movies, setMovies] = useState([]);
    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    //Get a list of the current popular movies from api
    const getMovies = async () => {
        setLoading(true);
        await fetch(`${api.root}/popular?api_key=${api.key}&language=en-US&page=1`)
            .then(res => res.json())
            .then(json => setMovies(json.results))
            .catch(err => alert(err))
    }

    //Get more information about a movie from api
    const getMovieById = async (id) => {
        setLoading(true);
        let response = await fetch(`${api.root}/${id}?api_key=${api.key}&language=en-US`)
        if (response.status === 200) {
            let data = await response.json();
            setMovie(data);
        }
        else {
            setError(true);
        }
    }

    let value = { movie, movies, getMovies, getMovieById, loading, setLoading, error, setError };

    return (
        <MovieContext.Provider value={value}>
            {children}
        </MovieContext.Provider>
    )
}

export const useMovieContext = () => {
    return useContext(MovieContext);
}