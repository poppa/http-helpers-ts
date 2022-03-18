/**
 * The `Sec-Fetch-Dest` [fetch metadata request header](https://developer.mozilla.org/en-US/docs/Glossary/Fetch_metadata_request_header)
 * indicates the request's destination. That is the initiator of the original
 * fetch request, which is where (and how) the fetched data will be used.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Fetch-Dest)
 */
export const SecFetchDest = 'Sec-Fetch-Dest'

/**
 * The `Sec-Fetch-Mode` [fetch metadata request header](https://developer.mozilla.org/en-US/docs/Glossary/Fetch_metadata_request_header)
 * indicates the mode of the request.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Fetch-Mode)
 */
export const SecFetchMode = 'Sec-Fetch-Mode'

/**
 * The `Sec-Fetch-Site` [fetch metadata request header](https://developer.mozilla.org/en-US/docs/Glossary/Fetch_metadata_request_header)
 * indicates the relationship between a request initiator's origin and the
 * origin of the requested resource.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Fetch-Site)
 */
export const SecFetchSite = 'Sec-Fetch-Site'

/**
 * The `Sec-Fetch-User` [fetch metadata request header](https://developer.mozilla.org/en-US/docs/Glossary/Fetch_metadata_request_header)
 * is only sent for requests initiated by user activation, and its value will
 * always be `?1`.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Fetch-User)
 */
export const SecFetchUser = 'Sec-Fetch-User'
