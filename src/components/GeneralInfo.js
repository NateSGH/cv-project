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
          onChange={props.handleInputChange.bind(this)}
        />
      </label>

      <label>
        Phone Number:
        <input
          name="phoneNumber"
          type="tel"
          value={props.phoneNumber}
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          placeholder="Enter your phone number"
          onChange={props.handleInputChange.bind(this)}
        />
      </label>

      <label>
        Email:
        <input
          name="email"
          type="email"
          value={props.email}
          placeholder="Enter your email"
          onChange={props.handleInputChange.bind(this)}
        />
      </label>
    </div>
  );
}

export default GeneralInfo;
