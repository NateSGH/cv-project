import React from 'react';

function GeneralInfo(props) {
  return (
    <div className="general-info">
      <label>
        Full Name:
        <input
          name="fullName"
          type="text"
          value={props.fullName}
          placeholder="Enter your full name"
          onChange={props.handleInputChange}
        />
      </label>

      <label>
        Phone Number:
        <input
          name="phoneNumber"
          type="tel"
          value={props.phoneNumber}
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          placeholder="123-456-7890"
          onChange={props.handleInputChange}
        />
      </label>

      <label>
        Email:
        <input
          name="email"
          type="email"
          value={props.email}
          placeholder="Enter your email"
          onChange={props.handleInputChange}
        />
      </label>
    </div>
  );
}

export default GeneralInfo;
