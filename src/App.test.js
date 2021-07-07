// Top-level integration test for our app
import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import App from "./App";

test("App renders without errors", () => {
    render(<App />)
});

test("App fetches SpaceX data on click and displays the mission names", () => {
    render(<App />);

    
})
