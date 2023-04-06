import React from "react";
import { render } from "@testing-library/react";
import PurchaseCard from "./index";

describe("PurchaseCard", () => {
  const purchase = {
    location: "https://example.com/avatar.png",
    name: "Example Purchase",
    description: "This is an example purchase description.",
    purchaseDate: "2022-01-01T00:00:00.000Z",
    price: 2000,
  };

  it("renders the purchase description", () => {
    const { getByText } = render(<PurchaseCard purchase={purchase} />);
    const descriptionElement = getByText(
      /This is an example purchase description/i
    );
    expect(descriptionElement).toBeInTheDocument();
  });

  it("renders the purchase date", () => {
    const { getByText } = render(<PurchaseCard purchase={purchase} />);
    const dateElement = getByText(/January 01, 2022/i);
    expect(dateElement).toBeInTheDocument();
  });
});
