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
 * The `Origin` request header indicates the
 * [origin](https://developer.mozilla.org/en-US/docs/Glossary/Origin)
 * (scheme, hostname, and port) that caused the request. For example, if a user
 * agent needs to request resources included in a page, or fetched by scripts
 * that it executes, then the origin of the page may be included in the request.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin)
 */
export const Origin = 'Origin'
