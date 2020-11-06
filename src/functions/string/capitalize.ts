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

  return str[0].toUpperCase() + str.slice(1);
}

export default capitalize;
