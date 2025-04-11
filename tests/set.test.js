import { strict as assert } from 'node:assert';

import set from '../src/set.js';

const obj = {};

set(obj, 'key1', 'value1');

assert.strictEqual(obj.key1, 'value1', 'Свойство key1 должно быть установлено в "value1"');

set(obj, 'key1', 'next value');
assert.strictEqual(obj.key1, 'value1', 'свойство key1 не должно быть перезаписано');

console.log('Все тесты пройдены!');
