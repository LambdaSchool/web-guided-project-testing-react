import React from "react";
import { screen, render } from "@testing-library/react";
import MissionsList from "./MissionsList";

// mock data: use some fake data to simulate the behavior of the real api.
// We are testing our app, not testing the external api! 
// So the tests use fake data rather than actualy hitting the API.
const data = [
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
        manufacturers: [
            "SSL"
        ],
        payload_ids: [
            "AsiaSat 8",
            "AsiaSat 6"
        ],
        wikipedia: "https://en.wikipedia.org/wiki/AsiaSat",
        website: "https://www.asiasat.com/",
        twitter: "https://twitter.com/asia_satellite",
        description: "Asia Satellite Telecommunications Holdings Limited known as its brand name AsiaSat is a commercial operator of communication spacecraft. AsiaSat is based in Hong Kong but incorporated in Bermuda."
    },
    {
        mission_name: "Eutelsat",
        mission_id: "F7709F2",
        manufacturers: [
            "Boeing"
        ],
        payload_ids: [
            "Eutelsat 115 West B",
            "Eutelsat 117 West B"
        ],
        wikipedia: "https://en.wikipedia.org/wiki/Eutelsat",
        website: "https://www.eutelsat.com/en/home.html#",
        twitter: "https://twitter.com/Eutelsat_SA?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
        description: "Eutelsat S.A. is a European satellite operator. Providing coverage over the entire European continent, the Middle East, Africa, Asia and the Americas, it is the world's third largest satellite operator in terms of revenues."
    }
];

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
    rerender(<MissionsList missions={data} />)
    const missions = screen.getAllByTestId("mission");
    const mission1 = screen.getByText(/telstar/i);
    const mission2 = screen.getByText(/iridium next/i);
    const mission3 = screen.getByText(/asiasat/i);
    const mission4 = screen.getByText(/eutelsat/i);

    // Assert
    expect(missions).toHaveLength(4);

});
