import 'jest'

import * as F from './functions'

test(
  'isInformational() should return true for values between 100 and 199 ' +
    'and false otherwise',
  () => {
    expect(F.isInformational(100)).toEqual(true)
    expect(F.isInformational(199)).toEqual(true)
    expect(F.isInformational(99)).toEqual(false)
    expect(F.isInformational(200)).toEqual(false)
  }
)

test(
  'isSuccess() should return true for values between 200 and 299 ' +
    'and false otherwise',
  () => {
    expect(F.isSuccess(200)).toEqual(true)
    expect(F.isSuccess(299)).toEqual(true)
    expect(F.isSuccess(99)).toEqual(false)
    expect(F.isSuccess(199)).toEqual(false)
    expect(F.isSuccess(300)).toEqual(false)
  }
)

test(
  'isRedirect() should return true for values between 300 and 399 ' +
    'and false otherwise',
  () => {
    expect(F.isRedirect(300)).toEqual(true)
    expect(F.isRedirect(399)).toEqual(true)
    expect(F.isRedirect(99)).toEqual(false)
    expect(F.isRedirect(199)).toEqual(false)
    expect(F.isRedirect(299)).toEqual(false)
    expect(F.isRedirect(400)).toEqual(false)
  }
)

test(
  'isClientError() should return true for values between 400 and 499 ' +
    'and false otherwise',
  () => {
    expect(F.isClientError(400)).toEqual(true)
    expect(F.isClientError(499)).toEqual(true)
    expect(F.isClientError(99)).toEqual(false)
    expect(F.isClientError(199)).toEqual(false)
    expect(F.isClientError(399)).toEqual(false)
    expect(F.isClientError(500)).toEqual(false)
  }
)

test(
  'isServerError() should return true for values between 500 and 599 ' +
    'and false otherwise',
  () => {
    expect(F.isServerError(500)).toEqual(true)
    expect(F.isServerError(599)).toEqual(true)
    expect(F.isServerError(99)).toEqual(false)
    expect(F.isServerError(199)).toEqual(false)
    expect(F.isServerError(499)).toEqual(false)
    expect(F.isServerError(600)).toEqual(false)
  }
)

describe('getStatusText()', () => {
  test('100 should return Continue', () => {
    expect(F.getStatusText(100)).toEqual('Continue')
  })

  test('101 should return Switching Protocol', () => {
    expect(F.getStatusText(101)).toEqual('Switching Protocol')
  })

  test('102 should return Processing', () => {
    expect(F.getStatusText(102)).toEqual('Processing')
  })

  test('103 should return Early Hints', () => {
    expect(F.getStatusText(103)).toEqual('Early Hints')
  })

  test('200 should return OK', () => {
    expect(F.getStatusText(200)).toEqual('OK')
  })

  test('201 should return Created', () => {
    expect(F.getStatusText(201)).toEqual('Created')
  })

  test('202 should return Accepted', () => {
    expect(F.getStatusText(202)).toEqual('Accepted')
  })

  test('203 should return Non Authoritative Information', () => {
    expect(F.getStatusText(203)).toEqual('Non Authoritative Information')
  })

  test('204 should return No Content', () => {
    expect(F.getStatusText(204)).toEqual('No Content')
  })

  test('205 should return Reset Content', () => {
    expect(F.getStatusText(205)).toEqual('Reset Content')
  })

  test('206 should return Partial Content', () => {
    expect(F.getStatusText(206)).toEqual('Partial Content')
  })

  test('207 should return Multi Status', () => {
    expect(F.getStatusText(207)).toEqual('Multi Status')
  })

  test('208 should return Already Reported', () => {
    expect(F.getStatusText(208)).toEqual('Already Reported')
  })

  test("226 should return I'm Used", () => {
    expect(F.getStatusText(226)).toEqual("I'm Used")
  })

  test('300 should return Multiple Choices', () => {
    expect(F.getStatusText(300)).toEqual('Multiple Choices')
  })

  test('301 should return Moved Permanently', () => {
    expect(F.getStatusText(301)).toEqual('Moved Permanently')
  })

  test('302 should return Found', () => {
    expect(F.getStatusText(302)).toEqual('Found')
  })

  test('303 should return See Other', () => {
    expect(F.getStatusText(303)).toEqual('See Other')
  })

  test('304 should return Not Modified', () => {
    expect(F.getStatusText(304)).toEqual('Not Modified')
  })

  test('305 should return Use Proxy', () => {
    expect(F.getStatusText(305)).toEqual('Use Proxy')
  })

  test('306 should return Switch Proxy', () => {
    expect(F.getStatusText(306)).toEqual('Switch Proxy')
  })

  test('307 should return Temporary Redirect', () => {
    expect(F.getStatusText(307)).toEqual('Temporary Redirect')
  })

  test('308 should return Permanent Redirect', () => {
    expect(F.getStatusText(308)).toEqual('Permanent Redirect')
  })

  test('400 should return Bad Request', () => {
    expect(F.getStatusText(400)).toEqual('Bad Request')
  })

  test('401 should return Unauthorized', () => {
    expect(F.getStatusText(401)).toEqual('Unauthorized')
  })

  test('402 should return Payment Required', () => {
    expect(F.getStatusText(402)).toEqual('Payment Required')
  })

  test('403 should return Forbidden', () => {
    expect(F.getStatusText(403)).toEqual('Forbidden')
  })

  test('404 should return Not Found', () => {
    expect(F.getStatusText(404)).toEqual('Not Found')
  })

  test('405 should return Method Not Allowed', () => {
    expect(F.getStatusText(405)).toEqual('Method Not Allowed')
  })

  test('406 should return Not Acceptable', () => {
    expect(F.getStatusText(406)).toEqual('Not Acceptable')
  })

  test('407 should return Proxy Authentication Required', () => {
    expect(F.getStatusText(407)).toEqual('Proxy Authentication Required')
  })

  test('408 should return Request Timeout', () => {
    expect(F.getStatusText(408)).toEqual('Request Timeout')
  })

  test('409 should return Conflict', () => {
    expect(F.getStatusText(409)).toEqual('Conflict')
  })

  test('410 should return Gone', () => {
    expect(F.getStatusText(410)).toEqual('Gone')
  })

  test('411 should return Length Required', () => {
    expect(F.getStatusText(411)).toEqual('Length Required')
  })

  test('412 should return Precondition Failed', () => {
    expect(F.getStatusText(412)).toEqual('Precondition Failed')
  })

  test('413 should return Payload Too Large', () => {
    expect(F.getStatusText(413)).toEqual('Payload Too Large')
  })

  test('414 should return URI Too Long', () => {
    expect(F.getStatusText(414)).toEqual('URI Too Long')
  })

  test('415 should return Unsupported Media Type', () => {
    expect(F.getStatusText(415)).toEqual('Unsupported Media Type')
  })

  test('416 should return Range Not Satisfiable', () => {
    expect(F.getStatusText(416)).toEqual('Range Not Satisfiable')
  })

  test('417 should return Expectation Failed', () => {
    expect(F.getStatusText(417)).toEqual('Expectation Failed')
  })

  test("418 should return I'm A Teapot", () => {
    expect(F.getStatusText(418)).toEqual("I'm A Teapot")
  })

  test('421 should return Misdirected Request', () => {
    expect(F.getStatusText(421)).toEqual('Misdirected Request')
  })

  test('422 should return Unprocessable Entity', () => {
    expect(F.getStatusText(422)).toEqual('Unprocessable Entity')
  })

  test('423 should return Locked', () => {
    expect(F.getStatusText(423)).toEqual('Locked')
  })

  test('424 should return Failed Dependency', () => {
    expect(F.getStatusText(424)).toEqual('Failed Dependency')
  })

  test('425 should return Too Early', () => {
    expect(F.getStatusText(425)).toEqual('Too Early')
  })

  test('426 should return Upgrade Required', () => {
    expect(F.getStatusText(426)).toEqual('Upgrade Required')
  })

  test('428 should return Precondition Required', () => {
    expect(F.getStatusText(428)).toEqual('Precondition Required')
  })

  test('429 should return Too Many Requests', () => {
    expect(F.getStatusText(429)).toEqual('Too Many Requests')
  })

  test('431 should return Request Header Fields Too Large', () => {
    expect(F.getStatusText(431)).toEqual('Request Header Fields Too Large')
  })

  test('451 should return Unavailable For Legal Reasons', () => {
    expect(F.getStatusText(451)).toEqual('Unavailable For Legal Reasons')
  })

  test('500 should return Internal Server Error', () => {
    expect(F.getStatusText(500)).toEqual('Internal Server Error')
  })

  test('501 should return Not Implemented', () => {
    expect(F.getStatusText(501)).toEqual('Not Implemented')
  })

  test('502 should return Bad Gateway', () => {
    expect(F.getStatusText(502)).toEqual('Bad Gateway')
  })

  test('503 should return Service Unavailable', () => {
    expect(F.getStatusText(503)).toEqual('Service Unavailable')
  })

  test('504 should return Gateway Timeout', () => {
    expect(F.getStatusText(504)).toEqual('Gateway Timeout')
  })

  test('505 should return HTTP Version Not Supported', () => {
    expect(F.getStatusText(505)).toEqual('HTTP Version Not Supported')
  })

  test('506 should return Variant Also Negotiates', () => {
    expect(F.getStatusText(506)).toEqual('Variant Also Negotiates')
  })

  test('507 should return Insufficient Storage', () => {
    expect(F.getStatusText(507)).toEqual('Insufficient Storage')
  })

  test('508 should return Loop Detected', () => {
    expect(F.getStatusText(508)).toEqual('Loop Detected')
  })

  test('510 should return Not Extended', () => {
    expect(F.getStatusText(510)).toEqual('Not Extended')
  })

  test('511 should return Network Authentication Required', () => {
    expect(F.getStatusText(511)).toEqual('Network Authentication Required')
  })
})

describe('isHttpStatus()', () => {
  test('Should return true for know status HTTP codes such as 102, 200 and 404', () => {
    expect(F.isHttpStatus(102)).toEqual(true)
    expect(F.isHttpStatus(200)).toEqual(true)
    expect(F.isHttpStatus(404)).toEqual(true)
  })

  test('Should return false for non HTTP status codes such as 99, 270 and 589 and 605', () => {
    expect(F.isHttpStatus(99)).toEqual(false)
    expect(F.isHttpStatus(270)).toEqual(false)
    expect(F.isHttpStatus(589)).toEqual(false)
    expect(F.isHttpStatus(605)).toEqual(false)
  })
})
