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
                mission_id: "F4F83DE",
                manufacturers: [
                    "SSL"
                ],
                payload_ids: [
                    "Telstar 19V",
                    "Telstar 18V"
                ],
                wikipedia: "https://en.wikipedia.org/wiki/Telesat",
                website: "https://www.telesat.com/",
                twitter: null,
                description: "Telstar 19V (Telstar 19 Vantage) is a communication satellite in the Telstar series of the Canadian satellite communications company Telesat. It was built by Space Systems Loral (MAXAR) and is based on the SSL-1300 bus. As of 26 July 2018, Telstar 19V is the heaviest commercial communications satellite ever launched, weighing at 7,076 kg (15,600 lbs) and surpassing the previous record, set by TerreStar-1 (6,910 kg/15230lbs), launched by Ariane 5ECA on 1 July 2009."
            },
            {
                mission_name: "Iridium NEXT",
                mission_id: "F3364BF",
                manufacturers: [
                    "Orbital ATK"
                ],
                payload_ids: [
                    "Iridium NEXT 1",
                    "Iridium NEXT 2",
                    "Iridium NEXT 3",
                    "Iridium NEXT 4",
                    "Iridium NEXT 5",
                    "Iridium NEXT 6",
                    "Iridium NEXT 7",
                    "Iridium NEXT 8"
                ],
                wikipedia: "https://en.wikipedia.org/wiki/Iridium_satellite_constellation",
                website: "https://www.iridiumnext.com/",
                twitter: "https://twitter.com/IridiumBoss?lang=en",
                description: "In 2017, Iridium began launching Iridium NEXT, a second-generation worldwide network of telecommunications satellites, consisting of 66 active satellites, with another nine in-orbit spares and six on-ground spares. These satellites will incorporate features such as data transmission that were not emphasized in the original design. The constellation will provide L-band data speeds of up to 128 kbit/s to mobile terminals, up to 1.5 Mbit/s to Iridium Pilot marine terminals, and high-speed Ka-band service of up to 8 Mbit/s to fixed/transportable terminals. The next-generation terminals and service are expected to be commercially available by the end of 2018. However, Iridium's proposed use of its next-generation satellites has raised concerns the service will harmfully interfere with GPS devices. The satellites will incorporate a secondary payload for Aireon, a space-qualified ADS-B data receiver. This is for use by air traffic control and, via FlightAware, for use by airlines. A tertiary payload on 58 satellites is a marine AIS ship-tracker receiver, for Canadian company exactEarth Ltd. Iridium can also be used to provide a data link to other satellites in space, enabling command and control of other space assets regardless of the position of ground stations and gateways."
            },
            {
                mission_name: "AsiaSat",
                mission_id: "593B499",
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
        expect(screen.getAllByTestId("mission")).toHaveLength(10);
    })
})
