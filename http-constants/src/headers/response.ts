/**
 * These are response-only headers
 */

/* eslint-disable @typescript-eslint/no-unused-vars */
// Imported for doc purposes only
import type { Referer } from './request'
import type { ContentType } from './general'

/**
 * The `Accept-Patch` response HTTP header advertises which media-type the
 * server is able to understand in a PATCH request.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Patch)
 */
export const AcceptPatch = 'Accept-Patch'

/**
 * The `Accept-Post` response HTTP header advertises which
 * [media types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types)
 * are accepted by the server for HTTP post requests.
 */
export const AcceptPost = 'Accept-Post'

/**
 * The `Accept-Ranges` HTTP response header is a marker used by the server to
 * advertise its support for partial requests from the client for file
 * downloads. The value of this field indicates the unit that can be used to
 * define a range.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Ranges)
 */
export const AcceptRanges = 'Accept-Ranges'

/**
 * The `Age` header contains the time in seconds the object was in a proxy
 * cache.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Age)
 */
export const Age = 'Age'

/**
 * The `Allow` header lists the set of methods supported by a resource.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Allow)
 */
export const Allow = 'Allow'

/**
 * The `Alt-Svc` HTTP header allows a server to indicate that another network
 * location (the "alternative service") can be treated as authoritative for
 * that origin when making future requests.
 *
 * [Read more]https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Alt-Svc()
 */
export const AltSvc = 'Alt-Svc'

/**
 * The `Clear-Site-Data` header clears browsing data (cookies, storage, cache)
 * associated with the requesting website. It allows web developers to have
 * more control over the data stored by a client browser for their origins.
 *
 * @note This feature is available only in secure contexts (HTTPS)
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Clear-Site-Data)
 */
export const ClearSiteData = 'Clear-Site-Data'

/**
 * In a regular HTTP response, the `Content-Disposition` response header is a
 * header indicating if the content is expected to be displayed inline in the
 * browser, that is, as a Web page or as part of a Web page, or as an
 * attachment, that is downloaded and saved locally.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition)
 */
export const ContentDisposition = 'Content-Disposition'

/**
 * The `Content-Encoding` [representation header](https://developer.mozilla.org/en-US/docs/Glossary/Representation_header)
 * lists any encodings that have been applied to the representation (message
 * payload), and in what order. This lets the recipient know how to decode the
 * representation in order to obtain the original payload format.
 *
 * Content encoding is mainly used to compress the message data without losing
 * information about the origin media type.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Encoding)
 */
export const ContentEncoding = 'Content-Encoding'

/**
 * The `Content-Language` [representation header](https://developer.mozilla.org/en-US/docs/Glossary/Representation_header)
 * is used to describe the language(s) intended for the audience, so users can
 * differentiate it according to their own preferred language.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Language)
 */
export const ContentLanguage = 'Content-Language'

/**
 * The `Content-Location` header indicates an alternate location for the
 * returned data. The principal use is to indicate the URL of a resource
 * transmitted as the result of
 * [content negotiation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Content_negotiation).
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Location)
 */
export const ContentLocation = 'Content-Location'

/**
 * The `Content-Range` response HTTP header indicates where in a full body
 * message a partial message belongs.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Range)
 */
export const ContentRange = 'Content-Range'

/**
 * The HTTP `Content-Security-Policy-Report-Only` response header allows web
 * developers to experiment with policies by monitoring (but not enforcing)
 * their effects.
 *
 * These violation reports consist of JSON documents sent via an HTTP `POST`
 * request to the specified URI.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy-Report-Only)
 */
export const ContentSecurityPolicyReportOnly =
  'Content-Security-Policy-Report-Only'

/**
 * Specifies the delta-encoding entity tag of the response
 */
export const DeltaBase = 'Delta-Base'

/**
 * The `Digest` response HTTP header provides a digest of the selected
 * representation of the requested resource.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Digest)
 */
export const Digest = 'Digest'

/**
 * The `ETag` (or entity tag) HTTP response header is an identifier for a
 * specific version of a resource. It lets caches be more efficient and save
 * bandwidth, as a web server does not need to resend a full response if the
 * content was not changed. Additionally, etags help to prevent simultaneous
 * updates of a resource from overwriting each other
 * (["mid-air collisions"](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag#avoiding_mid-air_collisions)).
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag)
 */
export const ETag = 'ETag'

/**
 * The `Expect-CT` header lets sites opt in to reporting and/or enforcement of
 * [Certificate Transparency](https://developer.mozilla.org/en-US/docs/Web/Security/Certificate_Transparency)
 * requirements, to prevent the use of misissued certificates for that site
 * from going unnoticed.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Expect-CT)
 */
export const ExpectCT = 'Expect-CT'

/**
 * The `Expires` HTTP header contains the date/time after which the response is
 * considered expired.
 *
 * Invalid expiration dates with value `0` represent a date in the past and mean
 * that the resource is already expired.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Expires)
 */
export const Expires = 'Expires'

/**
 * Instance-manipulations applied to the response
 */
export const IM = 'IM'

/**
 * The `Last-Modified` response HTTP header contains a date and time when the
 * origin server believes the resource was last modified. It is used as a
 * validator to determine if the resource is the same as the previously stored
 * one.
 *
 * Less accurate than an {@link ETag} header, it is a fallback mechanism.
 * Conditional requests containing
 * [`If-Modified-Since`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Modified-Since)
 * or [`If-Unmodified-Since`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Unmodified-Since)
 * headers make use of this field.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Last-Modified)
 */
export const LastModified = 'Last-Modified'

/**
 * The HTTP `Link` entity-header field provides a means for serializing one or
 * more links in HTTP headers. It is semantically equivalent to the HTML
 * [`<link>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link)
 * element.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Link)
 */
export const Link = 'Link'

/**
 * The `Location` response header indicates the URL to redirect a page to. It
 * only provides a meaning when served with a `3xx` (redirection) or `201`
 * (created) status response.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Location)
 */
export const Location = 'Location'

/**
 * The HTTP `NEL` response header is used to configure network request logging.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/NEL)
 */
export const Nel = 'NEL'

/**
 * The HTTP `Proxy-Authenticate` response header defines the authentication
 * method that should be used to gain access to a resource behind a
 * [proxy server](https://developer.mozilla.org/en-US/docs/Glossary/Proxy_server).
 * It authenticates the request to the proxy server, allowing it to transmit
 * the request further.
 *
 * The `Proxy-Authenticate` header is sent along with a
 * [`407 Proxy Authentication Required`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/407).
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Proxy-Authenticate)
 */
export const ProxyAuthenticate = 'Proxy-Authenticate'

/**
 * @deprecated Use [Certificate Transparency](https://developer.mozilla.org/en-US/docs/Web/Security/Certificate_Transparency)
 * and [Expect-CT](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Expect-CT)
 * header instead.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Public-Key-Pins)
 */
export const PublicKeyPins = 'Public-Key-Pins'

/**
 * The `Referrer-Policy` HTTP header controls how much referrer information
 * (sent with the {@link Referer `Referer`} header) should be included with
 * requests.
 *
 * Aside from the HTTP header, you can set this policy in HTML.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy)
 */
export const ReferrerPolicy = 'Referrer-Policy'

/**
 * The `Retry-After` response HTTP header indicates how long the user agent
 * should wait before making a follow-up request.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After)
 */
export const RetryAfter = 'Retry-After'

/**
 * The `Sec-WebSocket-Accept` header is used in the websocket opening handshake.
 * It would appear in the response headers. That is, this is header is sent from
 * server to client to inform that server is willing to initiate a websocket
 * connection.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-WebSocket-Accept)
 */
export const SecWebSocketAccept = 'Sec-WebSocket-Accept'

/**
 * The `Server` header describes the software used by the origin server that
 * handled the request — that is, the server that generated the response.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Server)
 */
export const Server = 'Server'

/**
 * The `Server-Timing` header communicates one or more metrics and descriptions
 * for a given request-response cycle. It is used to surface any backend server
 * timing metrics (e.g. database read/write, CPU time, file system access, etc.)
 * in the developer tools in the user's browser or in the
 * [PerformanceServerTiming](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceServerTiming)
 * interface.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Server-Timing)
 */
export const ServerTiming = 'Server-Timing'

/**
 * The `Set-Cookie` HTTP response header is used to send a cookie from the
 * server to the user agent, so that the user agent can send it back to the
 * server later.
 *
 * To send multiple cookies, multiple `Set-Cookie` headers should be sent in
 * the same response.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie)
 */
export const SetCookie = 'Set-Cookie'

/**
 * The `SourceMap` HTTP response header links generated code to a source map,
 * enabling the browser to reconstruct the original source and present the
 * reconstructed original in the debugger.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/SourceMap)
 */
export const SourceMap = 'SourceMap'

/**
 * The HTTP `Strict-Transport-Security` response header (often abbreviated as
 * [HSTS](https://developer.mozilla.org/en-US/docs/Glossary/HSTS)) informs
 * browsers that the site should only be accessed using HTTPS, and that any
 * future attempts to access it using HTTP should automatically be converted to
 * HTTPS.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security)
 */
export const StrictTransportSecurity = 'Strict-Transport-Security'

/**
 * The `Timing-Allow-Origin` response header specifies origins that are allowed
 * to see values of attributes retrieved via features of the
 * [Resource Timing API](https://developer.mozilla.org/en-US/docs/Web/API/Resource_Timing_API),
 * which would otherwise be reported as zero due to cross-origin restrictions.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Timing-Allow-Origin)
 */
export const TimingAllowOrigin = 'Timing-Allow-Origin'

/**
 * The `Trailer` response header allows the sender to include additional fields
 * at the end of chunked messages in order to supply metadata that might be
 * dynamically generated while the message body is sent, such as a message
 * integrity check, digital signature, or post-processing status.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Trailer)
 */
export const Trailer = 'Trailer'

/**
 * The `Transfer-Encoding` header specifies the form of encoding used to safely
 * transfer the [payload body](https://developer.mozilla.org/en-US/docs/Glossary/Payload_body)
 * to the user.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Transfer-Encoding)
 */
export const TransferEncoding = 'Transfer-Encoding'

/**
 * The `Tk` response header indicates the tracking status that applied to the
 * corresponding request.
 *
 * > @derecated This feature is no longer recommended.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Tk)
 */
export const Tk = 'Tk'

/**
 * The `Vary` HTTP response header describes the parts of the request message
 * aside from the method and URL that influenced the content of the response it
 * occurs in. Most often, this is used to create a cache key when
 * [content negotiation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Content_negotiation)
 * is in use.
 *
 * [Read mote](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Vary)
 */
export const Vary = 'Vary'

/**
 * The HTTP `WWW-Authenticate` response header defines the
 * [HTTP authentication](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication)
 * methods ("challenges") that might be used to gain access to a specific
 * resource.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/WWW-Authenticate)
 */
export const WWWAuthenticate = 'WWW-Authenticate'

/**
 * The `X-Content-Type-Options` response HTTP header is a marker used by the
 * server to indicate that the
 * [MIME types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types)
 * advertised in the {@link ContentType `Content-Type`} headers should be
 * followed and not be changed.
 *
 * The header allows you to avoid
 * [MIME type sniffing](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types#mime_sniffing)
 * by saying that the MIME types are deliberately configured.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options)
 */
export const XContentTypeOptions = 'X-Content-Type-Options'

/**
 * The `X-DNS-Prefetch-Control` HTTP response header controls DNS prefetching,
 * a feature by which browsers proactively perform domain name resolution on
 * both links that the user may choose to follow as well as URLs for items
 * referenced by the document, including images, CSS, JavaScript, and so forth.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control)
 */
export const XDNSPrefetchControl = 'X-DNS-Prefetch-Control'

/**
 * The `X-Frame-Options` HTTP response header can be used to indicate whether
 * or not a browser should be allowed to render a page in a `<frame>`,
 * `<iframe>`, `<embed>` or `<object>`.
 *
 * Sites can use this to avoid
 * [click-jacking](https://developer.mozilla.org/en-US/docs/Web/Security/Types_of_attacks#click-jacking)
 * attacks, by ensuring that their content is not embedded into other sites.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options)
 */
export const XFrameOptions = 'X-Frame-Options'

// -------------------------------------------------------------------------- //
//                                                                            //
//                               Non-Standard                                 //
//                                                                            //
// -------------------------------------------------------------------------- //

/**
 * The HTTP `Content-Security-Policy` response header allows web site
 * administrators to control resources the user agent is allowed to load for a
 * given page. With a few exceptions, policies mostly involve specifying server
 * origins and script endpoints. This helps guard against
 * [cross-site scripting](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting)
 * attacks.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy)
 */
export const ContentSecurityPolicy = 'Content-Security-Policy'

/**
 * The non-standard `Large-Allocation` response header tells the browser that
 * the page being loaded is going to want to perform a large allocation. It is
 * currently only implemented in Firefox, but is harmless to send to every
 * browser.
 *
 * @note Non-standard
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Large-Allocation)
 */
export const LargeAllocation = 'Large-Allocation'

/**
 * Redirect to a URL after an arbitrary delay expressed in seconds
 *
 * @note Non-standard
 */
export const Refresh = 'Refresh'

/**
 * Can be used by servers to send their name and version
 *
 * @note Non-standard
 * @see {@link Server}
 */
export const XPoweredBy = 'X-Powered-By'

/**
 * Allows the server to pass a request ID that clients can send back to let the
 * server correlate the request
 *
 * @note Non-standard
 */
export const XRequestID = 'X-Request-ID'

/**
 * Sets which version of Internet Explorer compatibility layer should be used.
 * Only used if you need to support IE8 or IE9.
 *
 * @note Non-standard
 *
 * [See StackOverflow](https://stackoverflow.com/a/6771584/205039)
 */
export const XUACompatible = 'X-UA-Compatible'

/**
 * The HTTP `X-XSS-Protection` response header is a feature of Internet
 * Explorer, Chrome and Safari that stops pages from loading when they detect
 * reflected cross-site scripting (XSS) attacks.
 *
 * @note Non-standard
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection)
 */
export const XXSSProtection = 'X-XSS-Protection'
