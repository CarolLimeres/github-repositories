import styled, { keyframes, css } from "styled-components";

export const Form = styled.form`
  margin-top: 30px;
  display: flex;

  input {
    flex: 1;
    border: 1px solid ${(props) => (props.error ? "#e00" : "#eee")};
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
  }
`;

const rotate = keyframes`
   
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

export const SubmitButton = styled.button.attrs((props) => ({
  type: "submit",

  disabled: props.loading,
}))`
  background: #e895e2;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${(props) =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 20px;

  li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & + li {
      border-top: 1px solid #eee;
    }

    div {
      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        padding-top: 2px;
        margin-right: 10px;
        color: #e895e2;
        cursor: pointer;
      }
    }
  }

  a {
    color: #e895e2;
    text-decoration: none;
  }
`;

export const ErrorMessage = styled.span`
  font-size: 12px;
  margin-left: 5px;
  color: #e00;
`;

export const EmptyList = styled.h3`
  font-weight: normal;
  font-size: 15px;
  margin: 30px 0px;

  text-align: center;

  button {
    color: #e895e2;
    cursor: pointer;
    background: white;
    border: 0;
  }
`;
