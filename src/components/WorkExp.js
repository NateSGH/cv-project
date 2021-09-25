import React from 'react';

function WorkExp(props) {
  return (
    <div>
      <label>
        Company Name:
        <input
          name="companyName"
          type="text"
          value={props.companyName}
          placeholder="Enter your company name"
          onChange={props.handleInputChange}
        ></input>
      </label>

      <label>
        Position Title:
        <input
          name="positionTitle"
          type="text"
          value={props.positionTitle}
          placeholder="Enter your position title"
          onChange={props.handleInputChange}
        ></input>
      </label>

      <label>
        From:
        <input
          name="workFrom"
          type="text"
          value={props.workFrom}
          onChange={props.handleInputChange}
        ></input>
      </label>

      <label>
        To:
        <input
          name="workTo"
          type="text"
          value={props.workTo}
          onChange={props.handleInputChange}
        ></input>
      </label>
    </div>
  );
}

export default WorkExp;
