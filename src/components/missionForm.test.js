import React from "react";
import { screen, render } from "@testing-library/react";
import MissionForm from "./MissionForm";

test("MissionForm component renders with a Get Data button", () => {
    // Arrange
    render(<MissionForm isFetchingData={false} />);
    const button = screen.getByRole('button', { name: /get data/i }); // implicit assertion, we're done!

    // (Act)

    // (Assert that the button is in the DOM)
    expect(button).toBeInTheDocument(); // not strictly necesary because getByRole already asserts that there is one and only one "get data" button in the DOM
});

test("While fetching data, MissionForm component renders a loading message", () => {
    // Arrange
    // render the component, look for a loading message
    render(<MissionForm isFetchingData={true} />);
    const loadingMessage = screen.getByText(/we are fetching data/i); // implicit assertion
    const button = screen.queryByRole('button', { name: /get data/i });

    // (Act)

    // Assert that the loading message is in the DOM, and the get data button is NOT in the DOM
    expect(loadingMessage).toBeInTheDocument(); // not strictly necessary (implicit assertion in getBy)
    expect(button).not.toBeInTheDocument(); // assertion is necesssary in this case
    expect(button).toBeNull();
});

// "Spy" on the getData function to test the event listener
test("MissionForm button calls getData when clicked", () => {
    // Arrange: set up a mock function and pass it to the component as a prop
    const mockGetData = jest.fn(() => { return ("Hi josh") }); // this is a mock function
    render(<MissionForm getData={mockGetData} />);

})