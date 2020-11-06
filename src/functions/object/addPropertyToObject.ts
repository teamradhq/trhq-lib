/**
 * Create a new object from {obj} and define a new property
 * named {prop} with {value}.
 *
 * @param   {object}  obj     An object to add property to.
 * @param   {string}  prop    The name of new property.
 * @param   {any}     value   The value of new property.
 *
 * @return  {object}
 */
const addPropertyToObject = (
  obj: object,
  prop: string,
  value: any
) => ({
  ...obj,
  [prop]: value,
});

export default addPropertyToObject;
