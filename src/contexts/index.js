import React, { useState, useContext } from 'react';
import { api } from 'const';

export const AuthContext = React.createContext();

export const Context = ({ children }) => {

    const [movies, setMovies] = useState([]);
    const [movie, setMovie] = useState({});


    const getMovies = async()=> {
        await fetch(`${api.root}/popular?api_key=${api.key}&language=en-US&page=1`)
            .then(res => res.json())
            .then(json => setMovies(json.results))
            .catch(err => console.log(err))
    }

    const getMovieById = async(id)=> {
        await fetch(`${api.root}/${id}?api_key=${api.key}&language=en-US`)
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