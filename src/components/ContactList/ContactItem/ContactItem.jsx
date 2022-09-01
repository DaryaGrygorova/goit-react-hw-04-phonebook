import PropTypes from 'prop-types';
import { Info, Button } from './ContactItem.styled';

const ContactItem = ({ name, number, id, onDeleteClick }) => {
  return (
    <>
      <Info>
        {name}: {number}
      </Info>
      <Button type="button" onClick={() => onDeleteClick(id)}>
        Delete
      </Button>
    </>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
}.isRequired;

export default ContactItem;
