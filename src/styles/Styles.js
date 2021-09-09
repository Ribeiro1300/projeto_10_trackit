import styled from "styled-components";

const Button = styled.button`
  opacity: ${(props) => (props.loadding ? 0.5 : 1)};
`;
const Input = styled.input`
  opacity: ${(props) => (props.loadding ? 0.5 : 1)};
`;

const Container = styled.div`
  margin: 120px 20px;
`;

export { Button, Input, Container };
