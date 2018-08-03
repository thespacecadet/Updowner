import { helper } from '@ember/component/helper';
export function formatter(date) { // formats iso 8601 to readable date (gives wrong date)
  var xc = moment(date);
  var cx = xc.format('YY/MM/DD, HH:mm:ss');
  return cx;
}

export default helper(formatter);
