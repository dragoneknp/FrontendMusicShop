import { useCallback, useState } from "react";

export const usePagination = ({
    countOfCards,
    countOfCardsPerPage,
    data,
}: {
    countOfCards: number;
    countOfCardsPerPage: number;
    data: any[];
}): [
    currentPage: number,
    getCountOfPages: () => number,
    handleNextClick: () => void,
    handlePrevClick: () => void,
    getCurrentPageData: () => typeof data
] => {
    const [currentPage, changeCurrentPage] = useState(1);
    const getCountOfPages = useCallback(() => {
        return Math.ceil(countOfCards / countOfCardsPerPage);
    }, [countOfCards, countOfCardsPerPage]);

    const handleNextClick = useCallback(() => {
        changeCurrentPage(currentPage + 1);
    }, [currentPage]);

    const handlePrevClick = useCallback(() => {
        changeCurrentPage(currentPage - 1);
    }, [currentPage]);

    const getCurrentPageData = useCallback(() => {
        return data.slice(
            (currentPage - 1) * countOfCardsPerPage,
            currentPage * countOfCardsPerPage
        );
    }, [data, currentPage, countOfCardsPerPage]);

    return [
        currentPage,
        getCountOfPages,
        handleNextClick,
        handlePrevClick,
        getCurrentPageData,
    ];
};
