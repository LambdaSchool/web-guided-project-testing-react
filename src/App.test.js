// Top-level integration test for our app
import React from "react";
import { screen, render, fireEvent, wait, waitFor } from "@testing-library/react";
import App from "./App";

test("App renders without errors", () => {
    render(<App />)
});

test("App fetches SpaceX data on click and displays the mission names", async () => {
    // Arrange
    render(<App />);
    const button = screen.getByRole('button', { name: /get data/i });

    // Act
    fireEvent.click(button);

    // Assert
    waitFor(() => {
        expect(screen.findAllByTestId("mission")).toHaveLength(6);
    })
})
