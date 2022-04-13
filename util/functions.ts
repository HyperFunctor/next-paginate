export function calculateNumberOfPages(
  currentPage: number,
  numberOfPages: number
) {
  switch (currentPage) {
    case 1:
      return 1;
    case numberOfPages:
      return 1;
    case 2 || 3:
      return currentPage;
    case numberOfPages - 1 || numberOfPages - 2:
      return numberOfPages - currentPage + 1;
    default:
      return 3;
  }
}

export const definePageNumbers =
  (lengthCalculator: (x: number, y: number) => number) =>
  (currentPage: number, numberOfPages: number) => {
    const pages = Array.from(
      { length: lengthCalculator(currentPage, numberOfPages) },
      (_, i) => {
        if (currentPage === 1) {
          return currentPage + 1;
        } else if (currentPage === 2) {
          return currentPage + i;
        } else if (currentPage === numberOfPages - 1) {
          return currentPage - i;
        } else {
          return currentPage - 1 + i;
        }
      }
    );
    if (currentPage === numberOfPages - 1) {
      return pages.reverse();
    }
    return pages;
  };