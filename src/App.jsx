import { Component, useState } from 'react';
import './styles/App.css';
import General from './components/General';
import Education from './components/Education';
import Practical from './components/Practical';
import { nanoid } from 'nanoid';
import Preview from './components/Preview';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: true,
      general: {
        name: '',
        email: '',
        phone: '',
      },
      education: [
        {
          school: '',
          from: '',
          to: '',
          qualification: '',
          id: nanoid(),
        },
      ],
      practical: [
        {
          company: '',
          position: '',
          tasks: '',
          from: '',
          to: '',
          id: nanoid(),
        },
      ],
    };
  }

  // componentDidUpdate() {
  //   console.log(this.state);
  // }

  handleChange = (event) => {
    const { name, value } = event.target;
    const parentId = event.target.getAttribute('parent-id');
    if (Object.keys(this.state.general).includes(name))
      this.setState({
        general: {
          ...this.state.general,
          [name]: value,
        },
      });
    if (this.state.education.some((school) => school.id === parentId)) {
      this.setState({
        education: this.state.education.map((school) =>
          school.id === parentId ? { ...school, [name]: value } : school
        ),
      });
    }
    if (this.state.practical.some((exp) => exp.id === parentId)) {
      this.setState({
        practical: this.state.practical.map((exp) =>
          exp.id === parentId ? { ...exp, [name]: value } : exp
        ),
      });
    }
  };
  addNewSchool = () => {
    this.setState({
      education: [
        ...this.state.education,
        {
          school: '',
          from: '',
          to: '',
          qualification: '',
          id: nanoid(),
        },
      ],
    });
  };
  deleteLastSchool = () => {
    if (this.state.education.length < 1) return;
    this.setState({
      education: this.state.education.slice(0, -1),
    });
  };
  addNewExperience = () => {
    this.setState({
      practical: [
        ...this.state.practical,
        {
          company: '',
          position: '',
          tasks: '',
          from: '',
          to: '',
          id: nanoid(),
        },
      ],
    });
  };
  deleteLastExperience = () => {
    if (this.state.practical.length < 1) return;
    this.setState({
      practical: this.state.practical.slice(0, -1),
    });
  };

  handlePreviewButton = (e) => {
    e.preventDefault();
    this.setState({ isEdit: false });
  };
  render() {
    const educationElements = this.state.education.map((school) => (
      <Education
        id={school.id}
        key={school.id}
        state={this.state}
        handleChange={this.handleChange}
      />
    ));

    const practicalElements = this.state.practical.map((company) => (
      <Practical
        id={company.id}
        key={company.id}
        state={this.state}
        handleChange={this.handleChange}
      />
    ));

    return this.state.isEdit ? (
      <form onSubmit={this.handlePreviewButton} className='App'>
        <General state={this.state} handleChange={this.handleChange} />
        <h2>Education</h2>
        {educationElements}
        <div className='buttons-container'>
          <button type='button' onClick={this.deleteLastSchool}>
            Delete education
          </button>
          <button type='button' onClick={this.addNewSchool}>
            Add education
          </button>
        </div>
        <h2>Experience</h2>
        {practicalElements}
        <div className='buttons-container'>
          <button type='button' onClick={this.deleteLastExperience}>
            Delete experience
          </button>
          <button type='button' onClick={this.addNewExperience}>
            Add experience
          </button>
        </div>
        <button className='show-preview'>Preview</button>
      </form>
    ) : (
      <div className='App'>
        <button
          className='show-preview'
          onClick={() => this.setState({ isEdit: true })}
        >
          Edit
        </button>
        <Preview state={this.state} />
      </div>
    );
  }
}

export default App;
