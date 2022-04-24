import Link from "next/link";
import React from "react";

import { PaginationArray } from "./PaginationArray";
import { PaginationDots } from "./PaginationDots";
import { PaginationItem } from "./PaginationItem";

interface Props {
  readonly currentPage: number;
  readonly currentPageSetter: React.Dispatch<React.SetStateAction<number>>;
  readonly pagesTotal: number;
  readonly path: string;
}

export const DottedPagination = ({
  currentPage,
  currentPageSetter,
  pagesTotal,
  path,
}: Props) => {
  return (
    <nav>
      <Link href={`/${path}${currentPage > 1 ? `/${currentPage - 1}` : ""}`}>
        <a>Prev</a>
      </Link>
      <PaginationItem
        pageNumber={1}
        currentPage={currentPage}
        currentPageSetter={currentPageSetter}
        path={path}
      />
      <PaginationDots condition={currentPage > 3} path={path} />
      <PaginationArray
        currentPage={currentPage}
        currentPageSetter={currentPageSetter}
        pagesTotal={pagesTotal}
        path={path}
      />
      <PaginationDots condition={currentPage < pagesTotal - 2} path={path} />
      <PaginationItem
        pageNumber={pagesTotal}
        currentPage={currentPage}
        currentPageSetter={currentPageSetter}
        path={path}
      />
      <Link href={`/${path}/${Math.min(currentPage + 1, pagesTotal)}`}>
        <a>Next</a>
      </Link>
    </nav>
  );
};
