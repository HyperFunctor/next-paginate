import React from "react";
import {DottedPagination} from './DottedPagination'
import {Pagination} from './Pagination'

interface PaginationProps {
  dots: boolean;
  currentPage: number;
  currentPageSetter: React.Dispatch<React.SetStateAction<number>>;
  pagesTotal: number;
  path: string;
}

export const NextPaginate = ({dots, currentPage, currentPageSetter, pagesTotal, path}: PaginationProps) => {
  return dots ? 
  <DottedPagination 
    currentPage={currentPage} 
    currentPageSetter={currentPageSetter} 
    pagesTotal={pagesTotal} 
    path={path} /> 
  : 
  <Pagination 
    currentPage={currentPage} 
    currentPageSetter={currentPageSetter} 
    pagesTotal={pagesTotal} 
    path={path} />;
};
