import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import React, { useState, useContext } from "react";
import UserContext from "../contexts/UserContext";
import axios from "axios";
import { Button, Input } from "../styles/Styles";

export default function Home() {
  const history = useHistory();
  const { user, setUser } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoadding, setIsLoadding] = useState(false);
  function login() {
    const body = {
      email: email,
      password: password,
    };
    axios
      .post(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
        body
      )
      .then((res) => {
        setUser(res.data);
        history.push("/habitos");
        // if (res != undefined) {
        //   setIsLoadding(true);
        // } else {
        //   history.push("/habitos");
        //   console.log(user);
        // }
      })
      .catch((erro) => console.log);
  }
  return (
    <Login>
      <img src="./trackit.png"></img>
      <Input
        loadding={isLoadding}
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        placeholder="email"
      ></Input>
      <Input
        loadding={isLoadding}
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        placeholder="senha"
      ></Input>
      <Button loadding={isLoadding} onClick={login}>
        Entrar
      </Button>
      <Link to="/cadastro">Não tem conta? Cadastre-se!</Link>
    </Login>
  );
}

const Login = styled.div`
  display: flex;
  justify-content: space-baseline;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: white;

  input {
    margin: 5px;
    width: 80%;
    height: 40px;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
  }
  button {
    font-size: 25px;
    margin: 5px;
    width: 80%;
    height: 40px;
    color: white;
    background-color: #52b6ff;
    border: none;
    border-radius: 10px;
  }
  a {
    color: #52b6ff;
  }
`;
