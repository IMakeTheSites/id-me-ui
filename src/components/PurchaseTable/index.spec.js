import React from "react";
import { render } from "@testing-library/react";
import PurchaseTable, { CategoryWidget, headers } from "./";

const mockData = [
  {
    id: 1,
    name: "Example Purchase 1",
    location: "https://example.com/image1.png",
    purchaseDate: "2022-01-01",
    category: "electronics",
    description: "Example description for purchase 1",
    price: 1000,
  },
  {
    id: 2,
    name: "Example Purchase 2",
    location: "https://example.com/image2.png",
    purchaseDate: "2022-02-01",
    category: "furniture",
    description: "Example description for purchase 2",
    price: 2500,
  },
];

describe("PurchaseTable component", () => {
  it("renders table headers correctly", () => {
    const { getByText } = render(<PurchaseTable purchases={[]} />);
    headers.forEach((header) => {
      expect(getByText(header)).toBeInTheDocument();
    });
  });

  it("renders purchase data correctly", () => {
    const { getByText, getAllByTestId } = render(
      <PurchaseTable purchases={mockData} />
    );
    mockData.forEach((purchase) => {
      expect(getByText(purchase.name)).toBeInTheDocument();
      expect(getByText(`$${purchase.price / 100}`)).toBeInTheDocument();
    });
    const categories = getAllByTestId("category-widget");
    expect(categories[0]).toHaveClass("electronics");
    expect(categories[1]).toHaveClass("furniture");
  });
});

describe("CategoryWidget component", () => {
  it("renders category text correctly", () => {
    const { getByText } = render(<CategoryWidget category="electronics" />);
    expect(getByText("electronics")).toBeInTheDocument();
  });
});
