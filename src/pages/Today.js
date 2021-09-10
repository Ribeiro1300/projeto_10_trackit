import styled from "styled-components";
import { Container } from "../styles/Styles";
import React, { useState, useEffect, useContext } from "react";
import UserContext from "../contexts/UserContext";
import axios from "axios";
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

  const [habit, setHabit] = useState([]);
  const { user, setUser } = useContext(UserContext);

  function GetTodaysHabits() {
    useEffect(() => {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      axios
        .get(
          "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
          config
        )
        .then((res) => {
          setHabit(res.data);
        })
        .catch((err) => console.log);
    }, []);
    return (
      <TodaysHabits>
        {habit.map((info) => (
          <RenderTodaysHabits habit={info}></RenderTodaysHabits>
        ))}
      </TodaysHabits>
    );
  }
  function RenderTodaysHabits({ habit }) {
    const [isChecked, setIsChecked] = useState(habit.done);
    return (
      <SingleHabit>
        <div>
          <div>{habit.name}</div>
          <div>Sequência atual: {habit.currentSequence} dias</div>
          <div>Seu recorde: {habit.highestSequence} dias</div>
        </div>
        <Check
          isChecked={isChecked}
          onClick={() =>
            isChecked
              ? uncheck(habit, setIsChecked(false))
              : check(habit, setIsChecked(true))
          }
        ></Check>
      </SingleHabit>
    );
  }
  function check(habit) {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    const body = {};
    axios.post(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/check`,
      body,
      config
    );
  }
  function uncheck(habit) {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    const body = {};

    axios.post(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/uncheck`,
      body,
      config
    );
  }
  return (
    <Container>
      <TodaysDate>
        <h2>{weekday + ", " + day + "/" + month}</h2>
        <p></p>
      </TodaysDate>
      {GetTodaysHabits()}
    </Container>
  );
}
const TodaysDate = styled.div``;
const TodaysHabits = styled.div`
  display: flex;
  flex-direction: column;
`;
const Check = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => (props.isChecked ? "green" : "gray")};
`;
const SingleHabit = styled.div`
  display: flex;
  justify-content: space-between;
`;
