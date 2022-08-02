import React from 'react';
import '../styles/General.css';
export default class General extends React.Component {
  render() {
    return (
      <div className='general-container'>
        <h2>General information</h2>
        <div className='input-container'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            id='name'
            onChange={this.props.handleChange}
            value={this.props.state.general.name}
          />
        </div>
        <div className='input-container'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            id='email'
            onChange={this.props.handleChange}
            value={this.props.state.general.email}
          />
        </div>
        <div className='input-container'>
          <label htmlFor='phone'>Phone</label>
          <input
            type='tel'
            name='phone'
            id='phone'
            onChange={this.props.handleChange}
            value={this.props.state.general.phone}
          />
        </div>
      </div>
    );
  }
}
