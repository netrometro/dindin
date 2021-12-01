import Item from "../types/Item";

export function DateToString(date: Date): string {
  let day = date.getDay();
  let month = date.getMonth();
  let year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

export function filteredListByMonth(list: Item[], date: Date): Item[] {
  let newList: Item[] = [];

  for (let i in list) {
    let d = list[i].date;
    if (d.getFullYear() === date.getFullYear() && d.getMonth() === (date.getMonth()+1)) {
      newList.push(list[i]);
    }
  }

  return newList;
}