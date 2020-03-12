import moment from 'moment';

const getDate = dt => {

  const KRDayOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
  const date = moment.unix(dt);

  return {
    dayOfWeek: KRDayOfWeek[date.day()],
    year: date.year(),
    month: date.month() + 1,
    day: date.date(),
    hour: date.hours()
  }
  
}

export { getDate }