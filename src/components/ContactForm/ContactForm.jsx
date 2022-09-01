import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';

import { StyledForm, Label, Input, Button } from './ContactForm.styled';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

  nameRegExp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
  phoneNumberRegExp =
    /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

  validationSchema = yup.object().shape({
    name: yup
      .string()
      .required('"Name" is a required field')
      .matches(
        this.nameRegExp,
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      ),
    number: yup
      .string()
      .required('"Number" is a required field')
      .matches(
        this.phoneNumberRegExp,
        'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
      ),
  });

  onSubmitHandler = (value, { resetForm }) => {
    this.props.formSubmitHandler({ ...value, id: nanoid() });
    resetForm();
  };

  onChangeHandler = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={this.validationSchema}
        onSubmit={this.onSubmitHandler}
      >
        <StyledForm>
          <Label htmlFor={this.nameInputId}>Name</Label>
          <Input id={this.nameInputId} type="text" name="name" />
          <ErrorMessage name="name" component="div" />

          <Label htmlFor={this.numberInputId}>Number</Label>
          <Input id={this.numberInputId} type="tel" name="number" />
          <ErrorMessage name="number" component="div" />

          <Button type="submit">Add contact</Button>
        </StyledForm>
      </Formik>
    );
  }
}

export default ContactForm;
