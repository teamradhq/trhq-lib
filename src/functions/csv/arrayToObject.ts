import addPropertyToObject from '@/functions/object/addPropertyToObject';

/**
 * Convert items in array to object corresponding
 * properties to names in {props}.
 *
 * @param   {any[]}     arr
 * @param   {string[]}  props
 *
 * @return  {object}
 */
const arrayToObject = (arr:any[], props:string[]): object => arr
  .reduce((obj, value, i) => (
    addPropertyToObject(obj, props[i], value)
  ), {});

export default arrayToObject;
