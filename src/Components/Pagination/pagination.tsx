import "./pagination.scss";

interface PaginationProps {
    countOfPages: number;
    currentPage: number;
}

const Pagination = ({ countOfPages, currentPage }: PaginationProps) => {
    return (
        <div className="pagination">
            <div
                className={`pagination__prevPage ${
                    currentPage > 1 ? "active" : "disabled"
                }`}
            >
                PREV
            </div>
            <div className="pagination__countOfPages">
                Page {currentPage} of {countOfPages}
            </div>
            <div
                className={`pagination__nextPage ${
                    currentPage < countOfPages ? "active" : "disabled"
                }`}
            >
                NEXT
            </div>
        </div>
    );
};

export default Pagination;
