const getDateInfo = dateObj => {
  const KRDayOfWeek = ['일', '월', '화', '수', '목', '금', '토'];

  return {
    dayOfWeek: KRDayOfWeek[dateObj.getDay()],
    year: dateObj.getFullYear(),
    month: dateObj.getMonth() + 1,
    day: dateObj.getDate(),
    hour: dateObj.getHours().toString().length === 1 ? `0${dateObj.getHours()}` : dateObj.getHours()
  }
}

export { getDateInfo }