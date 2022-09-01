import PropTypes from 'prop-types';
import { Box } from '../Box';
import ContactItem from './ContactItem';
import { ContactItemWrap } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteClick }) => {
  return (
    <Box
      as="ul"
      display="flex"
      gridGap="10px"
      flexWrap="wrap"
      justifyContent="space-between"
    >
      {contacts.map(({ name, number, id }) => (
        <ContactItemWrap key={id}>
          <ContactItem
            name={name}
            number={number}
            id={id}
            onDeleteClick={onDeleteClick}
          />
        </ContactItemWrap>
      ))}
    </Box>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteClick: PropTypes.func.isRequired,
}.isRequired;

export default ContactList;
