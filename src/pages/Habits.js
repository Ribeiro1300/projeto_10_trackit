import styled from "styled-components";
import { Container, Button } from "../styles/Styles";
import React from "react";

import { habits } from "../components/Data";

function RenderHabits() {
  return (
    <>
      {habits.map((info) => (
        <UserHabit>{info.name}</UserHabit>
      ))}
    </>
  );
}

export default function Habits() {
  const [showNew, setShowNew] = React.useState(false);
  return (
    <Container>
      <MyHabits>
        <TopButtons>
          <h2>Meus hábitos</h2>
          <ion-icon
            onClick={() => setShowNew(true)}
            name="add-outline"
          ></ion-icon>
        </TopButtons>
        <NewHabit showNew={showNew}>
          <input></input>
          <Weekdays>
            <div>D</div>
            <div>S</div>
            <div>T</div>
            <div>Q</div>
            <div>Q</div>
            <div>S</div>
            <div>S</div>
          </Weekdays>
          <BottonButtons>
            <button onClick={() => setShowNew(false)}>Cancelar</button>
            <Button>Salvar</Button>
          </BottonButtons>
        </NewHabit>
      </MyHabits>
      <HabitsList>
        {!!habits ? (
          RenderHabits()
        ) : (
          <div>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
            começar a trackear!
          </div>
        )}
      </HabitsList>
    </Container>
  );
}

const MyHabits = styled.div`
  ion-icon {
    width: 35px;
    height: 30px;
    background-color: #52b6ff;
    color: white;
    font-size: 20px;
    border-radius: 7px;
  }
  h2 {
    font-size: 30px;
  }
`;
const TopButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;
const NewHabit = styled.div`
  background-color: white;
  display: ${(props) => (props.showNew ? "flex" : "none")};
  flex-direction: column;
  margin: 20px 0px;
`;

const HabitsList = styled.div``;

const UserHabit = styled.div`
  background-color: white;
`;

const Weekdays = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  div {
    width: 20px;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const BottonButtons = styled.div`
  display: flex;
  justify-content: flex-end;
`;
