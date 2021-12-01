import React from "react";
import { Text, View } from "react-native";

import { styles } from "./styles";

type Props = {
  income: number,
  expensive: number,
  balance: number,
}

export default function ResumeArea({income,expensive,balance}: Props) {

  const color = balance >= 0 ? 'blue' : 'red';

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Receita</Text>
        <Text>Despesas</Text>
        <Text>Balanço</Text>
      </View>
      <View style={styles.header}>
        <Text style={styles.info}>R$ {income}</Text>
        <Text style={styles.info}>R$ {expensive}</Text>
        <Text style={[styles.info, {color: color}]}>R$ {balance}</Text>
      </View>
    </View>
  );
}