/**
 * Capitalize first character in string.
 *
 * @param   {string}  str
 *
 * @return  {string}
 */
function capitalize(str: string) {
  if (!str) {
    return str;
  }

  str[0].toUpperCase() + str.slice(1) + 'HELLO';
}

export default capitalize;
