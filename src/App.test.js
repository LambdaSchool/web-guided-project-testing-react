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
        data: [
            {
                mission_name: "Telstar",
                mission_id: "F4F83DE"
            },
            {
                mission_name: "AsiaSat",
                mission_id: "593B499"
            },
            {
                mission_name: "Eutelsat",
                mission_id: "F7709F2"
            }
        ]
    });

    const button = screen.getByRole('button', { name: /get data/i });

    // Act
    fireEvent.click(button);

    // Assert
    await waitFor(() => {
        expect(screen.getAllByTestId("mission")).toHaveLength(3);
    })
})
