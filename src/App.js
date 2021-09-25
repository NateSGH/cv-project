import Header from './components/Header';
import GeneralInfo from './components//GeneralInfo';
import WorkExp from './components/WorkExp';
import EducationExp from './components/EducationExp';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: '',
      phoneNumber: '',
      email: '',
      companyName: '',
      positionTitle: '',
      workFrom: '',
      workTo: '',
      schoolName: '',
      studyTitle: '',
      studyFrom: '',
      studyTo: '',
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
            <h2>Work Experience</h2>
            <WorkExp
              companyName={this.state.companyName}
              positionTitle={this.state.positionTitle}
              workFrom={this.state.workFrom}
              workTo={this.state.workTo}
              handleInputChange={this.handleInputChange}
            />
            <h2>Education Experience</h2>
            <EducationExp
              schoolName={this.state.schoolName}
              studyTitle={this.state.studyTitle}
              studyFrom={this.state.studyFrom}
              studyTo={this.state.studyTo}
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
