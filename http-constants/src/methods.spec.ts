import 'jest'

import { method, type Method } from './index'

interface MyType {
  method: Method
}

test('Connect should equal "CONNECT"', () => {
  expect(method.Connect).toEqual('CONNECT')
})

test('Delete should equal "DELETE"', () => {
  expect(method.Delete).toEqual('DELETE')
})

test('Get should equal "GET"', () => {
  expect(method.Get).toEqual('GET')
})

test('Head should equal "HEAD"', () => {
  expect(method.Head).toEqual('HEAD')
})

test('Options should equal "OPTIONS"', () => {
  expect(method.Options).toEqual('OPTIONS')
})

test('Patch should equal "PATCH"', () => {
  expect(method.Patch).toEqual('PATCH')
})

test('Post should equal "POST"', () => {
  expect(method.Post).toEqual('POST')
})

test('Put should equal "PUT"', () => {
  expect(method.Put).toEqual('PUT')
})

test('Trace should equal "TRACE"', () => {
  expect(method.Trace).toEqual('TRACE')
})

test('Method type', () => {
  const mt: MyType = {
    method: 'DELETE',
  }
  expect(mt.method).toEqual('DELETE')
})
