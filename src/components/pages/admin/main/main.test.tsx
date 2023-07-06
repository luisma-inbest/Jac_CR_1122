import { Admin } from "./index";
import { render, screen } from "@testing-library/react";

describe("Admin", () => {
	test("should add two numbers", () => {
		render(<Admin />);
	});

	expect(screen.getByText("ir a usuarios")).toBeDefined();
});
