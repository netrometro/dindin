import React from "react";
import { Button, Text, TextInput, View } from "react-native";

import { styles } from "./styles";

export default function AddItem() {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={()=>{}}
        placeholder="Data"
      />
      <TextInput
        style={styles.input}
        onChangeText={()=>{}}
        placeholder="Categoria"
      />
      <TextInput
        style={styles.input}
        onChangeText={()=>{}}
        placeholder="Descrição"
      />
      <TextInput
        style={styles.input}
        onChangeText={()=>{}}
        placeholder="Valor"
        keyboardType='decimal-pad'
      />
      <Button title='Add' onPress={()=>{}} />
    </View>
  );
}