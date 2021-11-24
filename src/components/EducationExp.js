import React from 'react';

function EducationExp(props) {
  return (
    <div>
      <label>
        School Name:
        <input
          name="schoolName"
          type="text"
          value={props.schoolName}
          placeholder="Enter your school name"
          onChange={props.handleInputChange}
        ></input>
      </label>

      <label>
        Title of Study:
        <input
          name="studyTitle"
          type="text"
          value={props.studyTitle}
          placeholder="Enter your title of study"
          onChange={props.handleInputChange}
        ></input>
      </label>

      <label>
        From:
        <input
          name="studyFrom"
          type="text"
          value={props.studyFrom}
          onChange={props.handleInputChange}
        ></input>
      </label>

      <label>
        To:
        <input
          name="studyTo"
          type="text"
          value={props.studyTo}
          onChange={props.handleInputChange}
        ></input>
      </label>

      <button>Delete</button>
    </div>
  );
}

export default EducationExp;
