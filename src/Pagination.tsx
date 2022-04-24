import Link from "next/link";
import React from "react";

import { PaginationItem } from "./PaginationItem";

interface Props {
  readonly currentPage: number;
  readonly currentPageSetter: React.Dispatch<React.SetStateAction<number>>;
  readonly pagesTotal: number;
  readonly path: string;
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
            key={i}
            currentPage={currentPage}
            pageNumber={i + 1}
            currentPageSetter={currentPageSetter}
            path={path}
          />
        ))}
      </ul>
      <Link href={`/${path}/${Math.min(currentPage + 1, pagesTotal)}`}>
        <a>Next</a>
      </Link>
    </nav>
  );
};
