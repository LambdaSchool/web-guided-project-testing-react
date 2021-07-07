import React from "react";
import { screen, render } from "@testing-library/react";
import MissionForm from "./MissionForm";

test("MissionForm component renders with a Get Data button", () => {
    // Arrange
    render(<MissionForm />);
    const button = screen.getByRole('button', { name: /get data/i }); // implicit assertion, we're done!

    // (Act)

    // (Assert that the button is in the DOM)
    expect(button).toBeInTheDocument();
});

test("While fetching data, MissionForm component renders a loading message", () => {
    // Arrange
    // render the component, look for a loading message

    // (Act)

    // Assert that the loading message is in the DOM
})