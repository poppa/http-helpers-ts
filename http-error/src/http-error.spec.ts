import 'jest'
import { HttpError } from './http-error.js'

test('No second constructor argument should give default status text', () => {
  expect(new HttpError(201).statusText).toEqual('Created')
})

test('Second constructor arg should treat a string as status text', () => {
  const err = new HttpError(201, 'Made it')
  expect(err.statusCode).toEqual(201)
  expect(err.statusText).toEqual('Made it')
})

test('Second constructor arg with object with status text should use that', () => {
  const err = new HttpError(201, { statusText: 'Made it' })
  expect(err.statusCode).toEqual(201)
  expect(err.statusText).toEqual('Made it')
})

test('Second constructor arg with object with message should use that', () => {
  const err = new HttpError(201, { message: 'Error message' })
  expect(err.statusCode).toEqual(201)
  expect(err.message).toEqual('Error message')
  expect(err.statusText).toEqual('Created')
})

test('Second constructor arg with object with both message and status text should use those', () => {
  const err = new HttpError(201, {
    statusText: 'Made it',
    message: 'Error message',
  })
  expect(err.statusCode).toEqual(201)
  expect(err.message).toEqual('Error message')
  expect(err.statusText).toEqual('Made it')
})

test('statusCode should return what was given to constructor', () => {
  const e = new HttpError(200)
  expect(e.statusCode).toEqual(200)
})

test('statusCode should be read-only', () => {
  const e = new HttpError(200)
  expect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    e.statusCode = 201
  }).toThrow()
})

test('statusText should be read-only', () => {
  const e = new HttpError(200)
  expect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    e.statusText = 'Nono'
  }).toThrow()
})

test('fullStatusMessage should always return "XXX Text"', () => {
  const err1 = new HttpError(201)
  expect(err1.fullStatusMessage).toEqual('201 Created')

  const err2 = new HttpError(201, 'Made it')
  expect(err2.fullStatusMessage).toEqual('201 Made it')

  const err3 = new HttpError(201, { statusText: 'Made it' })
  expect(err3.fullStatusMessage).toEqual('201 Made it')

  const err4 = new HttpError(201, { message: 'Error message' })
  expect(err4.fullStatusMessage).toEqual('201 Created')

  const err5 = new HttpError(201, {
    message: 'Error message',
    statusText: 'Made it',
  })
  expect(err5.fullStatusMessage).toEqual('201 Made it')
})
