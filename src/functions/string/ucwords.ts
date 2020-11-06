import capitalize from '@/functions/string/capitalize';

/**
 * Capitalize words in a string.
 *
 * @param   {string}  str
 *
 * @return  {string}
 */
const ucwords = (str: string) => str.split(' ')
  .map(capitalize)
  .join(' ');

export default ucwords;
