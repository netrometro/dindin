import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';

import ListItems from '../../components/ListItems';

import { styles } from './styles';

import { items } from '../../data/Items.data';
import { categories } from '../../data/Categories.data';

import { filteredListByMonth } from '../../helpers/datefilter';
import ResumeArea from '../../components/ResumeArea';
import AddItem from '../../components/AddItem';

export default function Home() {
  const now = new Date();
  const [currentDate, setCurrentDate] = useState(now);

  const flist = filteredListByMonth(items, currentDate);
  const [filteredList, setFilteredList] = useState(flist);

  const [income, setIncome] = useState(0);
  const [expensive, setExpensive] = useState(0);

  useEffect(()=>{
    const newList = filteredListByMonth(items, currentDate);
    setFilteredList(newList);
  },[currentDate]);

  useEffect(()=>{
    let incomeCounter = 0;
    let expensiveCounter = 0;
    
    for (let i in filteredList) {
      if (categories[filteredList[i].category].expensive) {
        expensiveCounter += filteredList[i].value;
      } else {
        incomeCounter += filteredList[i].value;
      }
    }

    setIncome(incomeCounter);
    setExpensive(expensiveCounter);

  }, [filteredList]);

  function handlerPrevMonth() {
    const date = new Date(currentDate.getFullYear(),currentDate.getMonth() - 1,1);
    setCurrentDate(date);
  }

  function handlerNextMonth() {
    const date = new Date(currentDate.getFullYear(),currentDate.getMonth() + 1,1);
    setCurrentDate(date);
  }



  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.title}>Finanças</Text>
      </View>

      <AddItem />

      <ResumeArea income={income} expensive={expensive} balance={income - expensive} />

      <ListItems 
        list={filteredList} 
        previewMonth={handlerPrevMonth} 
        nextMonth={handlerNextMonth}
        currentDate={currentDate}
      />

    </View>
  );
}