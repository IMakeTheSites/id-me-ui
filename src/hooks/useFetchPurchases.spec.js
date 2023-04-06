import { renderHook } from "@testing-library/react-hooks";
import useFetchPurchases from "./useFetchPurchases";

describe("useFetchPurchases", () => {
  it("should fetch purchases and return them", async () => {
    const mockPurchases = [
      { id: 1, name: "Purchase 1" },
      { id: 2, name: "Purchase 2" },
    ];
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockPurchases),
      })
    );

    const { result, waitForNextUpdate } = renderHook(() => useFetchPurchases());

    expect(result.current.isLoading).toBe(true);

    await waitForNextUpdate();

    expect(result.current.purchases).toEqual(mockPurchases);
    expect(result.current.isLoading).toBe(false);
  });
});
