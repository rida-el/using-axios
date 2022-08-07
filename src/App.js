import react, { useEffect } from "react";
import axios from "axios";
import "./App.css";

const fetchdata = () => {
  return axios
    .get("https://62eeefbcf5521ecad57c88cd.mockapi.io/projects")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });
};

function App() {
  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <div className="App">
      <h1>Using axios for fetching data from api</h1>
    </div>
  );
}

export default App;
