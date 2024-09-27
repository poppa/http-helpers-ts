import 'jest'
import { HttpError } from './http-error.js'
import { isHttpError, resolveHttpStatusCode } from './functions.js'

test('resolveHttpStatusCode should be handle a HttpError instance', () => {
  const err = new HttpError(401)
  expect(resolveHttpStatusCode(err)).toEqual(401)
})

test('resolveHttpStatusCode should handle a generic object with a numeric "code" property', () => {
  expect(resolveHttpStatusCode({ code: 200 })).toEqual(200)
})

test('resolveHttpStatusCode should handle a generic object with a numeric "status" property', () => {
  expect(resolveHttpStatusCode({ status: 200 })).toEqual(200)
})

test('resolveHttpStatusCode should handle a generic object with a numeric "statusCode" property', () => {
  expect(resolveHttpStatusCode({ code: 200 })).toEqual(200)
})

test('resolveHttpStatusCode should return undefined when "code" is non-numeric', () => {
  expect(resolveHttpStatusCode({ code: '200' })).toEqual(undefined)
})

test('resolveHttpStatusCode should return undefined when "status" is non-numeric', () => {
  expect(resolveHttpStatusCode({ status: '200' })).toEqual(undefined)
})

test('resolveHttpStatusCode should return undefined when "statusCode" is non-numeric', () => {
  expect(resolveHttpStatusCode({ statusCode: '200' })).toEqual(undefined)
})

test('resolveHttpStatusCode should handle numerical additional properties', () => {
  expect(resolveHttpStatusCode({ st: 200 }, ['st'])).toEqual(200)
})

test('resolveHttpStatusCode should return undefined when additional property is non-numeric', () => {
  expect(resolveHttpStatusCode({ st: '200' }, ['st'])).toEqual(undefined)
})

test('isHttpError should return true when given an HttpError instance and false otherwise', () => {
  expect(isHttpError(new HttpError(200))).toEqual(true)
  expect(isHttpError(new Error('Not HttpError'))).toEqual(false)
  expect(isHttpError('no error')).toEqual(false)
})
