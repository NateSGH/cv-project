import React from 'react';

function EducationExp(props) {
  return (
    <div className="education-exp">
      <label htmlFor="school-name">School Name:</label>
      <input
        id="school-name"
        name="schoolName"
        type="text"
        value={props.schoolName}
        placeholder="Enter your school name"
        onChange={props.handleInputChange}
      ></input>

      <label htmlFor="study-title">Title of Study:</label>
      <input
        id="study-title"
        name="studyTitle"
        type="text"
        value={props.studyTitle}
        placeholder="Enter your title of study"
        onChange={props.handleInputChange}
      ></input>

      <label htmlFor="study-from">From:</label>
      <input
        id="study-from"
        name="studyFrom"
        type="text"
        value={props.studyFrom}
        onChange={props.handleInputChange}
      ></input>

      <label htmlFor="study-to">To:</label>
      <input
        id="study-to"
        name="studyTo"
        type="text"
        value={props.studyTo}
        onChange={props.handleInputChange}
      ></input>

      <button type="button" className="delete-section">
        Delete
      </button>
    </div>
  );
}

export default EducationExp;
