// this function creates and returns the random coordinates

export const handler = async (event) => {
    try {
        // Specify the latitude and longitude range
        const minLatitude = 7.91; // Minimum latitude
        const maxLatitude = 3.76; // Maximum latitude
        const minLongitude = 9.80; // Minimum longitude
        const maxLongitude = 14.50; // Maximum longitude
        
        // Generate random coordinates within the specified range
        const randomLatitude = Math.random() * (maxLatitude - minLatitude) + minLatitude;
        const randomLongitude = Math.random() * (maxLongitude - minLongitude) + minLongitude;
        
        // Return the randomized coordinates
        const response = {
            statusCode: 200,
            body: JSON.stringify({ latitude: randomLatitude, longitude: randomLongitude })
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
