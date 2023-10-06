import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form, Label, Button } from './Contact.styled';
export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  handleSubmit = event => {
    event.preventDefault();
    const newContact = {
      name: this.state.name,
      number: this.state.number,
      id: nanoid(),
    };
    this.props.onSubmit(newContact);
    this.setState({ name: '', number: '' });
  };
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label>
          name
          <input
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleChange}
          />
        </Label>
        <Label>
          number
          <input
            type="text"
            name="number"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.number}
            onChange={this.handleChange}
          />
        </Label>
        <Button onSubmit={this.handleSubmit} type="submit">
          add
        </Button>
      </Form>
    );
  }
}
