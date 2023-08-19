import React from 'react';
import { ArrowRightOutlined } from '@ant-design/icons';
import { FeedData } from './FeedData';

 const Activity = () => {
  return (
    <div className='feeds'>
      {FeedData.map((item, index) => (
        <div className="activity-feed" key={index} style={{borderBottom:"1px solid rgba(0, 0, 0, 0.10)", marginBottom:"40x", lineHeight:"10px"}}>
          <p className="feed-time">{item.time}</p>
          <p className="feed-title">{item.title}</p>
          <div className='feed-description'>
            <p className="feed-content">
              {item.description}
            </p>
            <a href={"/map"}>View location <ArrowRightOutlined/></a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Activity;
