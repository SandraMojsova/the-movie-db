import React, { useState, useContext } from 'react';
import { api_key } from '../const';

export const AuthContext = React.createContext();

export const Context = ({ children }) => {

    const [movies, setMovies] = useState([]);
    const [movie, setMovie] = useState({});

    function getMovies() {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`)
            .then(res => res.json())
            .then(json => setMovies(json.results))
            .catch(err => console.log(err))
    }

    function getMovieById(id) {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`)
            .then(res => res.json())
            .then(json => setMovie(json))
            .catch(err => console.log(err))
    }

    return (
        <AuthContext.Provider value={{ movie, movies, getMovies, getMovieById }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => {
    return useContext(AuthContext);
}