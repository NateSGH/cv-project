import Header from './components/Header';
import GeneralInfo from './components//GeneralInfo';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: '',
      phoneNumber: '',
      email: '',
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="App">
        <Header title="CV Application" />
        <div className="main-content">
          <form>
            <GeneralInfo
              fullName={this.state.fullName}
              phoneNumber={this.state.phoneNumber}
              email={this.state.email}
              handleInputChange={this.handleInputChange}
            />
          </form>
          <p>{this.state.fullName}</p>
        </div>
      </div>
    );
  }
}

export default App;
