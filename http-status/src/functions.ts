import type { Maybe } from './_type-types'
import * as tuples from './tuples'

const is =
  (res: number) =>
  (code: number): boolean =>
    Math.floor(code / 100) === res

/** Returns true if `code` is an "informational" status code, e.g. 100-199 */
export const isInformational = is(1)

/** Returns true if `code` is a "successful" status code, e.g. 200-299 */
export const isSuccess = is(2)

/** Returns true if `code` is a "redirection" status code, e.g. 300-399 */
export const isRedirect = is(3)

/** Returns true if `code` is a "client error" status code, e.g. 400-499 */
export const isClientError = is(4)

/** Returns true if `code` is a "server error" status code, e.g. 500-599 */
export const isServerError = is(5)

/**
 * Check if `code` is an existing HTTP status code
 */
export function isHttpStatus(code: number): boolean {
  return Object.values(tuples).some(([status]) => code === status)
}

/**
 * Returns the associated message with the status code `status`, or `undefined`
 * if not found
 */
export function getStatusText(status: number): Maybe<string> {
  for (const [code, text] of Object.values(tuples)) {
    if (code === status) {
      return text
    }
  }
}
