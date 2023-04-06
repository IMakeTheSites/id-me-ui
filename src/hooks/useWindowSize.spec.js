import { renderHook } from "@testing-library/react-hooks";
import useWindowSize from "./useWindowSize";

describe("useWindowSize", () => {
  it("should detect mobile size", () => {
    global.innerWidth = 320;
    const { result } = renderHook(() => useWindowSize());

    expect(result.current.isMobileSize).toBe(true);

    global.innerWidth = 768;
    if (result.current.window) {
      result.current.window.dispatchEvent(new Event("resize"));
      expect(result.current.isMobileSize).toBe(false);
    }
  });
});
