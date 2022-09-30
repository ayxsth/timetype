import timeRegex from '../regex/time';

const validateInput = (time: string): boolean => timeRegex.validTime.test(time);

export default validateInput;
