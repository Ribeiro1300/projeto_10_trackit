import styled from "styled-components";

export default function Top() {
  return (
    <TopBar>
      <h1>Trackit</h1>
      <img src="./trackit.png"></img>
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
`;
