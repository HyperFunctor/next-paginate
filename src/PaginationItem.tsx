import Link from "next/link";
import React from "react";

interface PaginationItemProps {
  readonly pageNumber: number;
  readonly currentPage: number;
  readonly currentPageSetter: React.Dispatch<React.SetStateAction<number>>;
  readonly path: string;
}

export const PaginationItem = ({
  pageNumber,
  currentPage,
  currentPageSetter,
  path,
}: PaginationItemProps) => (
  <li>
    <Link href={`/${path}/${pageNumber}`}>
      <a
        onClick={() => currentPageSetter(pageNumber)}
        className={`${
          currentPage === pageNumber ? "some active class" : "standard styling"
        }`}
      >
        {pageNumber}
      </a>
    </Link>
  </li>
);
