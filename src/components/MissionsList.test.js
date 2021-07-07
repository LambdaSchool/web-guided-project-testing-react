import React from "react";
import { screen, render } from "@testing-library/react";
import MissionsList from "./MissionsList";

test("MissionsList component renders nothing when missions array is empty", () => {
    // Arrange
    render(<MissionsList missions={[]} />);
    const missions = screen.queryByTestId("mission");

    // Act

    // Assert
    expect(missions).toBeNull();
});

test("MissionsList component shows mission titles when rerendered with data from the API", () => {
    // Arrange
    const { rerender } = render(<MissionsList missions={[]} />);

    // Act (simulate a successful api call)

    // Assert
});
