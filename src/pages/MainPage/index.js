import { useEffect, useState } from 'react';
import PopularMovies from '../../components/PopularMovies';
import { api_key, image_path } from '../../const';

const MainPage = () => {

    const [movies, setMovies] = useState([]);

    function getMovies() {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`)
            .then(res => res.json())
            .then(json => setMovies(json.results))
            .catch(err => console.log(err))
    }
    useEffect(() => {
        getMovies();
    }, [])

    return (
        <div className="App">
            <h1>MOST POPULAR</h1>
            <PopularMovies movies={movies} image_path={image_path} />
        </div >
    );
}

export default MainPage;