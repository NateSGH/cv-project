import React from 'react';

class GeneralInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: '',
      phoneNumber: '',
      email: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
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

  render() {
    if (this.props.submitted) {
      return (
        <div className="general-info">
          <p className="full-name">{this.state.fullName}</p>
          <p className="phone">
            <i className="fas fa-phone-alt"></i> {this.state.phoneNumber}
          </p>
          <p className="email">
            <i className="far fa-envelope"></i> {this.state.email}
          </p>
        </div>
      );
    }
    return (
      <div className="general-info">
        <label htmlFor="full-name">Full Name:</label>
        <input
          id="full-name"
          name="fullName"
          type="text"
          value={this.state.fullName}
          placeholder="Enter your full name"
          required
          onChange={this.handleInputChange}
        />

        <label htmlFor="phone-num">Phone Number:</label>
        <input
          id="phone-num"
          name="phoneNumber"
          type="tel"
          value={this.state.phoneNumber}
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          placeholder="123-456-7890"
          onChange={this.handleInputChange}
        />

        <label htmlFor="email">Email: </label>
        <input
          id="email"
          name="email"
          type="email"
          value={this.state.email}
          placeholder="Enter your email"
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default GeneralInfo;
