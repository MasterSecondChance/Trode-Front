import React, { Component } from 'react';

import FirstStep from '../components/Sign/FirstStep';
import SecondStep from '../components/Sign/SecondStep';
import ThirdStep from '../components/Sign/ThirdStep';
import FourthStep from '../components/Sign/FourthStep';
import Confirm from '../components/Sign/Confirm';

class SignUp extends Component {

    state = {
      step: 1,
      phone: '',
      firstName: '',
      lastName: '',
      email: '',
      city: '',
      password: '',
      confirmPassword: '',
      description: '',
      piece: '',
      female: '',
      male: '',
      brand: '',
      size: '',
      category: '',
      quality: '',
      state: '',
    }

    next = () => {
      const { step } = this.state;
      this.setState({
        step: step + 1,
      });
    }

    previous = () => {
      const { step } = this.state;
      this.setState({
        step: step - 1,
      });
    }

    handleChange = (input) => (e) => {
      this.setState({ [input]: e.target.value });
    }

    render() {

      const { step } = this.state;
      const { phone, password, confirmPassword, firstName, lastName, email, occupation, city } = this.state;
      const values = { phone, password, confirmPassword, firstName, lastName, email, occupation, city };

      switch (step) {
        case 1:
          return (
            <FirstStep
              next={this.next}
              handleChange={this.handleChange}
              values={values}
              stepper='Paso 1 de 4'
              title='Crea tu cuenta'
            />
          );

        case 2:
          return (
            <SecondStep
              previous={this.previous}
              next={this.next}
              handleChange={this.handleChange}
              values={values}
              stepper='Paso 2 de 4'
              title='Sube tu foto de perfil'
            />
          );

        case 3:
          return (
            <ThirdStep
              previous={this.previous}
              next={this.next}
              handleChange={this.handleChange}
              values={values}
              stepper='Paso 3 de 4'
              title='Sube tu prenda'
            />
          );

        case 4:
          return (
            <FourthStep
              previous={this.previous}
              next={this.next}
              handleChange={this.handleChange}
              values={values}
              stepper='Paso 4 de 4'
              title='Un último paso...'
            />
          );

        case 5:
          return (
            <Confirm
              previous={this.previous}
              next={this.next}
              handleChange={this.handleChange}
              values={values}
            />
          );
      }
    }
}

export default SignUp;
