import axios from "axios";

const fetchMissions = () => {
  return axios
    .get("https://api.spacexdata.com/v3/missions")
    .then(res => {
      console.log(res);
      return res;
    })
    .catch(err => {
      console.error("error fetching data from api, err: ", err.message);
      return err;
    });
};

export default fetchMissions;