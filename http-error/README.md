# HTTP error class

This is a utility error class for representing a HTTP error (or status).

## Install

```
# NPM
npm i @poppanator/http-error

# Yarn
yarn add @poppanator/http-error
```

## Usage

### `HttpError`

#### Properties

These are the properties exposed, other than the default ones inherited from
the `Error` class.

- `statusCode`: The HTTP status code, e.g. `400`, `404`, `500` etc.
- `statusText`: The HTTP status text, e.g. `Not Found`, `Internal Server Error`
  etc
- `fullStatusMessage`: The HTTP status and text, e.g. `404 Not Found`

```ts
import { HttpError } from '@poppanator/http-error'

const err1 = new HttpError(307)

err1.statusCode // 307
err1.statusText // Temporary Redirect
err1.message // 307 Temporary Redirect
err1.fullStatusMessage // 307 Temporary Redirect

const err2 = new HttpError(404, 'Lost Some Where')

err2.statusCode // 404
err2.statusText // Lost Some Where
err2.message // 404 Lost Some Where
err2.fullStatusMessage // 404 Lost Some Where

const err3 = new HttpError(500, { message: `That's not good` })

err3.statusCode // 500
err3.statusText // Internal Server Error
err3.message // That's not good
err3.fullStatusMessage // 500 Internal Server Error

const err3 = new HttpError(500, {
  statusText: 'Server Broke',
  message: `That's not good`,
})

err3.statusCode // 500
err3.statusText // Server Broke
err3.message // That's not good
err3.fullStatusMessage // 500 Server Broke
```

This is the constructor signature:

```ts
type HttpErrorConstuctorArgs = {
  /** Status text */
  statusText?: string
  /** Error message */
  message?: string
}

/**
 * Creates a new `HttpError` instance
 *
 * @param statusCode
 *  The HTTP status code, e.g. `301`, `400`, `404`, `500` etc
 * @param statusTextOrArgs -
 *   - If `undefined` the status text will be automatically resolved to the
 *     `statusCodes`'s corresponding status text, e.g. `OK` for `200`,
 *     `Not Found` for `404`, `Internal Server Error` for `500` etc.
 *
 *   - If a `string` the value will be used as status text
 *   - If a {@link HttpErrorConstuctorArgs} object the status text and message
 *     will be potentially revolved from there.
 */
constructor(
  statusCode: number,
  statusTextOrArgs?: string | HttpErrorConstuctorArgs
)
```

### Utility functions

#### `isHttpError()`

Check if something is an instance of `HttpError`

```ts
import { isHttpError } from '@poppanator/http-error'

try {
  await doSomethingThatMightThrow()
} catch (err: unknown) {
  if (isHttpError(err)) {
    logger.warn(`Got HTTP error: ${err.fullStatusMessage}`)
  } else {
    logger.warn(`Got error: ${err.message}`)
  }
}
```

This is the method signature:

```ts
export function isHttpError(obj: unknown): obj is HttpError
```

#### `resolveHttStatusCode()`

When dealing with HTTP client libraries you might end up with a HTTP error
object of sort, but it might not always be clear how to get hold of the
HTTP status code.

This function tries to resolve the status code by looking at various
properties with common status code names.

By default the function will check for the `code`, `status` and `statusCode`
properties and return the value of any of these if the value is a number.

You can also pass additional properties to check in `otherProperties`

```ts
import { resolveHttStatusCode } from '@poppanator/http-error'

const withCode = { code: 201 }
resolveHttStatusCode(withCode) // 201

const withStatus = { status: 201 }
resolveHttStatusCode(withStatus) // 201

const withStatusCode = { statusCode: 201 }
resolveHttStatusCode(withStatusCode) // 201

const withNonNumeric = { code: '201' }
resolveHttStatusCode(withNonNumeric) // undefined

const withOutKnownProperty = { prop: 201 }
resolveHttStatusCode(withOutKnownProperty) // undefined

const withOutKnownProperty = { prop: 201 }
resolveHttStatusCode(withOutKnownProperty, ['prop']) // 201
```

This is the method signature:

```ts
type PlainObject<T = any> = { [key: string]: T }
export type IsStatusCodeLike = number | PlainObject

/**
 * @param arg - Something with maybe a status code
 * @param otherProperties - Additional properties that might represent a
 *  status code
 * @returns The resolved status code or `undefined` if none was found
 */
export function resolveHttStatusCode<T extends string[]>(
  arg: IsStatusCodeLike,
  otherProperties?: T
): Maybe<number>
```
