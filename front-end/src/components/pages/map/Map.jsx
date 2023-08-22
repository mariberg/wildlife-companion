// import React, { useState,useEffect } from 'react';
// import axios from 'axios';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import BirdInfoPanel from './BirdInfoPanel';
// import './MapCards.css';
// import { useSpring, animated } from 'react-spring';
// import  {birdData}  from '../../data/BirdData';

// // import Icon from '@ant-design/icons/lib/components/Icon';
 
// const BirdMap = () => {
//   const [selectedBird, setSelectedBird] = useState(null);
//   const [birdLong, setBirdLong] = useState([]);
//   const [birdLat, setBirdLat] = useState([]);


//     const [slideProps, setSlide] = useSpring(() => ({
//     transform: 'translateX(0px)',
//   }));
  
//   const handleMarkerClick = (bird) => {
//     setSelectedBird(bird);
//   };


//   useEffect(() => {
//     setSlide({ transform: `translateX(0px)` });
//   }, [selectedBird]);

//   const handleSlide = (direction) => {
//     const cardWidth = 240; // Adjust this width as needed
//     const totalCards = birdData.length;
//     const maxWidth = cardWidth * (totalCards - 1);
//     let newTranslateX = slideProps.transform[0] + direction * cardWidth;
//     newTranslateX = Math.max(-maxWidth, Math.min(0, newTranslateX));
//     setSlide({ transform: `translateX(${newTranslateX}px)` });
//   };

//     // TODO: ERROR: CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.



    

//   return (
//     <div className="bird-map-container">
//       <MapContainer center={[48.8566, 2.3522]} zoom={13} style={{ height: '100%' }}>
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         {birdData.map(bird => (
//           <Marker
//             key={bird.id}
//             position={[bird.lat, bird.lng]}
//             icon={L.divIcon({
//               className: 'bird-marker',
//               html: `<div class="bird-image"><img src="${bird.image}" alt="${bird.name}" /></div>`,
//               iconSize: [35, 35],
//             })}
//             onClick={() => setSelectedBird(bird)}
//           >
//                  <Popup>
//               <div className="popup-content">
//                 <h4>{bird.name}</h4>
//                 <p>{bird.scientificName}</p>
//               </div>
//             </Popup>
//           </Marker>
//         ))}
//       </MapContainer>
     
//       <div className="bird-cards">
//       <div className="slider-container">
//         <animated.div className="cards-slider" style={{ transform: slideProps.transform }}>
//           {birdData.map((bird) => (
//             <div
//               className={`bird-polaroid ${selectedBird === bird ? 'active' : ''}`}
//               key={bird.id}
//               onClick={() => handleMarkerClick(bird)}
//             >
//               <img src={bird.image} alt={bird.name} style={{ width: '100%' }} />
//               <div className="bird-card">
//                 <h3>{bird.name}</h3>
//                 <p style={{color:'#13B156', fontSize:'0.7rem'}}>Learn more about me</p>
//               </div>
//             </div>
//           ))}
//         </animated.div>
//       </div>
//       <div className="slider-controls">
//            <button onClick={() => handleSlide(1)}>&lt;</button>
//            <button onClick={() => handleSlide(-1)}>&gt;</button>
//          </div>
//        </div>

//       <BirdInfoPanel bird={selectedBird} onClose={() => setSelectedBird(null)} />
//     </div>
//   );
// };

// export default BirdMap;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, Circle, Popup, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import BirdInfoPanel from './BirdInfoPanel';
import './MapCards.css';
import { useSpring, animated } from 'react-spring';
import { birdData } from '../../data/BirdData';

const BirdMap = () => {
  const [selectedBird, setSelectedBird] = useState(null);
  const [birdCoordinates, setBirdCoordinates] = useState([]);

  const [slideProps, setSlide] = useSpring(() => ({
    transform: 'translateX(0px)',
  }));

  const handleMarkerClick = (bird) => {
    setSelectedBird(bird);
  };

  useEffect(() => {
    setSlide({ transform: 'translateX(0px)' });
  }, [selectedBird]);

  const handleSlide = (direction) => {
    const cardWidth = 240; // Adjust this width as needed
    const totalCards = birdCoordinates.length;
    const maxWidth = cardWidth * (totalCards - 1);
    let newTranslateX = slideProps.transform[0] + direction * cardWidth;
    newTranslateX = Math.max(-maxWidth, Math.min(0, newTranslateX));
    setSlide({ transform: `translateX(${newTranslateX}px)` });
  };

      useEffect(() => {
        // Define a function to fetch bird data from the API
       fetch("https://6wu36vx0al.execute-api.eu-west-2.amazonaws.com")
       .then(response => response.json())
       .then(data => 
          {
            console.log(data);
            setBirdLong(data.map(bird => bird.longitude));
            setBirdLat(data.map(bird => bird.latitude));
          }
       )
       .catch(error => console.log(error));
    
        // Call the function to fetch bird data when the component mounts
       
      }, []); 
     

    

  return (
    <div className="bird-map-container">
      <MapContainer center={[48.8566, 2.3522]} zoom={13} style={{ height: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {birdData.map(bird => (
          <Marker
            key={bird.id}
            position={[bird.latitude, bird.longitude]}
            icon={L.divIcon({
              className: 'bird-marker',
              html: `<div class="bird-image"><img src="${bird.image}" alt="${bird.name}" /></div>`,
              iconSize: [35, 35],
            })}
            onClick={() => handleMarkerClick(bird)}
          >
            <Popup>
              <div className="popup-content">
                <h4>{bird.name}</h4>
                <p>{bird.scientificName}</p>
                <p>{bird.latitude.toFixed(2)}, {bird.longitude.toFixed(2)}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
     
      <div className="bird-cards">
        <div className="slider-container">
          <animated.div className="cards-slider" style={{ transform: slideProps.transform }}>
            {birdData.map((bird) => (
              <div
                className={`bird-polaroid ${selectedBird === bird ? 'active' : ''}`}
                key={bird.id}
                onClick={() => handleMarkerClick(bird)}
              >
                <img src={bird.image} alt={bird.name} style={{ width: '100%' }} />
                <div className="bird-card">
                  <h3>{bird.name}</h3>
                  <p style={{ color: '#13B156', fontSize: '0.7rem' }}>Learn more about me</p>
                </div>
              </div>
            ))}
          </animated.div>
        </div>
        <div className="slider-controls">
          <button onClick={() => handleSlide(1)}>&lt;</button>
          <button onClick={() => handleSlide(-1)}>&gt;</button>
        </div>
      </div>
      <BirdInfoPanel bird={selectedBird} onClose={() => setSelectedBird(null)} />
    </div>
  );
};

export default BirdMap;
