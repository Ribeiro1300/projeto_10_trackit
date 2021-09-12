import styled from "styled-components";

const Button = styled.button`
  font-size: 15px;
  margin: 5px;
  width: 20%;
  height: 40px;
  color: white;
  background-color: #52b6ff;
  border: none;
  border-radius: 5px;
  opacity: ${(props) => (props.loadding ? 0.5 : 1)};
`;
const Input = styled.input`
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  opacity: ${(props) => (props.loadding ? 0.5 : 1)};
`;

const Container = styled.div`
  margin: 120px 20px 70px 20px;
`;

export { Button, Input, Container };
