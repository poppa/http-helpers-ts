import { getStatusText } from '@poppanator/http-constants'
import type { Maybe } from './_type-types.js'

export type HttpErrorConstuctorArgs = {
  /** Status text */
  statusText?: string
  /** Error message */
  message?: string
}

/**
 * A class representing a HTTP error with status code and status text
 */
export class HttpError extends Error {
  private readonly _code: number
  private readonly _text: Maybe<string>

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
  ) {
    super()

    let text: Maybe<string>
    let message: Maybe<string>

    if (typeof statusTextOrArgs === 'undefined') {
      text = getStatusText(statusCode)
    } else if (typeof statusTextOrArgs === 'string') {
      text = statusTextOrArgs
    } else {
      message = statusTextOrArgs.message
      text = statusTextOrArgs.statusText ?? getStatusText(statusCode)
    }

    this._code = statusCode
    this._text = text

    if (message) {
      this.message = message
    } else {
      this.message = `${statusCode} ${this._text ?? ''}`
    }
  }

  /** Returns the HTTP status code */
  public get statusCode(): number {
    return this._code
  }

  /**
   * Returs the HTTP status text, or an empty string if non was set or resolved
   */
  public get statusText(): string {
    return this._text ?? ''
  }

  /**
   * Returns the complete HTTP status string, like `200 OK`, `404 Not Found`
   * e t c.
   */
  public get fullStatusMessage(): string {
    return `${this._code} ${this.statusText}`
  }
}
