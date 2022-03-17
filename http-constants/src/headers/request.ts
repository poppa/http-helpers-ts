/**
 * Acceptable instance-manipulations for the request.
 */
export const Aim = 'A-IM'

/**
 * The `Accept` request HTTP header indicates which content types, expressed as
 * [MIME types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types),
 * the client is able to understand.
 *
 * The server uses [content negotiation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Content_negotiation)
 * to select one of the proposals and informs the client of the choice with the
 * Content-Type response header.
 *
 * Browsers set required values for this header based on the context of the
 * request. For example, a browser uses different values in a request when
 * fetches a CSS stylesheet, image, video, or a script.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept)
 */
export const Accept = 'Accept'

/**
 * The `Accept-Charset` request HTTP header was a header that advertised a
 * client's supported character encodings. It is no longer widely used.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Charset)
 */
export const AcceptCharset = 'Accept-Charset'

/**
 * The `Accept-Encoding` request HTTP header indicates the content encoding
 * (usually a compression algorithm) that the client can understand. The server
 * uses [content negotiation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Content_negotiation)
 * to select one of the proposal and informs the client of that choice with the
 * `Content-Encoding` response header.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Encoding)
 */
export const AcceptEncoding = 'Accept-Encoding'

/**
 * The `Accept-Language` request HTTP header indicates the natural language and
 * locale that the client prefers. The server uses
 * [content negotiation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Content_negotiation)
 * to select one of the proposals and informs the client of the choice with the
 * `Content-Language` response header.
 *
 * Browsers set required values for this header according to their active user
 * interface language. Users rarely change it, and such changes are not
 * recommended because they may lead to fingerprinting.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language)
 */
export const AcceptLanguage = 'Accept-Language'

/**
 * Request a past version of the resource prior to the datetime passed
 */
export const AcceptDatetime = 'Accept-Datetime'

/**
 * The `Access-Control-Request-Method` request header is used by browsers when
 * issuing a [preflight request](https://developer.mozilla.org/en-US/docs/Glossary/Preflight_request),
 * to let the server know which [HTTP method](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
 * will be used when the actual request is made.
 *
 * This header is necessary as the preflight request is always an
 * [`OPTIONS`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/OPTIONS)
 * and doesn't use the same method as the actual request.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Request-Method)
 */
export const AccessControlRequestMethod = 'Access-Control-Request-Method'

/**
 * The `Access-Control-Request-Headers` request header is used by browsers when
 * issuing a [preflight request](https://developer.mozilla.org/en-US/docs/Glossary/Preflight_request),
 * to let the server know which HTTP headers the client might send when the
 * actual request is made (such as with `setRequestHeader()`).
 *
 * The complementary server-side header of `Access-Control-Allow-Headers` will
 * answer this browser-side header.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Request-Headers)
 */
export const AccessControlRequestHeaders = 'Access-Control-Request-Headers'

/**
 * The HTTP `Authorization` request header can be used to provide credentials
 * that authenticate a user agent with a server, allowing access to a protected
 * resource.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization)
 */
export const Authorization = 'Authorization'

/**
 * The `Cache-Control` HTTP header field holds directives (instructions) — in
 * both requests and responses — that control [caching](https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching)
 * in browsers and shared caches (e.g. Proxies, CDNs).
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control)
 */
export const CacheControl = 'Cache-Control'

/**
 * The `Connection` general header controls whether the network connection stays
 * open after the current transaction finishes. If the value sent is
 * `keep-alive`, the connection is persistent and not closed, allowing for
 * subsequent requests to the same server to be done.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Connection)
 */
export const Connection = 'Connection'

/**
 * The `Content-Length` header indicates the size of the message body, in bytes,
 * sent to the recipient.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Length)
 */
export const ContentLength = 'Content-Length'

/**
 * The `Content-Type` representation header is used to indicate the original
 * media type of the resource (prior to any content encoding applied for
 * sending).
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type)
 */
export const ContentType = 'Content-Type'

/**
 * The `Cookie` HTTP request header contains stored HTTP cookies associated with
 * the server (i.e. previously sent by the server with the
 * [`Set-Cookie`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie)
 * header or set in Javascript using
 * [Document.cookie](https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie)).
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cookie)
 */
export const Cookie = 'Cookie'

/**
 * The `Date` general HTTP header contains the date and time at which the
 * message was originated.
 *
 * > Warning: Date is listed in the forbidden header names in the fetch spec,
 * so this code will not send the Date header:
 *
 * > ```js
 * fetch('https://httpbin.org/get', {
 *   'headers': {
 *     'Date': (new Date()).toUTCString()
 *   }
 * })
 * > ```
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Date)
 */
export const Date = 'Date'

/**
 * The `Expect` HTTP request header indicates expectations that need to be met
 * by the server to handle the request successfully.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Expect)
 */
export const Expect = 'Expect'

/**
 * The `Forwarded` request header contains information that may be added by
 * [reverse proxy servers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Proxy_servers_and_tunneling)
 * (load balancers, CDNs, and so on) that would otherwise be altered or lost
 * when proxy servers are involved in the path of the request.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Forwarded)
 */
export const Forwarded = 'Forwarded'

/**
 * The `From` request header contains an Internet email address for a human user
 * who controls the requesting user agent.
 *
 * > Warning: You must not use the From header for access control or
 * > authentication.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/From)
 */
export const From = 'From'

/**
 * The `Host` request header specifies the host and port number of the server
 * to which the request is being sent.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Host)
 */
export const Host = 'Host'

/**
 * The `If-Match` HTTP request header makes the request conditional. For
 * [GET](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET) and
 * [HEAD](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/HEAD)
 * methods, the server will return the requested resource only if it matches
 * one of the listed `ETags`. For [PUT](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PUT)
 * and other non-safe methods, it will only upload the resource in this case.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Match)
 */
export const IfMatch = 'If-Match'

/**
 * The `If-Modified-Since` request HTTP header makes the request conditional:
 * the server sends back the requested resource, with a
 * [`200`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200)
 * status, only if it has been last modified after the given date.
 *
 * If the resource has not been modified since, the response is a
 * [`304`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/304) without
 * any body; the `Last-Modified` response header of a previous request contains
 * the date of last modification. Unlike
 * {@link IfUnmodifiedSince `If-Unmodified-Since`}, `If-Modified-Since` can
 * only be used with a `GET` or `HEAD`.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Modified-Since)
 */
export const IfModifiedSince = 'If-Modified-Since'

/**
 * The `If-None-Match` HTTP request header makes the request conditional.
 * For [GET](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET) and
 * [HEAD](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/HEAD)
 * methods, the server will return the requested resource, with a
 * [`200`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200) status,
 * only if it doesn't have an [`ETag`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag)
 * matching the given ones.
 *
 * For other methods, the request will be processed only if the eventually
 * existing resource's [`ETag`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag)
 * doesn't match any of the values listed.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-None-Match)
 */
export const IfNoneMatch = 'If-None-Match'

/**
 * The `If-Range` HTTP request header makes a range request conditional: if the
 * condition is fulfilled, the range request is issued, and the server sends
 * back a [`206`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/206)
 * `Partial Content` answer with the appropriate body.
 *
 * If the condition is not fulfilled, the full resource is sent back with a
 * [`200`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200) `OK`
 * status.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Range)
 */
export const IfRange = 'If-Range'

/**
 * The HTTP `If-Unmodified-Since` request header makes the request for the
 * resource conditional: the server will send the requested resource or accept
 * it in the case of a [`POST`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST)
 * or another non-[safe](https://developer.mozilla.org/en-US/docs/Glossary/Safe/HTTP)
 * method only if the resource has not been modified after the date specified by
 * this HTTP header.
 *
 * If the resource has been modified after the specified date, the response
 * will be a [`412`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/412)
 * `Precondition Failed` error.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Unmodified-Since)
 */
export const IfUnmodifiedSince = 'If-Unmodified-Since'

/**
 * Limit the number of times the message can be forwarded through proxies or
 * gateways
 */
export const MaxForwards = 'Max-Forwards'

/**
 * The `Origin` request header indicates the
 * [origin](https://developer.mozilla.org/en-US/docs/Glossary/Origin)
 * (scheme, hostname, and port) that caused the request. For example, if a user
 * agent needs to request resources included in a page, or fetched by scripts
 * that it executes, then the origin of the page may be included in the request.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin)
 */
export const Origin = 'Origin'

/**
 * The `Pragma` HTTP/1.0 general header is an implementation-specific header
 * that may have various effects along the request-response chain. This header
 * serves for backwards compatibility with the HTTP/1.0 caches that do not have
 * a [Cache-Control](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control)
 * HTTP/1.1 header.
 *
 * > **Note:** `Pragma` is not specified for HTTP responses and is therefore not
 * > a reliable replacement for the general HTTP/1.1 `Cache-Control` header,
 * > although its behavior is the same as `Cache-Control: no-cache` if the
 * > `Cache-Control` header field is omitted in a request.
 * >
 * > Use `Pragma` only for backwards compatibility with HTTP/1.0 clients.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Pragma)
 */
export const Pragma = 'Pragma'

/**
 * The HTTP `Proxy-Authorization` request header contains the credentials to
 * authenticate a user agent to a proxy server, usually after the server has
 * responded with a [407](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/407)
 * `Proxy Authentication Required` status and the
 * [`Proxy-Authenticate`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Proxy-Authenticate)
 * header.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Proxy-Authorization)
 */
export const ProxyAuthorization = 'Proxy-Authorization'

/**
 * The `Range` HTTP request header indicates the part of a document that the
 * server should return. Several parts can be requested with one Range header
 * at once, and the server may send back these ranges in a multipart document.
 *
 * If the server sends back ranges, it uses the
 * [`206 Partial Content`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/206)
 * for the response.
 *
 * If the ranges are invalid, the server returns the
 * [`416 Range Not Satisfiable`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/416)
 * error.
 *
 * The server can also ignore the `Range` header and return the whole document
 * with a [`200`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200)
 * status code.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Range)
 */
export const Range = 'Range'

/**
 * The `Referer` HTTP request header contains an absolute or partial address of
 * the page that makes the request. The `Referer` header allows a server to
 * identify a page where people are visiting it from.
 *
 * This data can be used for analytics, logging, optimized caching, and more.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer)
 */
export const Referer = 'Referer'

/**
 * Specify the encodings the client can accept. Accepted values:
 *
 *   - `compress`
 *   - `deflate`
 *   - `gzip`
 *   - `trailers`
 *
 * Only `trailers` is supported in HTTP/2
 */
export const Te = 'TE'

/**
 * The `User-Agent` [request header](https://developer.mozilla.org/en-US/docs/Glossary/Request_header)
 * is a characteristic string that lets servers and network peers identify the
 * application, operating system, vendor, and/or version of the requesting
 * user agent.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent)
 */
export const UserAgent = 'User-Agent'

/**
 * The HTTP 1.1 (only) `Upgrade` header can be used to upgrade an already
 * established client/server connection to a different protocol (over the same
 * transport protocol).
 *
 * For example, it can be used by a client to upgrade a connection from
 * HTTP 1.1 to HTTP 2.0, or an HTTP or HTTPS connection into a WebSocket.
 *
 * > **Warning:** HTTP/2 explicitly disallows the use of this mechanism/header;
 * > it is specific to HTTP/1.1.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Upgrade)
 */
export const Upgrade = 'Upgrade'

/**
 * Informs the server of proxies through which the request was sent
 */
export const Via = 'Via'

/**
 * The `Warning` HTTP header contains information about possible problems with
 * the status of the message. More than one `Warning` header may appear in a
 * response.
 *
 *
 * > @deprecated This feature is no longer recommended.
 * > Though some browsers might still support it, it may have already been
 * > removed from the relevant web standards, may be in the process of being
 * > dropped, or may only be kept for compatibility purposes. Avoid using it,
 * > and update existing code if possible; see the compatibility table at the
 * > bottom of this page to guide your decision. Be aware that this feature may
 * > cease to work at any time.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Warning)
 */
export const Warning = 'Warning'
