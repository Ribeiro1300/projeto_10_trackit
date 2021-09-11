import { Link } from "react-router-dom";
import styled from "styled-components";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useContext } from "react";
import PercentageContext from "../contexts/PercentageContext";

export default function Footer() {
  const { percentage, setPercentage } = useContext(PercentageContext);
  return (
    <BottomLinks>
      <Link to="/habitos">
        <h3>Hábitos</h3>
      </Link>
      <Link to="/hoje">
        <Progress>
          <CircularProgressbar
            value={percentage}
            text="Hoje"
            background={true}
            backgroundPadding={6}
            style={{ width: 10, height: 2 }}
            styles={buildStyles({
              backgroundColor: "#3e98c7",
              textColor: "#fff",
              pathColor: "#fff",
              trailColor: "transparent",
            })}
          />
        </Progress>
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
const Progress = styled.div`
  width: 100px;
  position: fixed;
  bottom: 10px;
  left: 160px;
`;
