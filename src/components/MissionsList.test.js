import React from "react";
import { screen, render } from "@testing-library/react";
import MissionsList from "./MissionsList";

test("MissionsList component renders nothing when missions array is empty", () => {
    // Arrange
    render(<MissionsList missions={[]} />);
    const missions = screen.queryByTestId("mission");

    // Act

    // Assert
});

test("MissionsList component shows mission titles when rerendered with data from the API", () => {
    // Arrange

    // Act

    // Assert
});
