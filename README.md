# @kuibu/typejs

A lightweight front-end data type detection library.

## Installation

```powershell
npm i @kuibu/typejs
```

## Usage

### bundle

Using in commonjs projects:

```js
const { isString } = require('@kuibu/typejs');
```

Using in esmodule  projects:

```typescript
import { isString } from '@kuibu/typejs';
```

### bundleless

Using in commonjs projects:

```js
const isString = require('@kuibu/typejs/lib/isString');
```

Using in esmodule  projects:

```typescript
import isString from '@kuibu/typejs/es/isString';
```

## Example

### isString

```typescript
import { isString } from '@kuibu/typejs';

isString(''); // true
isString(NaN); // false
isString(0); // false
isString(false); // false
isString(null); // false
isString(undefined); // false
isString({}); // false
isString([]); // false
isString(() => {}); // false
```

### isNumber

```typescript
import { isNumber } from '@kuibu/typejs';

isNumber(''); // false
isNumber(NaN); // true
isNumber(0); // true
isNumber(false); // false
isNumber(null); // false
isNumber(undefined); // false
isNumber({}); // false
isNumber([]); // false
isNumber(() => {}); // false
```

### isBoolean

```typescript
import { isBoolean } from '@kuibu/typejs';

isBoolean(''); // false
isBoolean(NaN); // false
isBoolean(0); // false
isBoolean(false); // true
isBoolean(null); // false
isBoolean(undefined); // false
isBoolean({}); // false
isBoolean([]); // false
isBoolean(() => {}); // false
```

### isNull

```typescript
import { isNull } from '@kuibu/typejs';

isNull(''); // false
isNull(NaN); // false
isNull(0); // false
isNull(false); // false
isNull(null); // true
isNull(undefined); // false
isNull({}); // false
isNull([]); // false
isNull(() => {}); // false
```

### isUndefined

```typescript
import { isUndefined } from '@kuibu/typejs';

isUndefined(''); // false
isUndefined(NaN); // false
isUndefined(0); // false
isUndefined(false); // false
isUndefined(null); // false
isUndefined(undefined); // true
isUndefined({}); // false
isUndefined([]); // false
isUndefined(() => {}); // false
```

### isObject

```typescript
import { isObject } from '@kuibu/typejs';

isObject(''); // false
isObject(NaN); // false
isObject(0); // false
isObject(false); // false
isObject(null); // false
isObject(undefined); // false
isObject({}); // true
isObject([]); // false
isObject(() => {}); // false
```

### isArray

```typescript
import { isArray } from '@kuibu/typejs';

isArray(''); // false
isArray(NaN); // false
isArray(0); // false
isArray(false); // false
isArray(null); // false
isArray(undefined); // false
isArray({}); // false
isArray([]); // true
isArray(() => {}); // false
```

### isFunction

```typescript
import { isFunction } from '@kuibu/typejs';

isFunction(''); // false
isFunction(NaN); // false
isFunction(0); // false
isFunction(false); // false
isFunction(null); // false
isFunction(undefined); // false
isFunction({}); // false
isFunction([]); // false
isFunction(() => {}); // true
```

### isValidNumber

```typescript
import { isValidNumber } from '@kuibu/typejs';

isValidNumber(''); // false
isValidNumber(NaN); // false
isValidNumber(0); // true
isValidNumber(false); // false
isValidNumber(null); // false
isValidNumber(undefined); // false
isValidNumber({}); // false
isValidNumber([]); // false
isValidNumber(() => {}); // false
```

### isNonEmptyString

```typescript
import { isNonEmptyString } from '@kuibu/typejs';

isNonEmptyString(''); // false
isNonEmptyString('	'); // true
isNonEmptyString(NaN); // false
isNonEmptyString(0); // false
isNonEmptyString(false); // false
isNonEmptyString(null); // false
isNonEmptyString(undefined); // false
isNonEmptyString({}); // false
isNonEmptyString([]); // false
isNonEmptyString(() => {}); // false
```

### isNonEmptyObject

```typescript
import { isNonEmptyObject } from '@kuibu/typejs';

isNonEmptyObject(''); // false
isNonEmptyObject(NaN); // false
isNonEmptyObject(0); // false
isNonEmptyObject(false); // false
isNonEmptyObject(null); // false
isNonEmptyObject(undefined); // false
isNonEmptyObject({}); // false
isNonEmptyObject({ a: [] }); // true
isNonEmptyObject([]); // false
isNonEmptyObject(() => {}); // false
```

### isNonEmptyArray

```typescript
import { isNonEmptyArray } from '@kuibu/typejs';

isNonEmptyArray(''); // false
isNonEmptyArray(NaN); // false
isNonEmptyArray(0); // false
isNonEmptyArray(false); // false
isNonEmptyArray(null); // false
isNonEmptyArray(undefined); // false
isNonEmptyArray({}); // false
isNonEmptyArray([]); // false
isNonEmptyArray([{}]); // true
isNonEmptyArray(() => {}); // false
```

### isEmpty

```typescript
import { isEmpty } from '@kuibu/typejs';

isEmpty(''); // true
isEmpty(NaN); // true
isEmpty(0); // false
isEmpty(false); // false
isEmpty(null); // true
isEmpty(undefined); // true
isEmpty({}); // true
isEmpty([]); // true
isEmpty(() => {}); // false
```

### isType

It is applicable for determining other types，if there is a class as follows:

```typescript
class Other {
    get [Symbol.toStringTag]() {
        return 'Other';
    }
}

import { isType } from '@kuibu/typejs';
isType(new Other, 'Other'); // true
```

