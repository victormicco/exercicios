import React from "react";
import { Text } from "react-native";
import { View } from "react-native-web";
import Estilo from "./estilo";

export default function ({ num = 0 }) {
  return (
    <View>
      <Text style={Estilo.fontG}>O resultado é</Text>
      {num % 2 === 0 ? (
        <Text style={Estilo.fontG}>Par</Text>
      ) : (
        <Text style={Estilo.fontG}>Ímpar</Text>
      )}
    </View>
  );
}
