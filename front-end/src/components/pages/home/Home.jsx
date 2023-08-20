import React from 'react';
import './Home.css';
import { FeedData } from '../../data/FeedData';
import Acitivity from './Activity';
import Adopt from '../adopt/Adopt';

const Home = () => {
  return (
    <div className="container">
      <div className="col-1">
        <div className="header">
          <h1>Home</h1>
          <button id="adopt-birds" 
          onClick={() => <Adopt/>}
          >Adopt</button>
        </div>
        {FeedData.map((item, index) => (
          <>
            <div key={index} className="grid">
              <div className="item left">
                <img src={item.image} alt={`Image ${index}`} style={{ borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px' }} />
              </div>
              <div className="item upper_right">
                <img src={item.image} alt={`Image ${index}`} style={{ borderTopRightRadius: '10px' }} />
              </div>
              <div className="item lower_right">
                <img src={item.image} alt={`Image ${index}`} style={{ borderBottomRightRadius: '10px' }} />
              </div>
            </div>
            <div className="feed-text">
              <div className="feed-header">
                <p className="feed-title">{item.title}</p>
                <p className="feed-time">. {item.time}</p>
              </div>
              <div className='feed-description'>
                <p className="feed-content">
                  {item.description}
                </p>
              </div>
            </div>
          </>
        ))}

      </div>

      <div className="col-2">
        <span style={{ fontSize: '25px' }}>Bird's Activity</span>
        <Acitivity />
      </div>
    </div>
  );
};

export default Home;

