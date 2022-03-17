/**
 * Standardized HTTP methods (verbs)
 */
export type Method =
  | typeof Get
  | typeof Post
  | typeof Connect
  | typeof Delete
  | typeof Head
  | typeof Options
  | typeof Patch
  | typeof Put
  | typeof Trace

/**
 * The HTTP `GET` method requests a representation of the specified resource.
 * Requests using GET should only be used to request data (they shouldn't
 * include data).
 *
 * [See also](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET)
 */
export const Get = 'GET'

/**
 * The HTTP `POST` method sends data to the server. The type of the body of the
 * request is indicated by the [Content-Type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type)
 * header.
 *
 * [See also](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST)
 */
export const Post = 'POST'

/**
 * The HTTP `CONNECT` method starts two-way communications with the requested
 * resource. It can be used to open a tunnel.
 *
 * [See also](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/CONNECT)
 */
export const Connect = 'CONNECT'

/**
 * The HTTP `DELETE` request method deletes the specified resource.
 *
 * [See also](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/DELETE)
 */
export const Delete = 'DELETE'

/**
 * The HTTP `HEAD` method requests the [headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)
 * that would be returned if the `HEAD` request's URL was instead requested with
 * the HTTP {@link Get `GET`} method.
 *
 * For example, if a URL might produce a large download, a `HEAD` request could
 * read its [Content-Length](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Length)
 * header to check the filesize without actually downloading the file.
 *
 * [See also](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/HEAD)
 */
export const Head = 'HEAD'

/**
 * The HTTP `OPTIONS` method requests permitted communication options for a
 * given URL or server. A client can specify a URL with this method, or an
 * asterisk `(*)` to refer to the entire server.
 *
 * [See also](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/OPTIONS)
 */
export const Options = 'OPTIONS'

/**
 * The HTTP `PATCH` request method applies partial modifications to a resource.
 *
 * [See also](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PATCH)
 */
export const Patch = 'PATCH'

/**
 * The HTTP `PUT` request method creates a new resource or replaces a
 * representation of the target resource with the request payload.
 *
 * The difference between `PUT` and {@link Post `POST`} is that `PUT` is
 * idempotent: calling it once or several times successively has the same
 * effect (that is no side effect), whereas successive identical
 * {@link Post `POST`} requests may have additional effects, akin to placing an
 * order several times.
 *
 * [See also](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PUT)
 */
export const Put = 'PUT'

/**
 * The HTTP `TRACE` method performs a message loop-back test along the path to
 * the target resource, providing a useful debugging mechanism.
 *
 * [See also](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/TRACE)
 */
export const Trace = 'TRACE'
