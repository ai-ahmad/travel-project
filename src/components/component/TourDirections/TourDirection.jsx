import React, { useEffect, useState } from "react"; // Import useEffect if needed
import axios from "axios";

const TourDirection = () => {
  const [first, setfirst] = useState({
    img: "",
  });

  const options = {
    method: "GET",
    url: "https://hotels4.p.rapidapi.com/v2/get-meta-data",
    headers: {
      "X-RapidAPI-Key": "839487870emshc8758e4c3d7d657p127af0jsn279921527b78",
      "X-RapidAPI-Host": "hotels4.p.rapidapi.com",
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request(options);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []); // Use useEffect if this is intended for component lifecycle

  return (
    <div>
      <img src="" alt="" />
    </div>
  );
};

export default TourDirection;
