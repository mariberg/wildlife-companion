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

 
export const birdData = [
  {
    id: 1,
    name: 'Betty',
    scientificName: 'Vanellus gregarius',
    conversationStatus: status[0],
    lat: 48.86,
    lng: 2.3522,
    image: 'https://s3-alpha-sig.figma.com/img/b957/2b7b/7e140c3d4688e5cccafb4ebe51e9f9ee?Expires=1693180800&Signature=XYoR~tFpEFkwQGshXQ4qeH88qVhRNxvFvb42Km9lLUoNMoFVMFylA7-jQlS9UOq4GQsZh-pLKMwY1SVBEaeyuVtneViDKM8uWzh~QTGCsk4aY7bdvZK4Ptih8da8XLCJQjLWKCFhlZWt39xVQwNppVpYHtkD3SGjquRDZhlLi365juv8E0EG63NstK9uKsv-aoNMf3Sux7lzfE1slr11OILqQQAGYqGrdtpxhTmwaDITZ9~COv1SdR7fOGreUwOb~7hLQQg74pibzc0TYVMm6FiTUM7pJXVjmR-S8cOgdI8PXsstICzRUH97w996PiJYlfH53tUs~j03gJVn-gatmA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    description: 'The sociable lapwing, referred to as the sociable plover in the UK, is a wader in the plover family. It is a fully migratory bird, breeding in Kazakhstan and wintering in the Middle East, Indian Subcontinent, and Sudan. Historical literature referred to this bird as the Black-bellied lapwing.',
  },
  {
    id: 2,
    name: 'Anna',
    scientificName: 'Vanellus gregarius',
    conversationStatus: status[2],
    lat: 48.85,
    lng: 2.3522,
    image: 'https://s3-alpha-sig.figma.com/img/61a3/b552/188a23339fc9b16ff725817722ce82c2?Expires=1693180800&Signature=L79479cnN6Sbr1tk6lvBAdt76opIW3JxmrX0h-cVGAEwROsSVBttZUwLGPdMlIbGI1WaSctw7Td0ddk4MyPhXUO~VklXDTWqiLDvr4wxGT5Fq~J~txsaZLXyvK8EGARqMektvtpwwAPeizGBOxBv8duE7gQfocfIu9uSXMxOI6-ZXNXvR6NgZn7GYZRBfyDWXFdO8l79OlkCol9agHqucq8yEkQN9jUZMP2eskZqqqKPOoe0smnh2ntw2uTiP65PWJm9-pIhl-xiUd1Dbegf1o7iQJFNqXv~aOUTL6uCglgN7CVfbcyJM0O8sP9~t8YflYEqcXtgAOlBNX3cQJV9~A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    description: 'Description for Bird 2.',
  },
  {
    id: 3,
    name: 'Kitty',
    scientificName: 'Vanellus gregarius',
    conversationStatus: status[0],
    lat: 48.855,
    lng: 2.34,
    image: 'https://s3-alpha-sig.figma.com/img/df32/47a6/d5a3d50e77327647568af0d1d436028c?Expires=1693180800&Signature=O2E1FWmYdUK305yKcQItM0gTaoFbf1sE5HY0ahqtGkr-gXkQtLa~~Tttji6hzMcHUfbl9f64TT6l34oUorD5uHAc3fh9uvJtrQ4l9mXlIQsXcrWGycBieOkQAjldcTH0d-QkfrmGzwToCGFxEZEzoZn15HM0A3lkf-XGZGQ-RPPtzUQ~Kkzdf~dhyE-adTmHM8C0x48B1xmjojFYdvNiHUs3pMoitfwd32RVMr0jH2vTmlQzW3FA0Y95~eIqYaeICHtTVzRgWEE9q5pILMI0Eczl69SzUh8mpueYaRVKMV7JtOo-7MEDzyJz~AFJYk8pXsw7cBSlIVx4eJQ3QgGeRg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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

const BirdMap = () => {
  const [selectedBird, setSelectedBird] = useState(null);
  const [birdLong, setBirdLong] = useState([]);
  const [birdLat, setBirdLat] = useState([]);



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