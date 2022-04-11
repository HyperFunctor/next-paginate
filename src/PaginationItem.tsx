import React from "react";
import Link from "next/link";

interface PaginationItemProps {
  pageNumber: number;
  currentPage: number;
  currentPageSetter: React.Dispatch<React.SetStateAction<number>>;
  path: string
}

export const PaginationItem = ({
  pageNumber,
  currentPage,
  currentPageSetter,
  path
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
