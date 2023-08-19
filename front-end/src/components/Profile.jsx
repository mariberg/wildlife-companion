import React from 'react';
import { ArrowRightOutlined } from '@ant-design/icons';
import './Profile.css';
import { FeedData } from './FeedData';


const Profile = () => {
    const userInfo = {
        username: '@johndoe',
        profileIcon: 'https://images.pexels.com/photos/2078467/pexels-photo-2078467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        adoptionsYear: 5,
        adoptionsAllTime: 20,
        conservationRank: 'Gold',
    };

    const distinctData = [];
    const seenNames = new Set();

    FeedData.forEach((bird) => {
        if (!seenNames.has(bird.name)) {
            distinctData.push(bird);
            seenNames.add(bird.name);
        }
    });

    const adoptionsData = distinctData.filter(bird => ["Betty", "Anna", "Jess"].includes(bird.name));

    return (
        <div className="profile-container">
            <h1 className="main-title" style={{ textAlign: 'left' }}>{userInfo.username}</h1>

            <div className="profile-info">
                <div className="profile-icon">
                    <img src={userInfo.profileIcon} alt="User Profile" />
                </div>
                <h2>{userInfo.username}</h2>
                <button className="edit-profile-button">Edit Profile</button>
            </div>

            <div className="adoption-summary">
                <h2 className="adoption-title">Number of Adoptions</h2>
                <div className="adoption-cards">
                    <div className="adoption-card year">
                        <p className="adoption-subtitle">This Year</p>
                        <p className="adoption-value-large">{userInfo.adoptionsYear}</p>
                    </div>
                    <div className="adoption-card all-time">
                        <p className="adoption-subtitle">All Time</p>
                        <p className="adoption-value-large">{userInfo.adoptionsAllTime}</p>
                    </div>
                    <div className={`conservation-rank-card ${userInfo.conservationRank.toLowerCase()}`}>
                        <p className="adoption-subtitle">Conservation Rank</p>
                        <p className="adoption-value-large">{userInfo.conservationRank}</p>
                    </div>
                </div>
            </div>

            <h2>Adoptions</h2>
            <div className="adoptions">
                {adoptionsData.map((bird, index) => (
                    <div key={index} className="adoption-card">
                        <img src={bird.image} alt={bird.name} style={{ borderRadius: '10px' }} />
                        <h4>{bird.name}</h4>
                        <p id="status"><b>Status: {bird.status}</b></p>
                        <a href="/map">View on Map <ArrowRightOutlined /></a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Profile;
