import ucwords from '@/functions/string/ucwords';
// import * as capitalize from '@/functions/string/capitalize';

describe('functions.string.ucwords', () => {
  it('should capitalize words', () => {
    expect(ucwords('foo bar'))
      .toBe('Foo Bar')
  })
});
