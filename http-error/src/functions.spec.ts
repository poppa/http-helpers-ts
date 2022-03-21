import 'jest'
import { HttpError } from './http-error'
import { isHttpError, resolveHttStatusCode } from './functions'

test('resolveHttStatusCode should be handle a HttpError instance', () => {
  const err = new HttpError(401)
  expect(resolveHttStatusCode(err)).toEqual(401)
})

test('resolveHttStatusCode should handle a generic object with a numeric "code" property', () => {
  expect(resolveHttStatusCode({ code: 200 })).toEqual(200)
})

test('resolveHttStatusCode should handle a generic object with a numeric "status" property', () => {
  expect(resolveHttStatusCode({ status: 200 })).toEqual(200)
})

test('resolveHttStatusCode should handle a generic object with a numeric "statusCode" property', () => {
  expect(resolveHttStatusCode({ code: 200 })).toEqual(200)
})

test('resolveHttStatusCode should return undefined when "code" is non-numeric', () => {
  expect(resolveHttStatusCode({ code: '200' })).toEqual(undefined)
})

test('resolveHttStatusCode should return undefined when "status" is non-numeric', () => {
  expect(resolveHttStatusCode({ status: '200' })).toEqual(undefined)
})

test('resolveHttStatusCode should return undefined when "statusCode" is non-numeric', () => {
  expect(resolveHttStatusCode({ statusCode: '200' })).toEqual(undefined)
})

test('resolveHttStatusCode should handle numerical additional properties', () => {
  expect(resolveHttStatusCode({ st: 200 }, ['st'])).toEqual(200)
})

test('resolveHttStatusCode should return undefined when additional property is non-numeric', () => {
  expect(resolveHttStatusCode({ st: '200' }, ['st'])).toEqual(undefined)
})

test('isHttpError should return true when given an HttpError instance and false otherwise', () => {
  expect(isHttpError(new HttpError(200))).toEqual(true)
  expect(isHttpError(new Error('Not HttpError'))).toEqual(false)
  expect(isHttpError('no error')).toEqual(false)
})
