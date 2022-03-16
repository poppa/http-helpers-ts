import * as C from './codes'
import * as T from './texts'

// -------------------------------------------------------------------------- //
//                                                                            //
//                               Informational                                //
//                                                                            //
// -------------------------------------------------------------------------- //

export const Continue = [C.Continue, T.Continue]
export const SwitchingProtocol = [C.SwitchingProtocol, T.SwitchingProtocol]
export const Processing = [C.Processing, T.Processing]
export const EarlyHints = [C.EarlyHints, T.EarlyHints]

// -------------------------------------------------------------------------- //
//                                                                            //
//                                 Successful                                 //
//                                                                            //
// -------------------------------------------------------------------------- //

export const Ok = [C.Ok, T.Ok]
export const Created = [C.Created, T.Created]
export const Accepted = [C.Accepted, T.Accepted]
// prettier-ignore
export const NonAuthoritativeInformation = [C.NonAuthoritativeInformation, T.NonAuthoritativeInformation]
export const NoContent = [C.NoContent, T.NoContent]
export const ResetContent = [C.ResetContent, T.ResetContent]
export const PartialContent = [C.PartialContent, T.PartialContent]
export const MultiStatus = [C.MultiStatus, T.MultiStatus]
export const AlreadyReported = [C.AlreadyReported, T.AlreadyReported]
export const IMUsed = [C.IMUsed, T.IMUsed]

// -------------------------------------------------------------------------- //
//                                                                            //
//                                 Redirects                                  //
//                                                                            //
// -------------------------------------------------------------------------- //

export const MultipleChoices = [C.MultipleChoices, T.MultipleChoices]
export const MovedPermanently = [C.MovedPermanently, T.MovedPermanently]
export const Found = [C.Found, T.Found]
export const SeeOther = [C.SeeOther, T.SeeOther]
export const NotModified = [C.NotModified, T.NotModified]
/** @deprecated*/
export const UseProxy = [C.UseProxy, T.UseProxy]
/** @deprecated */
export const SwitchProxy = [C.SwitchProxy, T.SwitchProxy]
export const TemporaryRedirect = [C.TemporaryRedirect, T.TemporaryRedirect]
export const PermanentRedirect = [C.PermanentRedirect, T.PermanentRedirect]

// -------------------------------------------------------------------------- //
//                                                                            //
//                               Client errors                                //
//                                                                            //
// -------------------------------------------------------------------------- //

export const BadRequest = 'Bad Request'
export const Unauthorized = 'Unauthorized'
export const PaymentRequired = 'Payment Required'
export const Forbidden = 'Forbidden'
export const NotFound = 'Not Found'
export const MethodNotAllowed = 'Method Not Allowed'
export const NotAcceptable = 'Not Acceptable'
export const ProxyAuthenticationRequired = 'Proxy Authentication Required'
export const RequestTimeout = 'Request Timeout'
export const Conflict = 'Conflict'
export const Gone = 'Gone'
export const LengthRequired = 'Length Required'
export const PreconditionFailed = 'Precondition Failed'
export const PayloadTooLarge = 'Payload Too Large'
export const URITooLong = 'URI Too Long'
export const UnsupportedMediaType = 'Unsupported Media Type'
export const RangeNotSatisfiable = 'Range Not Satisfiable'
export const ExpectationFailed = 'Expectation Failed'
export const ImAteapot = `I'm A Teapot`
export const MisdirectedRequest = 'Misdirected Request'
export const UnprocessableEntity = 'Unprocessable Entity'
export const Locked = 'Locked'
export const FailedDependency = 'Failed Dependency'
export const TooEarly = 'Too Early'
export const UpgradeRequired = 'Upgrade Required'
export const PreconditionRequired = 'Precondition Required'
export const TooManyRequests = 'Too Many Requests'
export const RequestHeaderFieldsTooLarge = 'Request Header Fields Too Large'
export const UnavailableForLegalReasons = 'Unavailable For Legal Reasons'

// -------------------------------------------------------------------------- //
//                                                                            //
//                               Server errors                                //
//                                                                            //
// -------------------------------------------------------------------------- //

export const InternalServerError = 'Internal Server Error'
export const NotImplemented = 'Not Implemented'
export const BadGateway = 'Bad Gateway'
export const ServiceUnavailable = 'Service Unavailable'
export const GatewayTimeout = 'Gateway Timeout'
export const HTTPVersionNotSupported = 'HTTP Version Not Supported'
export const VariantAlsoNegotiates = 'Variant Also Negotiates'
export const InsufficientStorage = 'Insufficient Storage'
export const LoopDetected = 'Loop Detected'
export const NotExtended = 'Not Extended'
export const NetworkAuthenticationRequired = 'Network Authentication Required'
