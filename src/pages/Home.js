import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Input, a } from "../styles/Styles";

export default function Home() {
  const history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [token, SetToken] = useState("");
  const [loadding, setLoadding] = useState(false);
  function login() {
    const info = {
      email: email,
      password: password,
    };
    axios
      .post(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
        info
      )
      .then((res) => SetToken(res.data.token));
    if (!!token) {
      setLoadding(true);
    } else history.push("/habitos");
  }
  return (
    <Login>
      <img src="./trackit.png"></img>
      <form>
        <Input
          loadding={loadding}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="email"
        ></Input>
        <Input
          loadding={loadding}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="senha"
        ></Input>
        <Button loadding={loadding} onClick={login}>
          Entrar
        </Button>
      </form>
      <Link to="/cadastro">Não tem conta? Cadastre-se!</Link>
    </Login>
  );
}

const Login = styled.div`
  a {
    color: currentColor;
  }
`;
