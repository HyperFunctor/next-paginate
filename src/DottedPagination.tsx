import React from "react";
import Link from "next/link";
import { PaginationItem } from "./PaginationItem";
import { PaginationArray } from "./PaginationArray";
import { PaginationDots } from "./PaginationDots";

interface Props {
  currentPage: number;
  currentPageSetter: React.Dispatch<React.SetStateAction<number>>;
  pagesTotal: number;
  path: string;
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
