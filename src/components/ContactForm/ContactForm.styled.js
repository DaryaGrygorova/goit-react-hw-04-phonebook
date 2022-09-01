import styled from 'styled-components';
import { Form, Field } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px;
  margin: 0 auto;
  max-width: 600px;
  border: 1px solid #6f4e37;
  border-radius: 10px;
`;

export const Label = styled.label`
font-weight: 700;
`;

export const Input = styled(Field)`
  border: 1px solid #6f4e37;
  border-radius: 4px;
`;

export const Button = styled.button`
  width: 130px;
  padding-top: ${p => p.theme.space[1]}px;
  padding-bottom: ${p => p.theme.space[1]}px;
  padding-left: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.md};
  border-color: ${p => p.theme.colors.primary};
  background-color: ${p => p.theme.colors.primary};
  color: ${p => p.theme.colors.white};

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.secondary};
    color: ${p => p.theme.colors.white};
    border-color: ${p => p.theme.colors.white};
  }
`;
