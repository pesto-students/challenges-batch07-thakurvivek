import { abbreviateString, ERROR_MESSAGES } from './abbreviateString';

describe('abbreviateString', () => {
  it('abbreviates the following strings', () => {
    expect(abbreviateString('Hacktober Fest')).toEqual('Hacktober F.');
    expect(abbreviateString('Leeroy Fitzgerald Jenkins')).toEqual('Leeroy J.');
    expect(abbreviateString('Some arbitrary string length here.')).toEqual('Some H.');
  });

  it('throws error on invalid parameters', () => {
    expect(() => abbreviateString('vivek').toThrow(ERROR_MESSAGES.range));
    expect(() => abbreviateString(123)).toThrow(ERROR_MESSAGES.type);
    expect(() => abbreviateString([])).toThrow(ERROR_MESSAGES.type);
    expect(() => abbreviateString({})).toThrow(ERROR_MESSAGES.type);
    expect(() => abbreviateString(null)).toThrow(ERROR_MESSAGES.type);
  });
});
