import React from 'react';
import '../styles/Practical.css';
export default class Practical extends React.Component {
  render() {
    // console.log(this.props.id);
    const obj = this.props.state.practical.find(
      (exp) => exp.id === this.props.id
    );
    return (
      <div className='practical-container'>
        <div className='input-container'>
          <label htmlFor='company'>Company</label>
          <input
            type='text'
            name='company'
            id='company'
            onChange={this.props.handleChange}
            value={obj.company}
            parent-id={this.props.id}
          />
        </div>
        <div className='input-container'>
          <label htmlFor='position'>Position</label>
          <input
            type='text'
            name='position'
            id='position'
            onChange={this.props.handleChange}
            value={obj.position}
            parent-id={this.props.id}
          />
        </div>
        <div className='input-container'>
          <label htmlFor='tasks'>Tasks</label>
          <input
            type='text'
            name='tasks'
            id='tasks'
            onChange={this.props.handleChange}
            value={obj.tasks}
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
      </div>
    );
  }
}
