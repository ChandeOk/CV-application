import React from 'react';
import '../styles/Education.css';
export default class Education extends React.Component {
  render() {
    const obj = this.props.state.education.find(
      (school) => school.id === this.props.id
    );
    return (
      <div className='education-container'>
        <div className='input-container'>
          <label htmlFor='school'>School</label>
          <input
            type='text'
            name='school'
            id='school'
            onChange={this.props.handleChange}
            value={obj.school}
            parent-id={this.props.id}
          />
        </div>
        <div className='date-container'>
          <label htmlFor='from'>From</label>
          <input
            type='date'
            name='from'
            id='from'
            onChange={this.props.handleChange}
            value={obj.from}
            parent-id={this.props.id}
          />
          <label htmlFor='to'>To</label>
          <input
            type='date'
            name='to'
            id='to'
            onChange={this.props.handleChange}
            value={obj.to}
            parent-id={this.props.id}
          />
        </div>
        <div className='input-container'>
          <label htmlFor='qualification'>Qualification</label>
          <input
            type='text'
            name='qualification'
            id='qualification'
            onChange={this.props.handleChange}
            value={obj.qualification}
            parent-id={this.props.id}
          />
        </div>
      </div>
    );
  }
}
