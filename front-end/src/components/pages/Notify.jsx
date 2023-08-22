



const Notify = () => {

  useEffect(() => {
    // Define a function to fetch bird data from the API
    const fetchBirdData = async () => {
      try {
        const response = await axios.get('https://qnildvwtq7.execute-api.eu-west-2.amazonaws.com/dev');
        const apiBirdData = response.data;

        // Extract latitude and longitude from the API response
        const latitudes = apiBirdData.map(bird => bird.latitude);
        const longitudes = apiBirdData.map(bird => bird.longitude);

          console.log(latitudes);
          console.log(longitudes);
        // Update the state with the fetched data
        // setBirdLat(latitudes);
        // setBirdLong(longitudes);
      } catch (error) {
        console.error('Error fetching bird data:', error);
      }
    };

    // Call the function to fetch bird data when the component mounts
    fetchBirdData();
  }, []); 
    return (
        <div>
            Notify
        </div>
    )


}

export default Notify