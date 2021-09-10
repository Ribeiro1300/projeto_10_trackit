import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

export default function Top() {
  const { user, setUser } = useContext(UserContext);
  return (
    <TopBar>
      <Link to="/">
        <h1>Trackit</h1>
      </Link>
      <img src={user.image}></img>
    </TopBar>
  );
}

const TopBar = styled.div`
  width: 100%;
  height: 90px;
  background-color: #126ba5;
  position: fixed;
  top: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    margin: 20px;
    font-size: 60px;
    color: white;
    font-family: "Playball", cursive;
  }
  img {
    width: 70px;
    height: 70px;
    border-radius: 100px;
    margin: 20px;
  }
  a {
    text-decoration: none;
  }
`;
