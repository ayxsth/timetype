import { timetype } from '../src';

describe('timetype', () => {
  it('Check only hour conversion', () => {
    expect(timetype('1h')).toBe('1h 0m');
    expect(timetype('2h')).toBe('2h 0m');
    expect(timetype('5h')).toBe('5h 0m');
    expect(timetype('10h')).toBe('10h 0m');
    expect(timetype('20h')).toBe('20h 0m');
    expect(timetype('30h')).toBe('30h 0m');
  });

  it('Check only minute conversion', () => {
    expect(timetype('1m')).toBe('0h 1m');
    expect(timetype('2m')).toBe('0h 2m');
    expect(timetype('5m')).toBe('0h 5m');
    expect(timetype('10m')).toBe('0h 10m');
    expect(timetype('50m')).toBe('0h 50m');
    expect(timetype('60m')).toBe('1h 0m');
    expect(timetype('120m')).toBe('2h 0m');
  });

  it('Check hour and minute conversion', () => {
    expect(timetype('1h 1m')).toBe('1h 1m');
    expect(timetype('2h 2m')).toBe('2h 2m');
    expect(timetype('5h 5m')).toBe('5h 5m');
    expect(timetype('10h 10m')).toBe('10h 10m');
    expect(timetype('20h 20m')).toBe('20h 20m');
    expect(timetype('30h 30m')).toBe('30h 30m');
    expect(timetype('1h 60m')).toBe('2h 0m');
    expect(timetype('2h 120m')).toBe('4h 0m');
    expect(timetype('5h 300m')).toBe('10h 0m');
    expect(timetype('10h 90m')).toBe('11h 30m');
    expect(timetype('5h5m')).toBe('5h 5m');
    expect(timetype('5h90m')).toBe('6h 30m');
  });

  it('Check point input conversion', () => {
    expect(timetype('1.5h')).toBe('1h 30m');
    expect(timetype('3.5')).toBe('3h 30m');
    expect(timetype('3.99')).toBe('3h 59m');
    expect(timetype('5.55')).toBe('5h 32m');
  });

  it('Check number only conversion', () => {
    expect(timetype(1)).toBe('1h 0m');
    expect(timetype(2)).toBe('2h 0m');
    expect(timetype(12)).toBe('12h 0m');
    expect(timetype(13)).toBe('0h 13m');
    expect(timetype(60)).toBe('1h 0m');
  });

  it('Check invalid input', () => {
    expect(timetype('1h 1m 1s')).toBeUndefined();
    expect(timetype('1h 1m 1s 1ms')).toBeUndefined();
    expect(timetype('30m 1h')).toBeUndefined();
    expect(timetype('1k')).toBeUndefined();
    expect(timetype('1h 1k')).toBeUndefined();
    expect(timetype('h1 m20')).toBeUndefined();
    expect(timetype('')).toBeUndefined();
    expect(timetype('%#&*&)#')).toBeUndefined();
    expect(timetype('_-_')).toBeUndefined();
    expect(timetype('1.5h 1.5m')).toBeUndefined();
    expect(timetype('3.999')).toBeUndefined();
    expect(timetype('03:15')).toBeUndefined();
  });
});
