function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function decrementDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() - days);
  return result;
}

function getFormattedDate(date) {
  var str =
    date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();

  return str;
}
export {addDays, decrementDays, getFormattedDate}