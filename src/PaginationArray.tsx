import React from "react";
import { PaginationItem } from "./PaginationItem";

interface Props {
  currentPage: number;
  currentPageSetter: React.Dispatch<React.SetStateAction<number>>;
  pagesTotal: number;
}

function calculateNumberOfPages(currentPage: number, pagesTotal: number) {
  switch (currentPage) {
    case 1:
      return 1;
    case pagesTotal:
      return 1;
    case 2 || 3:
      return currentPage;
    case pagesTotal - 1 || pagesTotal - 2:
      return pagesTotal - currentPage + 1;
    default:
      return 3;
  }
}

export const PaginationArray = ({
  currentPage,
  pagesTotal,
  currentPageSetter,
}: Props) => {
  let pages = Array.from(
    { length: calculateNumberOfPages(currentPage, pagesTotal) },
    (_, i) => {
      if (currentPage === 1) {
        return currentPage + 1;
      } else if (currentPage === 2) {
        return currentPage + i;
      } else if (currentPage === pagesTotal - 1) {
        return currentPage - i;
      } else {
        return currentPage - 1 + i;
      }
    }
  );
  pages = currentPage === pagesTotal - 1 ? pages.reverse() : pages;
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
