// -------------------------------------------------------------------------- //
//                                                                            //
//                               Informational                                //
//                                                                            //
// -------------------------------------------------------------------------- //

/**
 * This interim response indicates that the client should continue the request
 * or ignore the response if the request is already finished.
 */
export const Continue = 100

/**
 * This code is sent in response to an
 * [Upgrade](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Upgrade)
 * request header from the client and indicates the protocol the server is
 * switching to.
 */
export const SwitchingProtocol = 101

/**
 * This code indicates that the server has received and is processing the
 * request, but no response is available yet.
 *
 * @note WebDAV
 */
export const Processing = 102

/**
 * This status code is primarily intended to be used with the
 * [Link](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Link)
 * header, letting the user agent start preloading resources while the server
 * prepares a response.
 */
export const EarlyHints = 103

// -------------------------------------------------------------------------- //
//                                                                            //
//                                 Successful                                 //
//                                                                            //
// -------------------------------------------------------------------------- //

/**
 * The request succeeded. The result meaning of "success" depends on the HTTP
 * method:
 *
 *   - `GET`: The resource has been fetched and transmitted in the message body.
 *   - `HEAD`: The representation headers are included in the response without
 *     any message body.
 *   - `PUT` or `POST`: The resource describing the result of the action is
 *     transmitted in the message body.
 *   - `TRACE`: The message body contains the request message as received by
 *     the server.
 */
export const Ok = 200

/**
 * The request succeeded, and a new resource was created as a result. This is
 * typically the response sent after `POST` requests, or some `PUT` requests.
 */
export const Created = 201

/**
 * The request has been received but not yet acted upon. It is noncommittal,
 * since there is no way in HTTP to later send an asynchronous response
 * indicating the outcome of the request. It is intended for cases where another
 * process or server handles the request, or for batch processing.
 */
export const Accepted = 202

/**
 * This response code means the returned metadata is not exactly the same as is
 * available from the origin server, but is collected from a local or a
 * third-party copy. This is mostly used for mirrors or backups of another
 * resource. Except for that specific case, the `200 OK` response is preferred
 * to this status.
 */
export const NonAuthoritativeInformation = 203

/**
 * There is no content to send for this request, but the headers may be useful.
 * The user agent may update its cached headers for this resource with the new
 * ones.
 */
export const NoContent = 204

/**
 * Tells the user agent to reset the document which sent this request.
 */
export const ResetContent = 205

/**
 * This response code is used when the
 * [Range](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Range)
 * header is sent from the client to request only part of a resource.
 */
export const PartialContent = 206

/**
 * Conveys information about multiple resources, for situations where multiple
 * status codes might be appropriate.
 *
 * @note WebDAV
 */
export const MultiStatus = 207

/**
 * Used inside a `<dav:propstat>` response element to avoid repeatedly
 * enumerating the internal members of multiple bindings to the same collection.
 *
 * @note WebDAV
 */
export const AlreadyReported = 208

/**
 * The server has fulfilled a `GET` request for the resource, and the response
 * is a representation of the result of one or more instance-manipulations
 * applied to the current instance.
 *
 * @note [HTTP Delta encoding](https://datatracker.ietf.org/doc/html/rfc3229)
 */
export const IMUsed = 226

// -------------------------------------------------------------------------- //
//                                                                            //
//                                 Redirects                                  //
//                                                                            //
// -------------------------------------------------------------------------- //

/**
 * The request has more than one possible response. The user agent or user
 * should choose one of them. (There is no standardized way of choosing one of
 * the responses, but HTML links to the possibilities are recommended so the
 * user can pick.)
 */
export const MultipleChoices = 300

/**
 * The URL of the requested resource has been changed permanently. The new URL
 * is given in the response.
 */
export const MovedPermanently = 301

/**
 * This response code means that the URI of requested resource has been changed
 * temporarily. Further changes in the URI might be made in the future.
 * Therefore, this same URI should be used by the client in future requests.
 */
export const Found = 302

/**
 * The server sent this response to direct the client to get the requested
 * resource at another URI with a `GET` request.
 */
export const SeeOther = 303

/**
 * This is used for caching purposes. It tells the client that the response has
 * not been modified, so the client can continue to use the same cached version
 * of the response.
 */
export const NotModified = 304

/**
 * Defined in a previous version of the HTTP specification to indicate that a
 * requested response must be accessed by a proxy. It has been deprecated due
 * to security concerns regarding in-band configuration of a proxy.
 *
 * @deprecated
 */
export const UseProxy = 305

/**
 * This response code is no longer used; it is just reserved. It was used in a
 * previous version of the HTTP/1.1 specification.
 *
 * @deprecated
 */
export const SwitchProxy = 306

/**
 * The server sends this response to direct the client to get the requested
 * resource at another URI with same method that was used in the prior request.
 * This has the same semantics as the `302 Found` HTTP response code, with the
 * exception that the user agent must not change the HTTP method used: if a
 * `POST` was used in the first request, a `POST` must be used in the second
 * request.
 */
export const TemporaryRedirect = 307

/**
 * This means that the resource is now permanently located at another URI,
 * specified by the Location: HTTP Response header. This has the same semantics
 * as the `301 Moved Permanently` HTTP response code, with the exception that
 * the user agent must not change the HTTP method used: if a `POST` was used in
 * the first request, a `POST` must be used in the second request.
 */
export const PermanentRedirect = 308

// -------------------------------------------------------------------------- //
//                                                                            //
//                               Client errors                                //
//                                                                            //
// -------------------------------------------------------------------------- //

/**
 * The server cannot or will not process the request due to something that is
 * perceived to be a client error (e.g., malformed request syntax, invalid
 * request message framing, or deceptive request routing).
 */
export const BadRequest = 400

/**
 * Although the HTTP standard specifies "unauthorized", semantically this
 * response means "unauthenticated". That is, the client must authenticate
 * itself to get the requested response.
 */
export const Unauthorized = 401

/**
 * This response code is reserved for future use. The initial aim for creating
 * this code was using it for digital payment systems, however this status code
 * is used very rarely and no standard convention exists.
 */
export const PaymentRequired = 402

/**
 * The client does not have access rights to the content; that is, it is
 * unauthorized, so the server is refusing to give the requested resource.
 * Unlike `401 Unauthorized`, the client's identity is known to the server.
 */
export const Forbidden = 403

/**
 * The server can not find the requested resource. In the browser, this means
 * the URL is not recognized. In an API, this can also mean that the endpoint
 * is valid but the resource itself does not exist. Servers may also send this
 * response instead of `403 Forbidden` to hide the existence of a resource from
 * an unauthorized client. This response code is probably the most well known
 * due to its frequent occurrence on the web.
 */
export const NotFound = 404

/**
 * The request method is known by the server but is not supported by the target
 * resource. For example, an API may not allow calling `DELETE` to remove a
 * resource.
 */
export const MethodNotAllowed = 405

/**
 * This response is sent when the web server, after performing
 * [server-driven content negotiation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Content_negotiation#server-driven_negotiation),
 * doesn't find any content that conforms to the criteria given by the user
 * agent.
 */
export const NotAcceptable = 406
export const ProxyAuthenticationRequired = 407
export const RequestTimeout = 408
export const Conflict = 409
export const Gone = 410
export const LengthRequired = 411
export const PreconditionFailed = 412
export const PayloadTooLarge = 413
export const URITooLong = 414
export const UnsupportedMediaType = 415
export const RangeNotSatisfiable = 416
export const ExpectationFailed = 417
export const ImAteapot = 418
export const MisdirectedRequest = 421
export const UnprocessableEntity = 422
export const Locked = 423
export const FailedDependency = 424
export const TooEarly = 425
export const UpgradeRequired = 426
export const PreconditionRequired = 428
export const TooManyRequests = 429
export const RequestHeaderFieldsTooLarge = 431
export const UnavailableForLegalReasons = 451

// -------------------------------------------------------------------------- //
//                                                                            //
//                               Server errors                                //
//                                                                            //
// -------------------------------------------------------------------------- //

export const InternalServerError = 500
export const NotImplemented = 501
export const BadGateway = 502
export const ServiceUnavailable = 503
export const GatewayTimeout = 504
export const HTTPVersionNotSupported = 505
export const VariantAlsoNegotiates = 506
export const InsufficientStorage = 507
export const LoopDetected = 508
export const NotExtended = 510
export const NetworkAuthenticationRequired = 511
