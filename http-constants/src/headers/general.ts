/**
 * These are headers that can occur as both request and response headers
 */

/* eslint-disable @typescript-eslint/no-unused-vars */
// Imported only for doc purposes
import type { Digest } from './response'

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
 * The `Cache-Control` HTTP header field holds directives (instructions) — in
 * both requests and responses — that control [caching](https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching)
 * in browsers and shared caches (e.g. Proxies, CDNs).
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control)
 */
export const CacheControl = 'Cache-Control'

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
 * The `Want-Digest` HTTP header is primarily used in a request, to ask the
 * server to provide a [digest](https://developer.mozilla.org/en-US/docs/Glossary/Digest)
 * of the requested resource using the
 * {@link Digest} response header.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Want-Digest)
 */
export const WantDigest = 'Want-Digest'

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
