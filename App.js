import { SafeAreaView, StyleSheet } from "react-native";
import Parimpar from "./src/components/Parimpar";
import styled from "styled-components";
//import Diferenciar from "./Diferenciar";
//import  CompPadrao, { Comp1, Comp2 } from './src/components/Multi'
//import Primeiro from'./src/components/Primeiro'
//import MinMax from './src/components/MinMax';
//import Aleatorio from './src/components/Aleatorio';
//import Titulo from './src/components/Titulo';
//import Botao from './src/components/Botao';
import Contador from "./src/components/Contador";
import { useState } from "react";
//import Temp from './src/components/temp';
//import Pai from './src/components/direta/Pai'
//import Pai from "./src/components/indireta/Pai";

export default function App() {
  return (
    <SafeAreaView style={style.App}>
      <Contador inicial={0} />
      {/*
      <Parimpar />
      <Diferenciar />
      <Pai />
    <Pai />
      <Temp />
    <Botao />
    <Aleatorio alea1={0} alea2={1000}/>
      <Titulo principal="cadastro"
        segundario="Tela de Cadastro do Produto"/>

      <MinMax min={0} max={100}/>
      
      <CompPadrao />
      <Comp1 />
      <Comp2 />
      <Primeiro /> */}
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  App: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});
