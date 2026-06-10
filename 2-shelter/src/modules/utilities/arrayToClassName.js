const arrayToClassName = (array) =>
  array.reduce((acc, cls) => (cls ? `${acc} ${cls}` : acc), '');

export default arrayToClassName;
