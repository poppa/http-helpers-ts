import 'jest'

import * as T from './tuples'

describe('1xx - Informational statuses', () => {
  test('Continue', () => {
    const [code, text] = T.Continue

    expect(code).toEqual(100)
    expect(text).toEqual('Continue')
  })

  test('Switching Protocol', () => {
    const [code, text] = T.SwitchingProtocol

    expect(code).toEqual(101)
    expect(text).toEqual('Switching Protocol')
  })

  test('Processing', () => {
    const [code, text] = T.Processing

    expect(code).toEqual(102)
    expect(text).toEqual('Processing')
  })

  test('Early Hints', () => {
    const [code, text] = T.EarlyHints

    expect(code).toEqual(103)
    expect(text).toEqual('Early Hints')
  })
})

describe('2xx - Successful statuses', () => {
  test('Ok', () => {
    const [code, text] = T.Ok

    expect(code).toEqual(200)
    expect(text).toEqual('OK')
  })

  test('Created', () => {
    const [code, text] = T.Created

    expect(code).toEqual(201)
    expect(text).toEqual('Created')
  })

  test('Accepted', () => {
    const [code, text] = T.Accepted

    expect(code).toEqual(202)
    expect(text).toEqual('Accepted')
  })

  test('NonAuthoritativeInformation', () => {
    const [code, text] = T.NonAuthoritativeInformation

    expect(code).toEqual(203)
    expect(text).toEqual('Non Authoritative Information')
  })

  test('No Content', () => {
    const [code, text] = T.NoContent

    expect(code).toEqual(204)
    expect(text).toEqual('No Content')
  })

  test('Reset Content', () => {
    const [code, text] = T.ResetContent

    expect(code).toEqual(205)
    expect(text).toEqual('Reset Content')
  })

  test('Partial Content', () => {
    const [code, text] = T.PartialContent

    expect(code).toEqual(206)
    expect(text).toEqual('Partial Content')
  })

  test('Multi Status', () => {
    const [code, text] = T.MultiStatus

    expect(code).toEqual(207)
    expect(text).toEqual('Multi Status')
  })

  test('Already Reported', () => {
    const [code, text] = T.AlreadyReported

    expect(code).toEqual(208)
    expect(text).toEqual('Already Reported')
  })

  test("I'm Used", () => {
    const [code, text] = T.IMUsed

    expect(code).toEqual(226)
    expect(text).toEqual("I'm Used")
  })
})

describe('3xx - Redirect statues', () => {
  test('Multiple Choices', () => {
    const [code, text] = T.MultipleChoices

    expect(code).toEqual(300)
    expect(text).toEqual('Multiple Choices')
  })

  test('Moved Permanently', () => {
    const [code, text] = T.MovedPermanently

    expect(code).toEqual(301)
    expect(text).toEqual('Moved Permanently')
  })

  test('Found', () => {
    const [code, text] = T.Found

    expect(code).toEqual(302)
    expect(text).toEqual('Found')
  })

  test('SeeOther', () => {
    const [code, text] = T.SeeOther

    expect(code).toEqual(303)
    expect(text).toEqual('See Other')
  })

  test('Not Modified', () => {
    const [code, text] = T.NotModified

    expect(code).toEqual(304)
    expect(text).toEqual('Not Modified')
  })

  test('Use Proxy', () => {
    const [code, text] = T.UseProxy

    expect(code).toEqual(305)
    expect(text).toEqual('Use Proxy')
  })

  test('Switch Proxy', () => {
    const [code, text] = T.SwitchProxy

    expect(code).toEqual(306)
    expect(text).toEqual('Switch Proxy')
  })

  test('Temporary Redirect', () => {
    const [code, text] = T.TemporaryRedirect

    expect(code).toEqual(307)
    expect(text).toEqual('Temporary Redirect')
  })

  test('Permanent Redirect', () => {
    const [code, text] = T.PermanentRedirect

    expect(code).toEqual(308)
    expect(text).toEqual('Permanent Redirect')
  })
})

describe('4xx - Client Error Statuses', () => {
  test('Bad Request', () => {
    const [code, text] = T.BadRequest

    expect(code).toEqual(400)
    expect(text).toEqual('Bad Request')
  })

  test('Unauthorized', () => {
    const [code, text] = T.Unauthorized

    expect(code).toEqual(401)
    expect(text).toEqual('Unauthorized')
  })

  test('Payment Required', () => {
    const [code, text] = T.PaymentRequired

    expect(code).toEqual(402)
    expect(text).toEqual('Payment Required')
  })

  test('Forbidden', () => {
    const [code, text] = T.Forbidden

    expect(code).toEqual(403)
    expect(text).toEqual('Forbidden')
  })

  test('Not Found', () => {
    const [code, text] = T.NotFound

    expect(code).toEqual(404)
    expect(text).toEqual('Not Found')
  })

  test('Method Not Allowed', () => {
    const [code, text] = T.MethodNotAllowed

    expect(code).toEqual(405)
    expect(text).toEqual('Method Not Allowed')
  })

  test('Not Acceptable', () => {
    const [code, text] = T.NotAcceptable

    expect(code).toEqual(406)
    expect(text).toEqual('Not Acceptable')
  })

  test('Proxy Authentication Required', () => {
    const [code, text] = T.ProxyAuthenticationRequired

    expect(code).toEqual(407)
    expect(text).toEqual('Proxy Authentication Required')
  })

  test('Request Timeout', () => {
    const [code, text] = T.RequestTimeout

    expect(code).toEqual(408)
    expect(text).toEqual('Request Timeout')
  })

  test('Conflict', () => {
    const [code, text] = T.Conflict

    expect(code).toEqual(409)
    expect(text).toEqual('Conflict')
  })

  test('Gone', () => {
    const [code, text] = T.Gone

    expect(code).toEqual(410)
    expect(text).toEqual('Gone')
  })

  test('Length Required', () => {
    const [code, text] = T.LengthRequired

    expect(code).toEqual(411)
    expect(text).toEqual('Length Required')
  })

  test('Precondition Failed', () => {
    const [code, text] = T.PreconditionFailed

    expect(code).toEqual(412)
    expect(text).toEqual('Precondition Failed')
  })

  test('Payload Too Large', () => {
    const [code, text] = T.PayloadTooLarge

    expect(code).toEqual(413)
    expect(text).toEqual('Payload Too Large')
  })

  test('URI Too Long', () => {
    const [code, text] = T.UriTooLong

    expect(code).toEqual(414)
    expect(text).toEqual('URI Too Long')
  })

  test('Unsupported Media Type', () => {
    const [code, text] = T.UnsupportedMediaType

    expect(code).toEqual(415)
    expect(text).toEqual('Unsupported Media Type')
  })

  test('Range Not Satisfiable', () => {
    const [code, text] = T.RangeNotSatisfiable

    expect(code).toEqual(416)
    expect(text).toEqual('Range Not Satisfiable')
  })

  test('Expectation Failed', () => {
    const [code, text] = T.ExpectationFailed

    expect(code).toEqual(417)
    expect(text).toEqual('Expectation Failed')
  })

  test("I'm A Teapot", () => {
    const [code, text] = T.ImAteapot

    expect(code).toEqual(418)
    expect(text).toEqual("I'm A Teapot")
  })

  test('Misdirected Request', () => {
    const [code, text] = T.MisdirectedRequest

    expect(code).toEqual(421)
    expect(text).toEqual('Misdirected Request')
  })

  test('Unprocessable Entity', () => {
    const [code, text] = T.UnprocessableEntity

    expect(code).toEqual(422)
    expect(text).toEqual('Unprocessable Entity')
  })

  test('Locked', () => {
    const [code, text] = T.Locked

    expect(code).toEqual(423)
    expect(text).toEqual('Locked')
  })

  test('Failed Dependency', () => {
    const [code, text] = T.FailedDependency

    expect(code).toEqual(424)
    expect(text).toEqual('Failed Dependency')
  })

  test('TooEarly', () => {
    const [code, text] = T.TooEarly

    expect(code).toEqual(425)
    expect(text).toEqual('Too Early')
  })

  test('Upgrade Required', () => {
    const [code, text] = T.UpgradeRequired

    expect(code).toEqual(426)
    expect(text).toEqual('Upgrade Required')
  })

  test('Precondition Required', () => {
    const [code, text] = T.PreconditionRequired

    expect(code).toEqual(428)
    expect(text).toEqual('Precondition Required')
  })

  test('Too Many Requests', () => {
    const [code, text] = T.TooManyRequests

    expect(code).toEqual(429)
    expect(text).toEqual('Too Many Requests')
  })

  test('Request Header Fields Too Large', () => {
    const [code, text] = T.RequestHeaderFieldsTooLarge

    expect(code).toEqual(431)
    expect(text).toEqual('Request Header Fields Too Large')
  })

  test('Unavailable For Legal Reasons', () => {
    const [code, text] = T.UnavailableForLegalReasons

    expect(code).toEqual(451)
    expect(text).toEqual('Unavailable For Legal Reasons')
  })
})

describe('5xx - Server errors', () => {
  test('Internal Server Error', () => {
    const [code, text] = T.InternalServerError

    expect(code).toEqual(500)
    expect(text).toEqual('Internal Server Error')
  })

  test('Not Implemented', () => {
    const [code, text] = T.NotImplemented

    expect(code).toEqual(501)
    expect(text).toEqual('Not Implemented')
  })

  test('Bad Gateway', () => {
    const [code, text] = T.BadGateway

    expect(code).toEqual(502)
    expect(text).toEqual('Bad Gateway')
  })

  test('Service Unavailable', () => {
    const [code, text] = T.ServiceUnavailable

    expect(code).toEqual(503)
    expect(text).toEqual('Service Unavailable')
  })

  test('Gateway Timeout', () => {
    const [code, text] = T.GatewayTimeout

    expect(code).toEqual(504)
    expect(text).toEqual('Gateway Timeout')
  })

  test('Http Version Not Supported', () => {
    const [code, text] = T.HttpVersionNotSupported

    expect(code).toEqual(505)
    expect(text).toEqual('HTTP Version Not Supported')
  })

  test('Variant Also Negotiates', () => {
    const [code, text] = T.VariantAlsoNegotiates

    expect(code).toEqual(506)
    expect(text).toEqual('Variant Also Negotiates')
  })

  test('Insufficient Storage', () => {
    const [code, text] = T.InsufficientStorage

    expect(code).toEqual(507)
    expect(text).toEqual('Insufficient Storage')
  })

  test('Loop Detected', () => {
    const [code, text] = T.LoopDetected

    expect(code).toEqual(508)
    expect(text).toEqual('Loop Detected')
  })

  test('Not Extended', () => {
    const [code, text] = T.NotExtended

    expect(code).toEqual(510)
    expect(text).toEqual('Not Extended')
  })

  test('Network Authentication Required', () => {
    const [code, text] = T.NetworkAuthenticationRequired

    expect(code).toEqual(511)
    expect(text).toEqual('Network Authentication Required')
  })
})
