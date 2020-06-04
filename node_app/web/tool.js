function zero(number) {
    return String("0" + number).slice(-2);
}

function date_string() {
  date = new Date();
  return date.getFullYear() + '/' +
    zero(date.getMonth()+1) + '/' + zero(date.getDate()) + ' ' +
    zero(date.getHours()) + ':' + zero(date.getMinutes()) + ':' + zero(date.getSeconds());
}
