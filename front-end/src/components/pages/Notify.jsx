
import React, { useState, useEffect } from "react";
const Notify = () => {

  const [coordinates, setCoordinates] = useState([]);
  useEffect(() => {
    // Define a function to fetch bird data from the API
   fetch("https://6wu36vx0al.execute-api.eu-west-2.amazonaws.com")
   .then(response => response.json())
   .then(data => 
      {
       setCoordinates(data);
       data.map((coord, index) => 
       console.log(coord.latitude, coord.longitude)
       )
      }
   )
   .catch(error => console.log(error));

    // Call the function to fetch bird data when the component mounts
   
  }, []); 
    return (
      <div>
      <h1>Coordinates</h1>
      <ul>
        {coordinates.map((coord, index) => (
          <li key={index}>
            Latitude: {coord.latitude}, Longitude: {coord.longitude}
          </li>
        ))}
      </ul>
      </div>
      )


}

export default Notify;

