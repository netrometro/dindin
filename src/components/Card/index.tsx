import React from "react";
import { View, Text } from "react-native";

import Item from "../../types/Item";
import { categories } from "../../data/Categories.data";

import { DateToString } from "../../helpers/datefilter";

import { styles } from './styles';

type Props = {
  item: Item;
}

export default function Card({item}: Props) {

   const bg = categories[item.category].color;

  return (
    <View style={[styles.container, {backgroundColor: bg}]}>
      <Text style={styles.title}>Data: <Text>{DateToString(item.date)}</Text></Text>
      <Text style={styles.title}>Categoria <Text>{item.category}</Text></Text>
      <Text style={styles.title}>Descrição</Text><Text>{item.description}</Text>
      <Text style={styles.title}>Valor: <Text>{item.value}</Text></Text>
    </View>
  );
}

