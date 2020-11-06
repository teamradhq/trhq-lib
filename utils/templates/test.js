export default `
import {{ moduleName }} from '{{ SRC_ALIAS }}/{{ location }}/{{ moduleName }}';

describe('{{ moduleName }}', () => {
  it('should pass this test', () => {
    expect(moduleName('foo')).toBe(true);
  });
});
`;
