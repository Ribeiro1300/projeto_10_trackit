import styled from "styled-components";
import { Container, Button, Input } from "../styles/Styles";
import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import axios from "axios";

export default function Habits() {
  const history = useHistory();
  const weekdaysList = ["D", "S", "T", "Q", "Q", "S", "S"];

  const [showNew, setShowNew] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const [newHabit, setNewHabit] = useState("");
  const [isLoadding, setIsLoadding] = useState(false);
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    axios
      .get(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
        config
      )
      .then((res) => {
        setHabits(res.data);
      })
      .catch((err) => console.log);
  }, []);
  function RenderHabits() {
    return (
      <>
        {habits.map((info) => (
          <UserHabit>
            {info.name}
            <ion-icon
              onClick={() => deleteHabit(info)}
              name="trash-outline"
            ></ion-icon>
          </UserHabit>
        ))}
      </>
    );
  }
  function createHabit() {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    const body = {
      name: newHabit,
      days: [0, 1, 2, 3, 4, 5, 6], // segunda, quarta e sexta
    };
    axios
      .post(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
        body,
        config
      )
      .then((res) => {
        setHabits([...habits, res.data]);
        console.log(habits);
      });
    setShowNew(false);
    setNewHabit("");
  }
  function deleteHabit(habit) {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    axios
      .delete(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}`,
        config
      )
      .then((res) => setHabits(habits.filter((info) => info != habit)));
  }
  function RenderWeekdays(props) {
    const [isSelected, setIsSelected] = useState(false);
    console.log(props.day);
    return (
      // <Day
      //   isSelected={isSelected}
      //   onClick={isSelected ? setIsSelected(false) : setIsSelected(true)}
      // >
      //   {props.day}
      // </Day>
      <div></div>
    );
  }
  console.log(user);
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
          <Input
            loadding={isLoadding}
            onChange={(e) => setNewHabit(e.target.value)}
            value={newHabit}
            placeholder="nome do hábito"
          ></Input>
          <Weekdays>
            {weekdaysList.map((info) => (
              <RenderWeekdays day={info} />
            ))}
          </Weekdays>
          <BottonButtons>
            <button onClick={() => setShowNew(false)}>Cancelar</button>
            <Button onClick={createHabit}>Salvar</Button>
          </BottonButtons>
        </NewHabit>
      </MyHabits>
      <HabitsList>
        {!(habits.length === 0) ? (
          <RenderHabits />
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
`;
const Day = styled.div`
  width: 20px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.isSelected ? "#CFCFCF" : "white")};
`;
const BottonButtons = styled.div`
  display: flex;
  justify-content: flex-end;
`;
