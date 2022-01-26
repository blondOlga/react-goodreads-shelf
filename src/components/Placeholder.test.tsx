import { render } from "@testing-library/react";
import Placeholder from "./Placeholder";

describe("testing placeholder", () => {
  it("renders without crashing", () => {
    const placeholder = render(<Placeholder />);
    expect(placeholder).toMatchSnapshot();
  });
});
