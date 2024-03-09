import React from 'react';
import '../style/Icon.css';

const Icon = ({ user }) => {
  return (
    <div>
      <button className="icon-button">
        <img src="/user_little.png" alt="user-icon" />
        <p className="icon-p">
          <b>{user}</b>
        </p>
      </button>
    </div>
  );
};

export default Icon;
