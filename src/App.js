import Header from './components/Header';
import GeneralInfo from './components//GeneralInfo';
import WorkExp from './components/WorkExp';
import EducationExp from './components/EducationExp';
import React from 'react';
import './styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: '',
      phoneNumber: '',
      email: '',
      workExpComponents: [{ id: 1 }],
      educationExpComponents: [{ id: 1 }],
      isSubmitted: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.addWorkExp = this.addWorkExp.bind(this);
    this.addEducationExp = this.addEducationExp.bind(this);
    this.deleteExp = this.deleteExp.bind(this);
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

  handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
    this.setState({ isSubmitted: true });
  }

  handleEdit() {
    console.log('You clicked edit.');
    this.setState({ isSubmitted: false });
  }

  addWorkExp() {
    this.setState((state) => {
      let componentId = state.workExpComponents[state.workExpComponents.length - 1].id + 1;

      return {
        workExpComponents: state.workExpComponents.concat([{ id: componentId }]),
      };
    });
  }

  addEducationExp() {
    this.setState((state) => {
      let componentId =
        state.educationExpComponents[state.educationExpComponents.length - 1].id + 1;

      return {
        educationExpComponents: state.educationExpComponents.concat([{ id: componentId }]),
      };
    });
  }

  deleteExp = (section, id) => {
    function checkId(component) {
      return component.id === id;
    }

    let stateSection = '';
    this.setState((state) => {
      if (section === 'work') {
        stateSection = state.workExpComponents;
      } else if (section === 'education') {
        stateSection = state.educationExpComponents;
      }
      const index = stateSection.findIndex(checkId);
      const componentsArr = stateSection.slice();
      componentsArr.splice(index, 1);

      if (section === 'work') {
        return {
          workExpComponents: componentsArr,
        };
      } else {
        return {
          educationExpComponents: componentsArr,
        };
      }
    });
  };

  render() {
    const isSubmitted = this.state.isSubmitted;

    return (
      <div className="App">
        <Header title="CV Application" />
        <div className="main-content">
          <form className="cv-form" onSubmit={this.handleSubmit}>
            <div className="general-info">
              <GeneralInfo submitted={isSubmitted} />
            </div>
            <div className="work-info">
              <h2>Work Experience</h2>

              {this.state.workExpComponents.map((item) => (
                <WorkExp
                  key={item.id}
                  id={item.id}
                  delete={this.deleteExp}
                  submitted={isSubmitted}
                />
              ))}
              {isSubmitted === false && (
                <button type="button" className="add-btn" onClick={this.addWorkExp}>
                  Add
                </button>
              )}
            </div>
            <div className="education-info">
              <h2>Education Experience</h2>

              {this.state.educationExpComponents.map((item) => (
                <EducationExp
                  key={item.id}
                  id={item.id}
                  delete={this.deleteExp}
                  submitted={isSubmitted}
                />
              ))}
              {isSubmitted === false && (
                <button type="button" className="add-btn" onClick={this.addEducationExp}>
                  Add
                </button>
              )}
            </div>
            <div className="form-btns">
              {isSubmitted && (
                <button type="button" id="edit-btn" onClick={this.handleEdit}>
                  Edit
                </button>
              )}
              {isSubmitted === false && (
                <button type="submit" id="submit-btn">
                  Submit
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
