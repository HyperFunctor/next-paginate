import React from "react";
import Link from "next/link";
import { PaginationItem } from "./PaginationItem";

interface Props {
  currentPage: number;
  currentPageSetter: React.Dispatch<React.SetStateAction<number>>;
  pagesTotal: number;
  path: string;
}

export const Pagination = ({
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
      <ul>
        {Array.from({ length: pagesTotal }, (_, i) => (
          <PaginationItem
            currentPage={currentPage}
            pageNumber={i + 1}
            currentPageSetter={currentPageSetter}
            key={i}
          />
        ))}
      </ul>
      <Link href={`/${path}/${Math.min(currentPage + 1, pagesTotal)}`}>
        <a>Next</a>
      </Link>
    </nav>
  );
};
