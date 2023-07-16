const daysCalc = (date1: Date, date2: Date) => {
  const time1 = date1.getTime();
  const time2 = date2.getTime();

  const diff = time2 - time1;

  return Math.floor(diff);
};

export default daysCalc;
