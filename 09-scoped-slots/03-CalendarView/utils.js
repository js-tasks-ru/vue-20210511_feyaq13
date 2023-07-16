export function getDay(date) {
  let day = date.getDay();

  if (day === 0) {
    day = 7;
  }

  return day - 1;
}

export function getNextMonth(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 1);
}

export function getPrevMonth(date) {
  return new Date(date.getFullYear(), date.getMonth() - 1, 1);
}

export function equalsDates(date1, date2) {
  if (date1.getFullYear() !== date2.getFullYear()) {
    return false;
  }

  if (date1.getMonth() !== date2.getMonth()) {
    return false;
  }

  return date1.getDate() === date2.getDate();
}

export function buildMonthItems(currentDate) {
  let items = [];
  const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);

  for (let i = 0; i < getDay(date); i++) {
    const yesterday = new Date(date.getTime());
    yesterday.setDate(yesterday.getDate() - i - 1);
    items.push({
      date: new Date(yesterday.getTime()),
      day: yesterday.getDate(),
      active: false,
      current: false,
    });
  }

  items = items.reverse();
  while (date.getMonth() === currentDate.getMonth()) {
    items.push({
      date: new Date(date.getTime()),
      day: date.getDate(),
      active: true,
      current: false,
    });
    date.setDate(date.getDate() + 1);
  }

  if (getDay(date) !== 0) {
    for (let i = getDay(date); i < 7; i++) {
      items.push({
        date: new Date(date.getTime()),
        day: date.getDate(),
        active: false,
        current: false,
      });
      date.setDate(date.getDate() + 1);
    }
  }

  return items.map((item) => ({
    ...item,
    fullDate: item.date.toLocaleDateString(),
    current: equalsDates(item.date, new Date()),
  }));
}

export function buildMonthMatrix(daysPerCalendarSpread) {
  const matrix = [];
  for (let i = 0; i < daysPerCalendarSpread.length; ) {
    let weekDays = [];
    for (let weekDay = 0; weekDay < 7; weekDay++) {
      weekDays.push(daysPerCalendarSpread[i]);
      i++;
    }
    matrix.push(weekDays);
    weekDays = [];
  }
  return matrix;
}
