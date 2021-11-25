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
      <div>
        <label>
          Company Name:
          <input
            name="companyName"
            type="text"
            value={this.state.companyName}
            placeholder="Enter your company name"
            onChange={this.handleInputChange}
          ></input>
        </label>

        <label>
          Position Title:
          <input
            name="positionTitle"
            type="text"
            value={this.state.positionTitle}
            placeholder="Enter your position title"
            onChange={this.handleInputChange}
          ></input>
        </label>

        <label>
          From:
          <input
            name="workFrom"
            type="text"
            value={this.state.workFrom}
            onChange={this.handleInputChange}
          ></input>
        </label>

        <label>
          To:
          <input
            name="workTo"
            type="text"
            value={this.state.workTo}
            onChange={this.handleInputChange}
          ></input>
        </label>

        <button type="button" onClick={this.handleDeletion}>
          Delete
        </button>
      </div>
    );
  }
}

export default WorkExp;
