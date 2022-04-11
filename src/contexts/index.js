import React, { useState, useContext } from 'react';
import { api } from 'const';

export const MovieContext = React.createContext();

export const Context = ({ children }) => {

    const [movies, setMovies] = useState([]);
    const [movie, setMovie] = useState({});

    //Get a list of the current popular movies from api
    const getMovies = async () => {
        await fetch(`${api.root}/popular?api_key=${api.key}&language=en-US&page=1`)
            .then(res => res.json())
            .then(json => setMovies(json.results))
            .catch(err => console.log(err))
    }

    //Get more information about a movie from api
    const getMovieById = async (id) => {
        await fetch(`${api.root}/${id}?api_key=${api.key}&language=en-US`)
            .then(res => res.json())
            .then(json => setMovie(json))
            .catch(err => console.log(err))
    }

    return (
        <MovieContext.Provider value={{ movie, movies, getMovies, getMovieById }}>
            {children}
        </MovieContext.Provider>
    )
}

export const useMovieContext = () => {
    return useContext(MovieContext);
}