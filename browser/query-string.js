// Get a query string from url 'str' as a dict.
str.replace(/^.*\?/, '')
  .split('&')
  .map(x => x.split('='))
  .reduce((dict, [key, val]) => ({
    ...dict,
    [key]: val
  }), {});
