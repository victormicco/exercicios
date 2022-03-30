import React from "react";
import { View, Text } from "react-native";
import estilo from "./estilo";
import Estilo from "./estilo";

export default (props) => {
  return (
    <React.Fragment>
      <Text style={estilo.fontG}>{props.principal}</Text>
      <Text>{props.segundario}</Text>
    </React.Fragment>
  );
};
