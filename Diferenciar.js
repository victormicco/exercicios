import React from "react";
import { Text, Platform } from "react-native";
import Estilo from "./src/components/estilo";

export default (props) => {
  if (Platform.OS === "android") {
    return <Text style={Estilo.fontG}>Android</Text>;
  } else if (Platform.OS === "ios") {
    return <Text style={Estilo.fontG}>IOS</Text>;
  } else {
    <Text style={Estilo.fontG}>Acho que é web</Text>;
  }
};
