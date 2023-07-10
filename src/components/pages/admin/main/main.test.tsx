import { Admin } from "./index";
import { render, screen } from "@testing-library/react";

describe("Admin", () => {
	test("should render Admdin", () => {
		render(<Admin />);
	});

	test("should render 'ir a usuarios' text", () => {
		expect(
			screen.getByText((content, element) => content === "ir a usuarios")
		).toBeDefined();
	});
});
