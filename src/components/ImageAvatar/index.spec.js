import React from "react";
import { render } from "@testing-library/react";
import ImageAvatar from "./";

describe("ImageAvatar", () => {
  it("renders the correct image source and alt text", () => {
    const location = "https://example.com/image.jpg";
    const { getByAltText } = render(<ImageAvatar location={location} />);
    const image = getByAltText(location);
    expect(image.src).toBe(location);
    expect(image.alt).toBe(location);
  });
});
