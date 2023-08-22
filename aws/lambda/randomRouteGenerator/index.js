//This code generates a mock 'route' of five different coordinates that the birds have flown within the last 24 hours

exports.handler = async (event) => {
    try {
        // Specify the latitude and longitude range
        const minLatitude = 25.80; // Minimum latitude
        const maxLatitude = 27.20; // Maximum latitude
        const minLongitude = 54.30; // Minimum longitude
        const maxLongitude = 74.30; // Maximum longitude
        
        const coordinates = [];
        
        const randomLatitude = Math.random() * (maxLatitude - minLatitude) + minLatitude;
        const randomLongitude = Math.random() * (maxLongitude - minLongitude) + minLongitude;
        
        coordinates.push({ latitude: randomLatitude, longitude: randomLongitude });
        
        // Generate and push the next 4 coordinates
        for (let i = 0; i < 4; i++) {
            const prevLatitude = coordinates[i].latitude;
            const prevLongitude = coordinates[i].longitude;
            
            const deltaLatitude = Math.random() * (0.10 - 0.01) + 0.01;
            const deltaLongitude = Math.random() * (0.10 - 0.01) + 0.01;
            
            const newLatitude = prevLatitude + deltaLatitude;
            const newLongitude = prevLongitude + deltaLongitude;
            
            coordinates.push({ latitude: newLatitude, longitude: newLongitude });
        }

           const response = {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "https://wildlife-campanion.web.app",
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Methods": "GET, OPTIONS"
            },
            body: JSON.stringify(coordinates)
        };

        return response; 
    } catch (error) {
        console.error("An error occurred:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Internal Server Error" })
        };
    }
};
