import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import React, { useState } from "react";
import { Button, Input } from "../styles/Styles";
export default function Register() {
  const history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [img, setImg] = useState();
  const [loadding, setLoadding] = useState(false);

  function register() {
    const info = {
      email: email,
      name: name,
      image: img,
      password: password,
    };

    axios
      .post(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",
        info
      )
      .then((res) => {
        if (!!res) setLoadding(true);
        else history.push("/");
      });
  }
  return (
    <CreateAccount>
      <img src="./trackit.png"></img>
      <form>
        <Input
          loadding={loadding}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        ></Input>
        <Input
          loadding={loadding}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="senha"
        ></Input>
        <Input
          loadding={loadding}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="nome"
        ></Input>
        <Input
          loadding={loadding}
          value={img}
          onChange={(e) => setImg(e.target.value)}
          placeholder="foto"
        ></Input>
        <Button loadding={loadding} onClick={register}>
          Cadastrar
        </Button>
      </form>
      <Link to="/">Já tem conta? Faça login!</Link>
    </CreateAccount>
  );
}

const CreateAccount = styled.div`
  a {
    color: currentColor;
  }
`;
