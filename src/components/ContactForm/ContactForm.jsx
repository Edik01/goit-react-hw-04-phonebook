import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Form, Label, Button } from './Contact.styled';
export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    const newContact = {
      name,
      number,
      id: nanoid(),
    };
    onSubmit(newContact);
    setName('');
    setNumber('');
  };
  const handleChange = event => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    }
    if (name === 'number') {
      setNumber(value);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        name
        <input
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </Label>
      <Label>
        number
        <input
          type="text"
          name="number"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={number}
          onChange={handleChange}
        />
      </Label>
      <Button onSubmit={handleSubmit} type="submit">
        add
      </Button>
    </Form>
  );
};
