const set = (obj, key, value) => {
  if (typeof obj !== 'object' || obj === null) {
    throw new Error('Первый аргумент должен быть объектом');
  }
  if (!(key in obj)) {
    obj[key] = value;
  }
};

export default set;
