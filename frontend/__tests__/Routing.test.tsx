/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import Header from "../components/organisms/Header";

it("introduction_page_routing", () => {
  render(<Header />);
  expect(screen.getByText("柄澤整骨院")).toBeInTheDocument();
});
