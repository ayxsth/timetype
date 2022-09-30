import en from '../lang/en';

import TimeFormat from '../interface/TimeFormat';

const getFormattedHour = (hour: string = '0') => {
  return `${parseInt(hour)}${en.unit.hour}`;
};

const getFormattedMinute = (minute: string = '0') => {
  return `${parseInt(minute)}${en.unit.minute}`;
};

const getFormattedTime = ({ hour, minute }: TimeFormat) => {
  return `${getFormattedHour(hour)} ${getFormattedMinute(minute)}`;
};

const convertMinutesToHour = ({ hour, minute }: TimeFormat, callback?: (hour: string, time: TimeFormat) => void) => {
  const time = {
    hour: Math.floor(parseInt(minute) / 60).toString(),
    minute: (parseInt(minute) % 60).toString()
  };

  if (callback) {
    callback(hour, time);
  }

  return getFormattedTime({ hour: time.hour, minute: time.minute });
};

export { getFormattedTime, convertMinutesToHour };
