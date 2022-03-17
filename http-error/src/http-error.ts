import { getStatusText } from '@poppanator/http-constants'

export class HttpError extends Error {
  private readonly _code: number
  private readonly _text: string

  constructor(statusCode: number, statusText?: string) {
    super(statusText ?? getStatusText(statusCode))

    this._code = statusCode
    this._text = this.message
  }

  public get statusCode(): number {
    return this._code
  }

  public get statusText(): string {
    return this._text
  }
}
