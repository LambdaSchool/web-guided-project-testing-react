// Top-level integration test for our app
import React from "react";
import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";

import mockFetchMissions from "./api/fetchMissions";
jest.mock('./api/fetchMissions'); // Block all imports of the fetchMissions function, use our mock version instead

test("App renders without errors", () => {
    render(<App />)
});

test("App fetches SpaceX data on click and displays the mission names", async () => {
    // Arrange
    render(<App />);
    mockFetchMissions.mockResolvedValueOnce({

    });

    const button = screen.getByRole('button', { name: /get data/i });

    // Act
    fireEvent.click(button);

    // Assert
    await waitFor(() => {
        expect(screen.getAllByTestId("mission")).toHaveLength(10);
    })
})
