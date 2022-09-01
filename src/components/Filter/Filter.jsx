import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Form, Input, Label } from './Filter.styled';

const Filter = ({ value, onChangeFilter }) => {
  const filterInputId = nanoid();

  return (
    <Form>
      <Label htmlFor={filterInputId}>Find contacts by name </Label>

      <Input
        id={filterInputId}
        type="text"
        name="filter"
        value={value}
        onChange={onChangeFilter}
      />
    </Form>
  );
};
Filter.propTypes = {
  value: PropTypes.string,
  onChangeFilter: PropTypes.func.isRequired,
}.isRequired;

export default Filter;
