import { useEffect } from "react";
import { useMovieContext } from "contexts";
import LoadingSpinner from "components/LoadingSpinner";
import PaginatedList from "components/PaginatedList";

const MainPage = () => {

    let { movies, getMovies, loading, setLoading } = useMovieContext(); //access the context value

    useEffect(() => {
        getMovies();
        setTimeout(() => {
            setLoading(false);
        }, 1000)
    }, [])

    return (
        <div className="main-page">
            <h1>MOST POPULAR MOVIES</h1>
            {
                loading ?
                    <div className="main-page__spinner">
                        <LoadingSpinner />
                    </div> :
                    <PaginatedList movies={movies} itemsPerPage={5} />
            }
        </div >
    );
}

export default MainPage;