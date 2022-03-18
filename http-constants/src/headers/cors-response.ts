/* eslint-disable @typescript-eslint/no-unused-vars */
// Only imported for doc purposes
import type { Origin, AccessControlRequestHeaders } from './cors-request'

/**
 * The `Access-Control-Allow-Credentials` response header tells browsers
 * whether to expose the response to the frontend JavaScript code when the
 * request's credentials mode ([Request.credentials](https://developer.mozilla.org/en-US/docs/Web/API/Request/credentials))
 * is include.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Credentials)
 */
export const AccessControlAllowCredentials = 'Access-Control-Allow-Credentials'

/**
 * The `Access-Control-Allow-Headers` response header is used in response to a
 * [preflight request](https://developer.mozilla.org/en-US/docs/Glossary/Preflight_request)
 * which includes the
 * {@link AccessControlRequestHeaders Access-Control-Request-Headers} to
 * indicate which HTTP headers can be used during the actual request.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Headers)
 */
export const AccessControlAllowHeaders = 'Access-Control-Allow-Headers'

/**
 * The `Access-Control-Allow-Methods` response header specifies one or more
 * methods allowed when accessing a resource in response to a
 * [preflight request](https://developer.mozilla.org/en-US/docs/Glossary/Preflight_request).
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Methods)
 */
export const AccessControlAllowMethods = 'Access-Control-Allow-Methods'

/**
 * The `Access-Control-Allow-Origin` response header indicates whether the
 * response can be shared with requesting code from the given
 * {@link Origin origin}.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin)
 */
export const AccessControlAllowOrigin = 'Access-Control-Allow-Origin'

/**
 * The `Access-Control-Expose-Headers` response header allows a server to
 * indicate which response headers should be made available to scripts running
 * in the browser, in response to a cross-origin request.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Expose-Headers)
 */
export const AccessControlExposeHeaders = 'Access-Control-Expose-Headers'

/**
 * The `Access-Control-Max-Age` response header indicates how long the results
 * of a preflight request (that is the information contained in the
 * {@link AccessControlAllowMethods Access-Control-Allow-Methods} and
 * {@link AccessControlAllowHeaders Access-Control-Allow-Headers} headers)
 * can be cached.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Max-Age)
 */
export const AccessControlMaxAge = 'Access-Control-Max-Age'

/**
 * The HTTP `Cross-Origin-Embedder-Policy` (COEP) response header prevents a
 * document from loading any cross-origin resources that don't explicitly grant
 * the document permission (using
 * [CORP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cross-Origin_Resource_Policy_(CORP)) or
 * [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)).
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy)
 */
export const CrossOriginEmbedderPolicy = 'Cross-Origin-Embedder-Policy'

/**
 * The HTTP `Cross-Origin-Opener-Policy` (COOP) response header allows you to
 * ensure a top-level document does not share a browsing context group with
 * cross-origin documents.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy)
 */
export const CrossOriginOpenerPolicy = 'Cross-Origin-Opener-Policy'

/**
 * The HTTP `Cross-Origin-Resource-Policy` response header conveys a desire
 * that the browser blocks no-cors cross-origin/cross-site requests to the
 * given resource.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Resource-Policy)
 */
export const CrossOriginResourcePolicy = 'Cross-Origin-Resource-Policy'
