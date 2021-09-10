import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Footer() {
  return (
    <BottomLinks>
      <Link to="/habitos">
        <h3>Hábitos</h3>
      </Link>
      <Link to="/hoje">
        <h3>Hoje</h3>
      </Link>
      <Link to="/historico">
        <h3>histórico</h3>
      </Link>
    </BottomLinks>
  );
}

const BottomLinks = styled.div`
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;

  a {
    text-decoration: none;
    color: currentColor;
  }
`;
