import React from 'react';
// import './styles/GeneralInfo.css';

function GeneralInfo(props) {
  return (
    <div className="general-info">
      <label htmlFor="full-name">Full Name:</label>
      <input
        id="full-name"
        name="fullName"
        type="text"
        value={props.fullName}
        placeholder="Enter your full name"
        onChange={props.handleInputChange}
      />

      <label htmlFor="phone-num">Phone Number:</label>
      <input
        id="phone-num"
        name="phoneNumber"
        type="tel"
        value={props.phoneNumber}
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        placeholder="123-456-7890"
        onChange={props.handleInputChange}
      />

      <label htmlFor="email">Email: </label>
      <input
        id="email"
        name="email"
        type="email"
        value={props.email}
        placeholder="Enter your email"
        onChange={props.handleInputChange}
      />
    </div>
  );
}

export default GeneralInfo;
