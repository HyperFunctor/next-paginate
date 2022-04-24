import React from "react";

import { PaginationItem } from "./PaginationItem";
import { calculateNumberOfPages, definePageNumbers } from "./utils/functions";

interface Props {
  readonly currentPage: number;
  readonly currentPageSetter: React.Dispatch<React.SetStateAction<number>>;
  readonly pagesTotal: number;
  readonly path: string;
}

export const PaginationArray = ({
  currentPage,
  pagesTotal,
  currentPageSetter,
  path,
}: Props) => {
  const pages = definePageNumbers(calculateNumberOfPages)(
    currentPage,
    pagesTotal
  );
  return (
    <ul>
      {pages.map((number) => (
        <PaginationItem
          key={number}
          pageNumber={number}
          currentPage={currentPage}
          currentPageSetter={currentPageSetter}
          path={path}
        />
      ))}
    </ul>
  );
};
