import styled from "styled-components";
import { Container } from "../styles/Styles";
import React, { useState, useEffect, useContext } from "react";
import UserContext from "../contexts/UserContext";
import PercentageContext from "../contexts/PercentageContext";
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
  const { percentage, setPercentage } = useContext(PercentageContext);

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
    let habitsDone = 0;
    habit.map((info) => {
      if (info.done) {
        habitsDone++;
      }
    });
    let result = habitsDone / habit.length;
    setPercentage((result * 100).toFixed());
    return (
      <TodaysHabits>
        {habit.map((info) => (
          <RenderTodaysHabits habit={info}></RenderTodaysHabits>
        ))}
      </TodaysHabits>
    );
  }
  function updatePercentage() {
    let habitsDone = 0;
    habit.map((info) => {
      if (info.done) {
        habitsDone++;
      }
    });
    let result2 = habitsDone / habit.length;
    setPercentage((result2 * 100).toFixed());
  }
  function RenderTodaysHabits({ habit }) {
    const [isChecked, setIsChecked] = useState(habit.done);

    return (
      <SingleHabit>
        <div>
          <h3>{habit.name}</h3>
          <p>Sequência atual: {habit.currentSequence} dias</p>
          <p>Seu recorde: {habit.highestSequence} dias</p>
        </div>
        <Check
          isChecked={isChecked}
          onClick={() => {
            isChecked
              ? uncheck(habit, setIsChecked(false))
              : check(habit, setIsChecked(true));
            updatePercentage();
          }}
        >
          <ion-icon name="checkmark-outline"></ion-icon>
        </Check>
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
        <p>
          {percentage == 0
            ? "Nenhum hábito concluído ainda"
            : `${percentage}% dos hábitos concluídos`}
        </p>
      </TodaysDate>
      <GetTodaysHabits />
    </Container>
  );
}
const TodaysDate = styled.div`
  h2 {
    color: #126ba5;
    font-size: 30px;
  }
`;
const TodaysHabits = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;
const Check = styled.div`
  width: 100px;
  height: 100px;
  margin: 10px;
  background-color: ${(props) => (props.isChecked ? "#8FC549" : "#EBEBEB")};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  ion-icon {
    font-size: 70px;
    color: white;
  }
`;
const SingleHabit = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  margin: 10px 0px;
  border-radius: 10px;
  padding: 10px;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  h3 {
    font-size: 30px;
    margin: 10px 0px 20px 0px;
  }
`;
