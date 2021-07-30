import React, {useState} from "react"
import {View, Text, TextInput, Button} from "react-native"
import ResultImc from "../ResultImc";

export default function Form(){

  const [height, setHeight] = useState(null)
  const [weight, setWeight] = useState(null)
  const [messageImc, setMessageImc] = useState("Preencha o peso e altura")
  const [imc, setImc] = useState(null)
  const [textButton, setTextButton] = useState("Calcular")

  function imcCalculator() {
    return setImc((weight/(height*height)).toFixed(2))
  }

  function validationimc(){
    if(weight != null && height != null){
      imcCalculator()
      setHeight(null)
      setWeight(null)
      setMessageImc("Seu imc é igual:")
      setTextButton("Calcular novamente")
      return
    }
    setImc(null)
    setTextButton("Calcular")
    setMessageImc("Preencha seu peso e altura")
  }

  return(
    <View>
      <View>
        <Text>Altura</Text>
        <TextInput placeholder="Ex. 1.75" keyboardType="numeric" onChangeText={setHeight} value={height}/>
        <Text>Peso</Text>
        <TextInput placeholder="Ex.75.365" keyboardType="numeric" onChangeText={setWeight} value={weight}/>
        <Button title ={textButton} onPress={() => validationimc()}/>
      </View>
      <ResultImc messageResultImc={messageImc} resultImc ={imc}/>
    </View>
  );
}