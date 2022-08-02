import React from 'react';
import '../styles/Preview.css';
export default class Preview extends React.Component {
  render() {
    const educationElements = this.props.state.education.map((school) => (
      <div key={school.id}>
        <h3>
          School: <span>{school.school}</span>
        </h3>
        <h3>
          Qualification: <span>{school.qualification}</span>
        </h3>
        <h3>
          From: <span>{school.from}</span>
        </h3>
        <h3>
          To: <span>{school.to}</span>
        </h3>
      </div>
    ));
    const practicalElements = this.props.state.practical.map((exp) => (
      <div key={exp.id}>
        <h3>
          Company: <span>{exp.company}</span>
        </h3>
        <h3>
          Position: <span>{exp.position}</span>
        </h3>
        <h3>
          Tasks: <span>{exp.tasks}</span>
        </h3>
        <h3>
          From: <span>{exp.from}</span>
        </h3>
        <h3>
          To: <span>{exp.to}</span>
        </h3>
      </div>
    ));
    return (
      <div className='preview'>
        <h2>General Information</h2>
        <div className='preview--general-container'>
          <h3>
            Name: <span>{this.props.state.general.name}</span>
          </h3>
          <h3>
            Email: <span>{this.props.state.general.email}</span>
          </h3>
          <h3>
            Phone: <span>{this.props.state.general.phone}</span>
          </h3>
        </div>
        {educationElements.length > 0 && <h2>Education</h2>}
        <div className='preview--education-container'>{educationElements}</div>
        {practicalElements.length > 0 && <h2>Experience</h2>}
        <div className='preview--practical-container'>{practicalElements}</div>
      </div>
    );
  }
}
// Education;
// School;
// From;
// To;
// Qualification;
// Experience;
// Company;
// Position;
// Tasks;
// From;
// To;
