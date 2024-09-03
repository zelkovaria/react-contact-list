import styled from 'styled-components';

const Input = ({ title, value, onChange, error }) => {
  return (
    <Wrapper>
      <TitleSpan>{title}</TitleSpan>
      <ValueInput
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={title}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  gap: 1rem;
  margin: 1rem;
`;

const TitleSpan = styled.span`
  margin-right: 1rem;
`;

const ValueInput = styled.input`
  border: none;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 3px 3px rgba(0, 0, 0, 0.23);
  border-radius: 4px;
`;

const ErrorMessage = styled.div`
  color: red;
  margin-top: 0.5rem;
`;
export default Input;
