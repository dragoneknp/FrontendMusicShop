import "./pagination.scss";

interface PaginationProps {
    countOfPages: number;
    currentPage: number;
    onNextClick: () => void;
    onPrevClick: () => void;
}

const Pagination = ({
    countOfPages,
    currentPage,
    onNextClick,
    onPrevClick,
}: PaginationProps) => {
    return (
        <div className="pagination">
            <div
                className={`pagination__prevPage ${
                    currentPage > 1 ? "active" : "disabled"
                }`}
                onClick={currentPage > 1 ? onPrevClick : undefined}
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
                onClick={currentPage < countOfPages ? onNextClick : undefined}
            >
                NEXT
            </div>
        </div>
    );
};

export default Pagination;
