import React from 'react';

class WorkExp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      companyName: '',
      positionTitle: '',
      workFrom: '',
      workTo: '',
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
    this.props.delete(this.props.id);
  };

  render() {
    return (
      <div className="work-exp">
        <label htmlFor="comp-name">Company Name:</label>
        <input
          id="comp-name"
          name="companyName"
          type="text"
          value={this.state.companyName}
          placeholder="Enter your company name"
          onChange={this.handleInputChange}
        ></input>

        <label htmlFor="pos-title">Position Title:</label>
        <input
          id="pos-title"
          name="positionTitle"
          type="text"
          value={this.state.positionTitle}
          placeholder="Enter your position title"
          onChange={this.handleInputChange}
        ></input>

        <label htmlFor="work-from">From:</label>
        <input
          id="work-from"
          name="workFrom"
          type="text"
          value={this.state.workFrom}
          onChange={this.handleInputChange}
        ></input>

        <label htmlFor="work-to">To:</label>
        <input
          id="work-to"
          name="workTo"
          type="text"
          value={this.state.workTo}
          onChange={this.handleInputChange}
        ></input>

        <button type="button" className="delete-section" onClick={this.handleDeletion}>
          Delete
        </button>
      </div>
    );
  }
}

export default WorkExp;
