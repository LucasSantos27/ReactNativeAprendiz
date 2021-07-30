import React, {useState} from "react"
import {View, Text, TextInput, TouchableOpacity} from "react-native"
import ResultImc from "../ResultImc";
import styles from "./style";

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
    <View style={styles.formContext}>
      <View style={styles.form}>
        <Text style={styles.formLabel}>Altura</Text>
        <TextInput  style={styles.formInput} placeholder="Ex. 1.75" keyboardType="numeric" onChangeText={setHeight} value={height}/>
        <Text style={styles.formLabel}>Peso</Text>
        <TextInput style={styles.formInput} placeholder="Ex.75.365" keyboardType="numeric" onChangeText={setWeight} value={weight}/>
        <TouchableOpacity 
        style={styles.buttonCalculator}
          onPress={() => validationimc()}
        >
          <Text style={styles.textButton}>{textButton}</Text>
        </TouchableOpacity>

      </View>
      <ResultImc messageResultImc={messageImc} resultImc ={imc}/>
    </View>
  );
}