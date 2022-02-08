import React, { useCallback, useState } from "react";

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
    changeCurrentPage: React.Dispatch<React.SetStateAction<number>>,
    getCountOfPages: () => number,
    handleNextClick: () => void,
    handlePrevClick: () => void,
    getCurrentPageData: () => typeof data
] => {
    const [currentPage, changeCurrentPage] = useState(1);

    const getCountOfPages = () => {
        return Math.ceil(countOfCards / countOfCardsPerPage);
    };

    const handleNextClick = () => {
        changeCurrentPage(currentPage + 1);
    };
    const handlePrevClick = () => {
        changeCurrentPage(currentPage - 1);
    };

    const getCurrentPageData = () => {
        return data.slice(
            (currentPage - 1) * countOfCardsPerPage,
            currentPage * countOfCardsPerPage
        );
    };
    return [
        currentPage,
        changeCurrentPage,
        getCountOfPages,
        handleNextClick,
        handlePrevClick,
        getCurrentPageData,
    ];
};
