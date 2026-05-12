import React, { Component } from 'react';
import FormComponent from './FormComponent.jsx';

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      age: '',
      gender: '',
      destination: '',
      nutsFree: false,
      lactoseFree: false,
      vegan: false
    };
  }

  handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    // ternary operator for checkboxes as requested
    const finalValue = type === 'checkbox' ? checked : value;
    
    this.setState({
      [name]: finalValue
    });
  };

  render() {
    return (
      <FormComponent 
        handleChange={this.handleChange}
        data={this.state}
      />
    );
  }
}

export default FormContainer;
