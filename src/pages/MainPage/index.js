import { useEffect } from 'react';
import PopularMovies from '../../components/PopularMovies';
import { useAuthContext } from "../../contexts";
import { image_path } from '../../const';

const MainPage = () => {

    let { movies, getMovies } = useAuthContext();

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