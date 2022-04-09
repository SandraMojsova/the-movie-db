import { useEffect } from "react";
import PopularMovie from "components/PopularMovie";
import { useAuthContext } from "contexts";
import "./style.sass";

const MainPage = () => {

    let { movies, getMovies } = useAuthContext();

    useEffect(() => {
        getMovies();
    }, [])

    return (
        <div className="main-page">
            <h1>MOST POPULAR MOVIES</h1>
            <div className="main-page__popular-movies">
                {
                    movies.map((movie) => {
                        return <PopularMovie movie={movie} key={movie.id} />
                    })
                }
            </div>
        </div >
    );
}

export default MainPage;