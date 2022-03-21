/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpError } from './http-error'
import type { Maybe } from './_type-types'

// eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
type PlainObject<T = any> = { [key: string]: T }

// eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
export type IsStatusCodeLike = number | PlainObject

export function hasProperty<T extends PlainObject, P extends string>(
  o: T,
  prop: P
): o is T & { [key in P]: unknown } {
  return prop in o
}

const isnum = (a: unknown): a is number => typeof a === 'number'

/**
 * Resolve the status code from `arg`.
 *
 * When dealing with HTTP client libraries you might end up with a HTTP error
 * object of sort, but it might not always be clear how to get hold of the
 * HTTP status code.
 *
 * This function tries to resolve the status code by looking at various
 * properties with common status code names.
 *
 * By default the function will check for the `code`, `status` and `statusCode`
 * properties and return the value of any of these if the value is a number.
 *
 * You can also pass additional properties to check in `otherProperties`
 *
 * @param arg - Something with maybe a status code
 * @param otherProperties - Additional properties that might represent a
 *  status code
 * @returns The resolved status code or `undefined` if none was found
 */
export function resolveHttStatusCode<T extends string[]>(
  arg: IsStatusCodeLike,
  otherProperties?: T
): Maybe<number> {
  if (typeof arg === 'number') {
    return arg
  } else if (hasProperty(arg, 'code') && isnum(arg.code)) {
    return arg.code
  } else if (hasProperty(arg, 'status') && isnum(arg.status)) {
    return arg.status
  } else if (hasProperty(arg, 'statusCode') && isnum(arg.statusCode)) {
    return arg.statusCode
  }

  if (otherProperties) {
    for (const prop of otherProperties) {
      if (hasProperty(arg, prop) && isnum(arg[prop])) {
        return arg[prop] as number
      }
    }
  }

  return undefined
}

/**
 * Returns `true` if `obj` is an instance of {@link HttpError}
 */
export function isHttpError(obj: unknown): obj is HttpError {
  return obj !== null && typeof obj === 'object' && obj instanceof HttpError
}
