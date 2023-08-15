//This code generates a 'route' of five different coordinates that the birds have flown within the last 24 hours

export const handler = async (event) => {
    try {
        // Specify the latitude and longitude range
        const minLatitude = 25.80; // Minimum latitude
        const maxLatitude = 27.20; // Maximum latitude
        const minLongitude = 54.30; // Minimum longitude
        const maxLongitude = 74.30; // Maximum longitude
        
        // Initialize an array to store the coordinates
        const coordinates = [];
        
        // Generate the first random coordinates within the specified range
        const randomLatitude = Math.random() * (maxLatitude - minLatitude) + minLatitude;
        const randomLongitude = Math.random() * (maxLongitude - minLongitude) + minLongitude;
        
        // Push the first random coordinate to the array
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
        
        // Return the array of coordinates
        const response = {
            statusCode: 200,
            body: JSON.stringify(coordinates)
        };
        
        return response;
    } catch (error) {
        // Handle errors
        const response = {
            statusCode: 500,
            body: JSON.stringify({ error: "Internal Server Error" })
        };
        
        return response;
    }
};
