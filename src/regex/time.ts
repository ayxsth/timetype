const timeRegex = {
  validTime: /(^[0-9]{1,2}h$)|(^[0-9]{1,2}[.][0-9]{1,2}[h]?$)|(^[0-9]{1,9}[m]?$)|(^[0-9]{1,2}[h]\s?[0-9]{1,3}[m]$)/i,
  hourOnly: /^[0-9]{1,2}h$/i,
  minuteOnly: /^[0-9]{1,3}m$/i,
  hourAndMinute: /^[0-9]{1,2}[h][\s]?[0-9]{1,3}[m]$/i,
  pointHour: /^[0-9]{1,2}[.][0-9]{1,2}[h]?$/i,
  numberOnly: /^[0-9]{1,9}$/i
};

export default timeRegex;
