import { List, Item, Button } from './ContactList.styled';
export const ContactList = ({ contacts, handleClick }) => {
  return (
    <List>
      {contacts.map(contact => {
        return (
          <Item key={contact.id}>
            <p> {contact.name}</p>
            <p> {contact.number}</p>
            <Button type="button" onClick={() => handleClick(contact.id)}>
              delete
            </Button>
          </Item>
        );
      })}
    </List>
  );
};
