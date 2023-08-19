import React from 'react';
import { ArrowRightOutlined } from '@ant-design/icons';
import { FeedData } from './data/FeedData';

const Activity = () => {
  return (
    <div className='feeds'>
      {FeedData.map((item, index) => (
        <div className="activity-feed" key={index} style={{ borderBottom: "1px solid rgba(0, 0, 0, 0.10)", marginBottom: "50px", lineHeight: "15px" }}>
          <p className="feed-time">{item.time}</p>
          <p className="feed-title">{item.title}</p>
          <div className='feed-description' style={{ paddingTop: "10px", paddingBottom: "10px" }}>
            <p className="feed-content">
              {item.description}
            </p>
            <a href={"/map"} style={{ marginTop: "10px", display: "inline-block" }}>View location <ArrowRightOutlined /></a>
          </div>
        </div>
      ))}
    </div>

  );
};

export default Activity;
