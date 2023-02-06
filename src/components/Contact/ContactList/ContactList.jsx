import { Button } from './ContactList.styled';
import PropTypes from 'prop-types';

const ContactList = ({ contactList, onDeleteContact }) => {
  return (
    <ul>
      {contactList.map(item => (
        <li key={item.id}>
          {item.name}: {item.number}
          <Button onClick={() => onDeleteContact(item.id)} type="button">
            Delete
          </Button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contactList: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
