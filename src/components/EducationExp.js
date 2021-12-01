import React from 'react';

class EducationExp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      schoolName: '',
      studyTitle: '',
      studyFrom: '',
      studyTo: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleDeletion = this.handleDeletion.bind(this);
  }

  handleInputChange = (event) => {
    console.log(event.target);
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleDeletion = () => {
    this.props.delete('education', this.props.id);
  };

  render() {
    if (this.props.submitted) {
      return (
        <div className="education-exp">
          <div className="education-info-submitted">
            <p className="study-period">
              {this.state.studyFrom}–{this.state.studyTo}
            </p>
            <p className="study-title">{this.state.studyTitle}</p>
            <p className="school-name">{this.state.schoolName}</p>
          </div>
        </div>
      );
    }

    return (
      <div className="education-exp">
        <label htmlFor="school-name">School Name:</label>
        <input
          id="school-name"
          name="schoolName"
          type="text"
          value={this.state.schoolName}
          placeholder="Enter your school name"
          onChange={this.handleInputChange}
        ></input>

        <label htmlFor="study-title">Title of Study:</label>
        <input
          id="study-title"
          name="studyTitle"
          type="text"
          value={this.state.studyTitle}
          placeholder="Enter your title of study"
          onChange={this.handleInputChange}
        ></input>

        <label htmlFor="study-from">From:</label>
        <input
          id="study-from"
          name="studyFrom"
          type="text"
          value={this.state.studyFrom}
          onChange={this.handleInputChange}
        ></input>

        <label htmlFor="study-to">To:</label>
        <input
          id="study-to"
          name="studyTo"
          type="text"
          value={this.state.studyTo}
          onChange={this.handleInputChange}
        ></input>

        <button type="button" className="delete-position-btn" onClick={this.handleDeletion}>
          Delete
        </button>
      </div>
    );
  }
}

export default EducationExp;
