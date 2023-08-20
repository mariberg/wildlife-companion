import React from 'react';
import PropTypes from 'prop-types';
import {CloseOutlined } from '@ant-design/icons';
import './BirdInfo.css';

const BirdInfoPanel = ({ bird, onClose }) => {
  if (!bird) {
    return null;
  }

  return (
<div className="bird-info-panel">
  <button className="close-button" onClick={onClose}>
    <CloseOutlined />
  </button>
  <div className="bird-info-content">
    <img src={bird.image} alt={bird.name} />
    <h3>{bird.name}</h3>
    <div className="info-section">
      <h4>Scientific Name</h4>
      <p>{bird.scientificName}</p>
    </div>
    <div className="info-section">
      <h4>Conservation Status</h4>
      <p>{bird.conversationStatus}</p>
    </div>
    <div className="description-section">
      <p>{bird.description}</p>
    </div>
  </div>
</div>

  );
};

BirdInfoPanel.propTypes = {
  bird: PropTypes.object,
  onClose: PropTypes.func.isRequired,
};

export default BirdInfoPanel;
