import styled from "styled-components";
import { Container } from "../styles/Styles";
import { habits } from "../components/Data";
export default function Today() {
  const weekdays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const date = new Date();
  const weekday = weekdays[date.getDay()];
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return (
    <Container>
      <TodaysDate>
        <h2>{weekday + ", " + month + "/" + day}</h2>
        <p></p>
      </TodaysDate>
      <TodaysHabits></TodaysHabits>
    </Container>
  );
}
const TodaysDate = styled.div``;
const TodaysHabits = styled.div``;
