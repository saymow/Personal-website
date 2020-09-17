import styled from 'styled-components';

export const Container = styled.form`
  margin: 2rem 0;
  width: min(56rem, 80vw);
`;

export const Fieldset = styled.fieldset`
  border: 0;
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

export const Input = styled.div`
  position: relative;
  margin-top: 3rem;

  input {
    outline: 0;
    padding: 1.2rem 1.6rem;
    border: 1px solid #bbb;

    &:focus + label,
    &:not(:placeholder-shown) + label {
      transform: translate(-1.2rem, calc(-100% - 2rem));
      color: #ccc;
      font-weight: bold;
    }
  }

  label {
    position: absolute;
    top: calc(50% - 1rem);
    left: 1.2rem;

    transition: all 200ms ease;
  }

  label,
  input {
    font-size: 2rem;
    color: #151616;
  }
`;

export const Textarea = styled.div`
  display: flex;
  flex-direction: column;

  label {
    line-height: 3rem;
    color: #ccc;
    font-weight: bold;
  }

  label,
  textarea {
    font-size: 2rem;
  }
  textarea {
    color: #151616;
    padding: 1.2rem 1.6rem;

    width: 100%;
    outline: 0;
    border: 1px solid #bbb;
    height: 16rem;
    min-height: 8rem;
    max-height: 24rem;
    resize: vertical;
  }
`;

export const Button = styled.button`
  display: block;
  margin-left: auto;

  font-size: 2rem;
  background: #9f69f8;

  cursor: pointer;
  min-width: 20%;
  padding: 1rem;
  outline: 0;
  border: 0;
`;
