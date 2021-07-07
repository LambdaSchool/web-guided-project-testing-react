import React, { useState } from "react";

import fetchMissions from "./api/fetchMissions";

import MissionForm from "./components/MissionForm";
import MissionsList from "./components/MissionsList";

export default function App() {
  const [isFetchingData, setIsFetchingData] = useState(false);
  const [error, setError] = useState("");
  const [missions, setMissions] = useState([]);

  const getData = () => {
    setIsFetchingData(true);
    fetchMissions()
      .then(res => {
        setIsFetchingData(false);
        setMissions(res.data);
      })
      .catch(err => {
        setIsFetchingData(false);
        setError(err.message);
      });
  };
  return (
    <div className="App">
      <h1>Space Missions</h1>
      <MissionForm getData={getData} isFetchingData={isFetchingData} />
      <MissionsList error={error} missions={missions} />
    </div>
  );
}
