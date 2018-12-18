import { FormatNumberPipe } from './amount-converter.pipe';

describe('FormatNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new FormatNumberPipe();
    expect(pipe).toBeTruthy();
  });
});
