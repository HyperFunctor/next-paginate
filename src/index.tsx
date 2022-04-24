import React from "react";

import { DottedPagination } from "./DottedPagination";
import { Pagination } from "./Pagination";

interface PaginationProps {
  readonly dots: boolean;
  readonly currentPage: number;
  readonly currentPageSetter: React.Dispatch<React.SetStateAction<number>>;
  readonly pagesTotal: number;
  readonly path: string;
}

export const NextPaginate = ({
  dots,
  currentPage,
  currentPageSetter,
  pagesTotal,
  path,
}: PaginationProps) => {
  return dots ? (
    <DottedPagination
      currentPage={currentPage}
      currentPageSetter={currentPageSetter}
      pagesTotal={pagesTotal}
      path={path}
    />
  ) : (
    <Pagination
      currentPage={currentPage}
      currentPageSetter={currentPageSetter}
      pagesTotal={pagesTotal}
      path={path}
    />
  );
};
