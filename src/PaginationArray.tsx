import React from "react";
import { PaginationItem } from "./PaginationItem";
import { calculateNumberOfPages, definePageNumbers } from '../util/functions'

interface Props {
  currentPage: number;
  currentPageSetter: React.Dispatch<React.SetStateAction<number>>;
  pagesTotal: number;
}

export const PaginationArray = ({
  currentPage,
  pagesTotal,
  currentPageSetter,
}: Props) => {
  const pages = definePageNumbers(calculateNumberOfPages)(currentPage, pagesTotal);
  return (
    <ul>
      {pages.map((number) => (
        <PaginationItem
          key={number}
          pageNumber={number}
          currentPage={currentPage}
          currentPageSetter={currentPageSetter}
        />
      ))}
    </ul>
  );
};
