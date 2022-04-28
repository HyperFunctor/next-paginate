import { render } from "@testing-library/react";
import React from "react";

import { Pagination } from "./Pagination";

describe("lol", () => {
  it("should work", () => {
    expect(1 + 2).toEqual(3);
  });

  it("should render", () => {
    render(
      <Pagination
        currentPage={7}
        currentPageSetter={() => 7}
        pagesTotal={700}
        path=""
      />
    );
  });
});
