import capitalize from '@/functions/string/capitalize';

const unmodified = ['#foo', 'Foo', '123', 'XYZ'];

describe('functions.string.capitalize', () => {
  it('should capitalize first character', () => {
    expect(capitalize('foo'))
      .toBe('Foo');
  });

  it('should return empty string', () => {
    expect(capitalize(''))
      .toBe('');
  });

  test.each(unmodified)('%s should not change', (str) => {
    expect(capitalize(str))
      .toBe(str);
  });
});
