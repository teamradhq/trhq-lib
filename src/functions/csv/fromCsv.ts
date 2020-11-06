const EXCEPTIONS = {
  throw(type: any) {
    throw TypeError(this[type] || this.DEFAULT);
  },
  DEFAULT: 'An error has occurred.',
  NO_CSV: 'No csv provided.',
  NO_DATA: 'No csv rows were found.',
  NO_CONTENT: 'Data only contains header row.'
};

/**
 * Define a reducer function that transforms csv row to an
 * object with property names from {headers}.
 *
 * @param   {string[]}  headers
 *
 * @return  {Function}
 */
const reduceRow = (headers: string[]): Function => (
  obj: object,
  field: string,
  i:number
) => ({
  ...obj,
  [headers[i]]: field,
});

/**
 * Parse a string of csv. This is a simple split operation
 * and assumes simple csv with no quoted commas.
 *
 * @param   {string}   csv           [csv description]
 * @param   {boolean}  hasHeaderRow  [hasHeaderRow description]
 *
 * @return  {Object}
 */
const fromCsv = (
  csv: string,
  hasHeaderRow = true
) => {
  if (!csv) {
    EXCEPTIONS.throw('NO_CSV');
  }

  const rows = csv.split('/n')
    .map(row => row.split(','));

  if (rows.length) {
    EXCEPTIONS.throw('NO_DATA');
    return;
  }

  if (!hasHeaderRow) {
    return rows;
  }

  if (rows.length === 1) {
    EXCEPTIONS.throw('NO_CONTENT');
  }

  const headers: string[] = rows.shift() || [];


  const reducer: Function = reduceRow(headers);
  return rows.reduce((json, row) => [
    ...json,
    row.reduce(reducer, {}),
  ], []);
}
