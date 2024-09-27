import * as C from './codes.js'
import * as T from './texts.js'

export type StatusTuple = [number, string]

// -------------------------------------------------------------------------- //
//                                                                            //
//                               Informational                                //
//                                                                            //
// -------------------------------------------------------------------------- //

export const Continue: StatusTuple = [C.Continue, T.Continue]
export const SwitchingProtocol: StatusTuple = [
  C.SwitchingProtocol,
  T.SwitchingProtocol,
]
export const Processing: StatusTuple = [C.Processing, T.Processing]
export const EarlyHints: StatusTuple = [C.EarlyHints, T.EarlyHints]

// -------------------------------------------------------------------------- //
//                                                                            //
//                                 Successful                                 //
//                                                                            //
// -------------------------------------------------------------------------- //

export const Ok: StatusTuple = [C.Ok, T.Ok]
export const Created: StatusTuple = [C.Created, T.Created]
export const Accepted: StatusTuple = [C.Accepted, T.Accepted]
export const NonAuthoritativeInformation: StatusTuple = [
  C.NonAuthoritativeInformation,
  T.NonAuthoritativeInformation,
]
export const NoContent: StatusTuple = [C.NoContent, T.NoContent]
export const ResetContent: StatusTuple = [C.ResetContent, T.ResetContent]
export const PartialContent: StatusTuple = [C.PartialContent, T.PartialContent]
export const MultiStatus: StatusTuple = [C.MultiStatus, T.MultiStatus]
export const AlreadyReported: StatusTuple = [
  C.AlreadyReported,
  T.AlreadyReported,
]
export const IMUsed: StatusTuple = [C.ImUsed, T.ImUsed]

// -------------------------------------------------------------------------- //
//                                                                            //
//                                 Redirects                                  //
//                                                                            //
// -------------------------------------------------------------------------- //

export const MultipleChoices: StatusTuple = [
  C.MultipleChoices,
  T.MultipleChoices,
]
export const MovedPermanently: StatusTuple = [
  C.MovedPermanently,
  T.MovedPermanently,
]
export const Found: StatusTuple = [C.Found, T.Found]
export const SeeOther: StatusTuple = [C.SeeOther, T.SeeOther]
export const NotModified: StatusTuple = [C.NotModified, T.NotModified]
/** @deprecated*/
export const UseProxy: StatusTuple = [C.UseProxy, T.UseProxy]
/** @deprecated */
export const SwitchProxy: StatusTuple = [C.SwitchProxy, T.SwitchProxy]
export const TemporaryRedirect: StatusTuple = [
  C.TemporaryRedirect,
  T.TemporaryRedirect,
]
export const PermanentRedirect: StatusTuple = [
  C.PermanentRedirect,
  T.PermanentRedirect,
]

// -------------------------------------------------------------------------- //
//                                                                            //
//                               Client errors                                //
//                                                                            //
// -------------------------------------------------------------------------- //

export const BadRequest: StatusTuple = [C.BadRequest, T.BadRequest]
export const Unauthorized: StatusTuple = [C.Unauthorized, T.Unauthorized]
export const PaymentRequired: StatusTuple = [
  C.PaymentRequired,
  T.PaymentRequired,
]
export const Forbidden: StatusTuple = [C.Forbidden, T.Forbidden]
export const NotFound: StatusTuple = [C.NotFound, T.NotFound]
export const MethodNotAllowed: StatusTuple = [
  C.MethodNotAllowed,
  T.MethodNotAllowed,
]
export const NotAcceptable: StatusTuple = [C.NotAcceptable, T.NotAcceptable]
export const ProxyAuthenticationRequired: StatusTuple = [
  C.ProxyAuthenticationRequired,
  T.ProxyAuthenticationRequired,
]
export const RequestTimeout: StatusTuple = [C.RequestTimeout, T.RequestTimeout]
export const Conflict: StatusTuple = [C.Conflict, T.Conflict]
export const Gone: StatusTuple = [C.Gone, T.Gone]
export const LengthRequired: StatusTuple = [C.LengthRequired, T.LengthRequired]
export const PreconditionFailed: StatusTuple = [
  C.PreconditionFailed,
  T.PreconditionFailed,
]
export const PayloadTooLarge: StatusTuple = [
  C.PayloadTooLarge,
  T.PayloadTooLarge,
]
export const UriTooLong: StatusTuple = [C.UriTooLong, T.UriTooLong]
export const UnsupportedMediaType: StatusTuple = [
  C.UnsupportedMediaType,
  T.UnsupportedMediaType,
]
export const RangeNotSatisfiable: StatusTuple = [
  C.RangeNotSatisfiable,
  T.RangeNotSatisfiable,
]
export const ExpectationFailed: StatusTuple = [
  C.ExpectationFailed,
  T.ExpectationFailed,
]
export const ImAteapot: StatusTuple = [C.ImAteapot, T.ImAteapot]
export const MisdirectedRequest: StatusTuple = [
  C.MisdirectedRequest,
  T.MisdirectedRequest,
]
export const UnprocessableEntity: StatusTuple = [
  C.UnprocessableEntity,
  T.UnprocessableEntity,
]
export const Locked: StatusTuple = [C.Locked, T.Locked]
export const FailedDependency: StatusTuple = [
  C.FailedDependency,
  T.FailedDependency,
]
export const TooEarly: StatusTuple = [C.TooEarly, T.TooEarly]
export const UpgradeRequired: StatusTuple = [
  C.UpgradeRequired,
  T.UpgradeRequired,
]
export const PreconditionRequired: StatusTuple = [
  C.PreconditionRequired,
  T.PreconditionRequired,
]
export const TooManyRequests: StatusTuple = [
  C.TooManyRequests,
  T.TooManyRequests,
]
export const RequestHeaderFieldsTooLarge: StatusTuple = [
  C.RequestHeaderFieldsTooLarge,
  T.RequestHeaderFieldsTooLarge,
]
export const UnavailableForLegalReasons: StatusTuple = [
  C.UnavailableForLegalReasons,
  T.UnavailableForLegalReasons,
]

// -------------------------------------------------------------------------- //
//                                                                            //
//                               Server errors                                //
//                                                                            //
// -------------------------------------------------------------------------- //

export const InternalServerError: StatusTuple = [
  C.InternalServerError,
  T.InternalServerError,
]
export const NotImplemented: StatusTuple = [C.NotImplemented, T.NotImplemented]
export const BadGateway: StatusTuple = [C.BadGateway, T.BadGateway]
export const ServiceUnavailable: StatusTuple = [
  C.ServiceUnavailable,
  T.ServiceUnavailable,
]
export const GatewayTimeout: StatusTuple = [C.GatewayTimeout, T.GatewayTimeout]
export const HttpVersionNotSupported: StatusTuple = [
  C.HttpVersionNotSupported,
  T.HttpVersionNotSupported,
]
export const VariantAlsoNegotiates: StatusTuple = [
  C.VariantAlsoNegotiates,
  T.VariantAlsoNegotiates,
]
export const InsufficientStorage: StatusTuple = [
  C.InsufficientStorage,
  T.InsufficientStorage,
]
export const LoopDetected: StatusTuple = [C.LoopDetected, T.LoopDetected]
export const NotExtended: StatusTuple = [C.NotExtended, T.NotExtended]
export const NetworkAuthenticationRequired: StatusTuple = [
  C.NetworkAuthenticationRequired,
  T.NetworkAuthenticationRequired,
]
