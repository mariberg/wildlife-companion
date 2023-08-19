import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import BirdInfoPanel from './BirdInfoPanel';
import './MapCards.css';
import { useSpring, animated } from 'react-spring';

// import Icon from '@ant-design/icons/lib/components/Icon';
const status =[
  'Critically Endangered',
  'Endangered',
  'Vulnerable',
  'Near Threatened',
  'Least Concern',
];

 


const BirdMap = () => {
  const [selectedBird, setSelectedBird] = useState(null);
  const [birdLong, setBirdLong] = useState([]);
  const [birdLat, setBirdLat] = useState([]);




const birdData = [
  {
    id: 1,
    name: 'Betty',
    scientificName: 'Vanellus gregarius',
    conversationStatus: status[0],
    lat: 48.86,
    lng: 2.3522,
    image: 'https://i.pinimg.com/originals/8d/52/50/8d525006da7ce2d9c5e4a4c419806396.jpg',
    description: 'The sociable lapwing, referred to as the sociable plover in the UK, is a wader in the plover family. It is a fully migratory bird, breeding in Kazakhstan and wintering in the Middle East, Indian Subcontinent, and Sudan. Historical literature referred to this bird as the Black-bellied lapwing.',
  },
  {
    id: 2,
    name: 'Anna',
    scientificName: 'Vanellus gregarius',
    conversationStatus: status[2],
    lat: 48.85,
    lng: 2.3522,
    image: 'https://beachbaby.net/wp-content/uploads/2018/08/bird-black-fronted-tern.jpg',
    description: 'Description for Bird 2.',
  },
  {
    id: 3,
    name: 'Kitty',
    scientificName: 'Vanellus gregarius',
    conversationStatus: status[0],
    lat: 48.855,
    lng: 2.34,
    image: 'https://keolamagazine.com/wp-content/uploads/2019/08/endangered-birds-3-1024x773.jpg',
    description: 'Description for Bird 2.',
  },
  {
    id: 4,
    name: 'Amanda',
    scientificName: 'Vanellus gregarius',
    conversationStatus: status[0],
    lat:48.87,
    lng: 2.3001,
    image: 'http://indiasendangered.com/wp-content/uploads/2014/01/The-Endangered-Crimson-backed-Sunbird-was-seen-at-Chandoli-National-Park.jpg',
    description: 'Description for Bird 2.',
  },
  {
    id: 5,
    name: 'Jess',
    scientificName: 'Vanellus gregarius',
    conversationStatus: status[1],
    lat:48.97,
    lng: 2.3001,
    image: 'https://www.treehugger.com/thmb/-zUa4yqjs3WyyFkIq91qXJUJE-M=/1024x768/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__treehugger__images__2013__08__scrubjay-24a4199239484d52b0274ba8268810bb.jpg',
    description: 'Description for Bird 2.',
  },
  // ... add more bird data
];

    const [slideProps, setSlide] = useSpring(() => ({
    transform: 'translateX(0px)',
  }));
  
  const handleMarkerClick = (bird) => {
    setSelectedBird(bird);
  };

  // useEffect(() => {
  //   // Define a function to fetch bird data from the API
  //   const fetchBirdData = async () => {
  //     try {
  //       const response = await axios.get('https://qnildvwtq7.execute-api.eu-west-2.amazonaws.com/dev');
  //       // Assuming the API response is an array of objects with 'latitude' and 'longitude' properties
  //       const apiBirdData = response.data;

  //       // Extract latitude and longitude from the API response
  //       const latitudes = apiBirdData.map(bird => bird.latitude);
  //       const longitudes = apiBirdData.map(bird => bird.longitude);
  //         console.log(latitudes);
  //         console.log(longitudes);
  //       // Update the state with the fetched data
  //       setBirdLat(latitudes);
  //       setBirdLong(longitudes);
  //     } catch (error) {
  //       console.error('Error fetching bird data:', error);
  //     }
  //   };

  //   // Call the function to fetch bird data when the component mounts
  //   fetchBirdData();
  // }, []); 

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
            position={[bird.lat, bird.lng]}
            icon={L.divIcon({
              className: 'bird-marker',
              html: `<div class="bird-image"><img src="${bird.image}" alt="${bird.name}" /></div>`,
              iconSize: [35, 35],
            })}
            onClick={() => setSelectedBird(bird)}
          >
                 <Popup>
              <div className="popup-content">
                <h4>{bird.name}</h4>
                <p>{bird.scientificName}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
     
      <div className="bird-cards">
        <animated.div className="cards-slider" style={slideProps}>
          {birdData.map((bird) => (
            <div
              className={`bird-polaroid ${selectedBird === bird ? 'active' : ''}`}
              key={bird.id}
              onClick={() => handleMarkerClick(bird)}
            >
              <img src={bird.image} alt={bird.name} style={{ width: '100%' }} />
              <div className="bird-card">
                <h3>{bird.name}</h3>
                <p style={{color:'#13B156', fontSize:'0.7rem'}}>Learn more about me</p>
              </div>
            </div>
          ))}
        </animated.div>
      </div>
     
      <BirdInfoPanel bird={selectedBird} onClose={() => setSelectedBird(null)} />
    </div>
  );
};

export default BirdMap;