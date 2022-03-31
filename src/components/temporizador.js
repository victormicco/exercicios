import React, { useState } from "react";
import { Text } from "react-native";
import { Button } from "react-native-web";

export default function Temporizador() {
  var contador = useState();
  var decrementar = contador - 1;
  while (decrementar > 0) {
    console.log(decrementar);
  }

  return (
    <>
      <Text>O numero é</Text>
      <Button>Decrementar</Button>
    </>
  );
}
