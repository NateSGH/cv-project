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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addWorkExpSection = this.addWorkExpSection.bind(this);
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

  counter() {
    let count = 0;
    return function () {
      return (count += 1);
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }

  addWorkExpSection() {
    console.log('Add clicked');
    return <WorkExp />;
  }

  render() {
    return (
      <div className="App">
        <Header title="CV Application" />
        <div className="main-content">
          <form onSubmit={this.handleSubmit}>
            <div className="genInfo">
              <GeneralInfo
                fullName={this.state.fullName}
                phoneNumber={this.state.phoneNumber}
                email={this.state.email}
                handleInputChange={this.handleInputChange}
              />
            </div>
            <div className="workInfo">
              <h2>Work Experience</h2>
              <WorkExp
              // companyName={this.state.companyName}
              // positionTitle={this.state.positionTitle}
              // workFrom={this.state.workFrom}
              // workTo={this.state.workTo}
              // handleInputChange={this.handleInputChange}
              />
              <button type="button" onClick={this.addWorkExpSection}>
                Add
              </button>
            </div>
            <div>
              <h2>Education Experience</h2>
              <EducationExp
                schoolName={this.state.schoolName}
                studyTitle={this.state.studyTitle}
                studyFrom={this.state.studyFrom}
                studyTo={this.state.studyTo}
                handleInputChange={this.handleInputChange}
              />
              <button type="button">Add</button>
            </div>
            <button type="submit">Submit</button>
          </form>
          <p>{this.state.fullName}</p>
        </div>
      </div>
    );
  }
}

export default App;
