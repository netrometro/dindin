import React from 'react';
import { ScrollView, View, Text, Button } from 'react-native';

import Card from '../Card';
import Item from '../../types/Item';

import { styles } from './styles';

type Props = {
  list: Item[],
  previewMonth: ()=>void,
  nextMonth: ()=>void,
  currentDate: Date,
}

export default function ListItems({list, previewMonth, nextMonth, currentDate}: Props) {

  let months = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];

  let month = months[currentDate.getMonth()];
  let year = currentDate.getFullYear();

  return (
    <View style={styles.container}>
      <View style={styles.controls}>
        <Button title='<<' onPress={previewMonth} />
        <Text style={styles.texto} >{month} - {year}</Text>
        <Button title='>>' onPress={nextMonth} />
      </View>
      <ScrollView>
        {list.map((item, index) => <Card key={index} item={item} />)}
      </ScrollView>
      </View>
  );
}