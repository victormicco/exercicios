import React from "react";
import { Text } from "react-native";
import estilo from "./estilo";

export default (props) => {
  return (
    <Text style={estilo.fontG}>
      O valor aleatório é:{" "}
      {parseInt(Math.random(props.alea1, props.alea2) * 10)}
    </Text>
  );
};
