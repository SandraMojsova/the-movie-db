import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ReactPaginate from "react-paginate";
import PopularMovie from "components/PopularMovie";


const PaginatedList = ({ movies, itemsPerPage }) => {


    const [currentMovies, setCurrentMovies] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);


    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % movies.length;
        setItemOffset(newOffset);
    };

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentMovies(movies.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(movies.length / itemsPerPage));
    }, [itemOffset, itemsPerPage])

    return (
        <div className="paginated-list">
            <div className="paginated-list__popular-movies">
                {
                    currentMovies &&
                    currentMovies.map((movie) => {
                        return <PopularMovie movie={movie} key={movie.id} />
                    })}
            </div>
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={itemsPerPage}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
                activeClassName="active"
            />
        </div>
    )
}

PaginatedList.propTypes = {
    movies: PropTypes.array,
    itemsPerPage: PropTypes.number
}

export default PaginatedList;