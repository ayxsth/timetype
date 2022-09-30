import timeRegex from './regex/time';

import en from './lang/en';

import validateInput from './utils/validate';
import { convertMinutesToHour, getFormattedTime } from './utils/time';

const timetype = (time: string | number) => {
  time = time.toString().toLowerCase();

  const valid = validateInput(time);

  if (!valid) {
    return;
  }

  if (timeRegex.hourOnly.test(time)) {
    return getFormattedTime({ hour: time });
  } else if (timeRegex.minuteOnly.test(time)) {
    if (parseInt(time) < 60) {
      return getFormattedTime({ minute: time });
    }

    const hour = Math.floor(parseInt(time) / 60).toString();
    const minute = (parseInt(time) % 60).toString();

    return getFormattedTime({ hour, minute });
  } else if (timeRegex.hourAndMinute.test(time)) {
    const hour = time.split(en.unit.hour)[0];
    const minute = time.split(en.unit.hour)[1].split(en.unit.minute)[0];

    if (parseInt(minute) < 60) {
      return getFormattedTime({ hour, minute });
    }

    return convertMinutesToHour({ hour, minute }, (hour, time) => {
      time.hour = (parseInt(hour) + parseInt(time.hour)).toString();
    });
  } else if (timeRegex.pointHour.test(time)) {
    const hour = parseInt(time).toString();
    const fraction = parseFloat(time) % parseInt(time);

    const minute = (fraction * 60).toString();

    return getFormattedTime({ hour, minute });
  } else if (timeRegex.numberOnly.test(time)) {
    if (parseInt(time) <= 12) {
      return getFormattedTime({ hour: time });
    }

    if (parseInt(time) < 60) {
      return getFormattedTime({ minute: time });
    }

    return convertMinutesToHour({ minute: time });
  }
};

export default timetype;
