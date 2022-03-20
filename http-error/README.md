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
