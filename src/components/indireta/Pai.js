import React, { useState } from "react";
import Filho from "../direta/Filho";
import { Text } from "react-native";

export default (props) => {
  const [num, setNum] = useState;

  function exibirValor(numero) {
    setNum(numero);
  }

  return (
    <>
      <Text>{num}</Text>
      <Filho min={1} max={60} funcao={exibirValor} />
    </>
  );
};
