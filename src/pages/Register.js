import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import React, { useState } from "react";
import { Button, Input } from "../styles/Styles";
export default function Register() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [isLoadding, setIsLoadding] = useState(false);

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
        // if (!!res) setIsLoadding(true);
        // else history.push("/");
        console.log(res.data);
        history.push("/");
      })
      .catch((err) => console.log);
  }
  return (
    <CreateAccount>
      <img src="./trackit.png"></img>
      <Input
        loadding={isLoadding}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
        disabled={isLoadding}
      ></Input>
      <Input
        loadding={isLoadding}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="senha"
        type="password"
      ></Input>
      <Input
        loadding={isLoadding}
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="nome"
      ></Input>
      <Input
        loadding={isLoadding}
        value={img}
        onChange={(e) => setImg(e.target.value)}
        placeholder="foto"
      ></Input>
      <Button loadding={isLoadding} onClick={register}>
        Cadastrar
      </Button>
      <Link to="/">Já tem conta? Faça login!</Link>
    </CreateAccount>
  );
}

const CreateAccount = styled.div`
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
