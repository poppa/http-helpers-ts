# HTTP Constants

This package contains various HTTP constants: http status codes and texts,
HTTP header names and HTTP methods, and a few related utility function.

## Install

```
# NPM
npm i @poppanator/http-constants

# Yarn
yarn add @poppanator/http-constants
```

## Usage

The following symbols are exported

### `status`

Contains all possible HTTP status codes

```ts
import { status } from '@poppanator/http-constants'

status.Continue // 100
status.Ok // 200
status.Created // 201
// ...
status.NotFound // 404
// ...
status.InternalServerError // 500
// ... and so on
```

### `statusText`

Contains all possible status texts

```ts
import { statusText } from '@poppanator/http-constants'

statusText.Continue // Continue
statusText.Ok // OK
statusText.Created // Created
// ...
statusText.NotFound // Not Found
// ...
statusText.InternalServerError // Internal Server Error
// ... and so on
```

### `tuple`

Contains all status codes and texts as tuples where the first index is
the status code and the second index the status text.

```ts
import { tuple } from '@poppanator/http-constants'

const [code, text] = tuple.Unauthorized // [401, 'Unauthorized']
const [code, text] = tuple.NotFound // [404, 'Not Found']
```

### `header`

Contains all standardizes HTTP header names (and a few non- but
defacto-standard ones).

```ts
import { header } from '@poppanator/http-constants'

header.AcceptEncoding // Accept-Encoding
header.IfModifiedSince // If-Modified-Since
header.AccessControlAllowMethods // Access-Control-Allow-Methods
```

### `method`

Contains all standardized HTTP method names.

```ts
import { method, type Method } from '@poppanator/http-constants'

method.Post // POST
method.Options // OPTIONS

// ...

interface MyHttpInterface {
  method: Method
}

const http: MyHttpInterface = {
  method: 'FAKE', // Error
}

const http: MyHttpInterface = {
  method: 'POST', // OK
}
```

### Utility functions

Some utility functions are exported from the root of the package

```ts
import {
  isInformational,
  isSuccess,
  isRedirect,
  isClientError,
  isServerError,
  isHttpStatus,
  getStatusText,
} from '@poppanator/http-constants'

// True for status codes in the 100-199 range
isInformational(100) // true
isInformational(102) // true
isInformational(201) // false
isInformational(403) // false

// True for status codes in the 200-299 range
isSuccess(200) // true
isSuccess(202) // true
isSuccess(100) // false
isSuccess(302) // false

// True for status codes in the 300-399 range
isRedirect(301) // true
isRedirect(307) // true
isRedirect(200) // false
isRedirect(500) // false

// True for status codes in the 400-499 range
isClientError(404) // true
isClientError(406) // true
isClientError(500) // false
isClientError(302) // false

// True for status codes in the 500-599 range
isServerError(500) // true
isServerError(503) // true
isServerError(200) // false
isServerError(308) // false

// True if the value is a known HTTP status code
isHttpStatus(201) // true
isHttpStatus(404) // true
isHttpStatus(503) // true
isHttpStatus(261) // false
isHttpStatus(210) // false
isHttpStatus(444) // false

// Returns the status code's corresponding status text
getStatusText(100) // Continue
getStatusText(201) // Created
getStatusText(304) // Not Modified
getStatusText(405) // Method Not Allowed
getStatusText(500) // Internal Server Error
```
