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

  function RenderTodaysHabits() {
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
          <SingleHabit>
            <div>
              <div>{info.name}</div>
              <div>Sequeência atual: {info.currentSequence} dias</div>
              <div>Seu recorde: {info.highestSequence} dias</div>
            </div>
            <Check
              isChecked={info.done}
              onClick={() => (info.done ? uncheck(info) : check(info))}
            ></Check>
          </SingleHabit>
        ))}
      </TodaysHabits>
    );
  }
  function check(habit) {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    axios
      .post(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/check`,
        config
      )
      .then((res) => console.log);
  }
  function uncheck(habit) {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    axios.post(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/uncheck`,
      config
    );
  }
  return (
    <Container>
      <TodaysDate>
        <h2>{weekday + ", " + day + "/" + month}</h2>
        <p></p>
      </TodaysDate>
      {RenderTodaysHabits()}
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
