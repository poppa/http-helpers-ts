import 'jest'

import { header } from './index'

test('Accept should be "Accept"', () => {
  expect(header.Accept).toEqual('Accept')
})

test('AcceptCharset should be "Accept-Charset"', () => {
  expect(header.AcceptCharset).toEqual('Accept-Charset')
})

test('AcceptDatetime should be "Accept-Datetime"', () => {
  expect(header.AcceptDatetime).toEqual('Accept-Datetime')
})

test('AcceptEncoding should be "Accept-Encoding"', () => {
  expect(header.AcceptEncoding).toEqual('Accept-Encoding')
})

test('AcceptLanguage should be "Accept-Language"', () => {
  expect(header.AcceptLanguage).toEqual('Accept-Language')
})

test('AcceptPatch should be "Accept-Patch"', () => {
  expect(header.AcceptPatch).toEqual('Accept-Patch')
})

test('AcceptPost should be "Accept-Post"', () => {
  expect(header.AcceptPost).toEqual('Accept-Post')
})

test('AcceptRanges should be "Accept-Ranges"', () => {
  expect(header.AcceptRanges).toEqual('Accept-Ranges')
})

test('AccessControlAllowCredentials should be "Access-Control-Allow-Credentials"', () => {
  expect(header.AccessControlAllowCredentials).toEqual(
    'Access-Control-Allow-Credentials'
  )
})

test('AccessControlAllowHeaders should be "Access-Control-Allow-Headers"', () => {
  expect(header.AccessControlAllowHeaders).toEqual(
    'Access-Control-Allow-Headers'
  )
})

test('AccessControlAllowMethods should be "Access-Control-Allow-Methods"', () => {
  expect(header.AccessControlAllowMethods).toEqual(
    'Access-Control-Allow-Methods'
  )
})

test('AccessControlAllowOrigin should be "Access-Control-Allow-Origin"', () => {
  expect(header.AccessControlAllowOrigin).toEqual('Access-Control-Allow-Origin')
})

test('AccessControlExposeHeaders should be "Access-Control-Expose-Headers"', () => {
  expect(header.AccessControlExposeHeaders).toEqual(
    'Access-Control-Expose-Headers'
  )
})

test('AccessControlMaxAge should be "Access-Control-Max-Age"', () => {
  expect(header.AccessControlMaxAge).toEqual('Access-Control-Max-Age')
})

test('AccessControlRequestHeaders should be "Access-Control-Request-Headers"', () => {
  expect(header.AccessControlRequestHeaders).toEqual(
    'Access-Control-Request-Headers'
  )
})

test('AccessControlRequestMethod should be "Access-Control-Request-Method"', () => {
  expect(header.AccessControlRequestMethod).toEqual(
    'Access-Control-Request-Method'
  )
})

test('Age should be "Age"', () => {
  expect(header.Age).toEqual('Age')
})

test('Aim should be "A-IM"', () => {
  expect(header.Aim).toEqual('A-IM')
})

test('Allow should be "Allow"', () => {
  expect(header.Allow).toEqual('Allow')
})

test('AltSvc should be "Alt-Svc"', () => {
  expect(header.AltSvc).toEqual('Alt-Svc')
})

test('Authorization should be "Authorization"', () => {
  expect(header.Authorization).toEqual('Authorization')
})

test('CacheControl should be "Cache-Control"', () => {
  expect(header.CacheControl).toEqual('Cache-Control')
})

test('ClearSiteData should be "Clear-Site-Data"', () => {
  expect(header.ClearSiteData).toEqual('Clear-Site-Data')
})

test('Connection should be "Connection"', () => {
  expect(header.Connection).toEqual('Connection')
})

test('ContentDisposition should be "Content-Disposition"', () => {
  expect(header.ContentDisposition).toEqual('Content-Disposition')
})

test('ContentEncoding should be "Content-Encoding"', () => {
  expect(header.ContentEncoding).toEqual('Content-Encoding')
})

test('ContentLanguage should be "Content-Language"', () => {
  expect(header.ContentLanguage).toEqual('Content-Language')
})

test('ContentLength should be "Content-Length"', () => {
  expect(header.ContentLength).toEqual('Content-Length')
})

test('ContentLocation should be "Content-Location"', () => {
  expect(header.ContentLocation).toEqual('Content-Location')
})

test('ContentRange should be "Content-Range"', () => {
  expect(header.ContentRange).toEqual('Content-Range')
})

test('ContentSecurityPolicy should be "Content-Security-Policy"', () => {
  expect(header.ContentSecurityPolicy).toEqual('Content-Security-Policy')
})

test('ContentSecurityPolicyReportOnly should be "Content-Security-Policy-Report-Only"', () => {
  expect(header.ContentSecurityPolicyReportOnly).toEqual(
    'Content-Security-Policy-Report-Only'
  )
})

test('ContentType should be "Content-Type"', () => {
  expect(header.ContentType).toEqual('Content-Type')
})

test('Cookie should be "Cookie"', () => {
  expect(header.Cookie).toEqual('Cookie')
})

test('CrossOriginEmbedderPolicy should be "Cross-Origin-Embedder-Policy"', () => {
  expect(header.CrossOriginEmbedderPolicy).toEqual(
    'Cross-Origin-Embedder-Policy'
  )
})

test('CrossOriginOpenerPolicy should be "Cross-Origin-Opener-Policy"', () => {
  expect(header.CrossOriginOpenerPolicy).toEqual('Cross-Origin-Opener-Policy')
})

test('CrossOriginResourcePolicy should be "Cross-Origin-Resource-Policy"', () => {
  expect(header.CrossOriginResourcePolicy).toEqual(
    'Cross-Origin-Resource-Policy'
  )
})

test('Date should be "Date"', () => {
  expect(header.Date).toEqual('Date')
})

test('DeltaBase should be "Delta-Base"', () => {
  expect(header.DeltaBase).toEqual('Delta-Base')
})

test('Digest should be "Digest"', () => {
  expect(header.Digest).toEqual('Digest')
})

test('Dnt should be "DNT"', () => {
  expect(header.Dnt).toEqual('DNT')
})

test('ETag should be "ETag"', () => {
  expect(header.ETag).toEqual('ETag')
})

test('Expect should be "Expect"', () => {
  expect(header.Expect).toEqual('Expect')
})

test('ExpectCT should be "Expect-CT"', () => {
  expect(header.ExpectCT).toEqual('Expect-CT')
})

test('Expires should be "Expires"', () => {
  expect(header.Expires).toEqual('Expires')
})

test('Forwarded should be "Forwarded"', () => {
  expect(header.Forwarded).toEqual('Forwarded')
})

test('From should be "From"', () => {
  expect(header.From).toEqual('From')
})

test('Host should be "Host"', () => {
  expect(header.Host).toEqual('Host')
})

test('IM should be "IM"', () => {
  expect(header.IM).toEqual('IM')
})

test('IfMatch should be "If-Match"', () => {
  expect(header.IfMatch).toEqual('If-Match')
})

test('IfModifiedSince should be "If-Modified-Since"', () => {
  expect(header.IfModifiedSince).toEqual('If-Modified-Since')
})

test('IfNoneMatch should be "If-None-Match"', () => {
  expect(header.IfNoneMatch).toEqual('If-None-Match')
})

test('IfRange should be "If-Range"', () => {
  expect(header.IfRange).toEqual('If-Range')
})

test('IfUnmodifiedSince should be "If-Unmodified-Since"', () => {
  expect(header.IfUnmodifiedSince).toEqual('If-Unmodified-Since')
})

test('LargeAllocation should be "Large-Allocation"', () => {
  expect(header.LargeAllocation).toEqual('Large-Allocation')
})

test('LastModified should be "Last-Modified"', () => {
  expect(header.LastModified).toEqual('Last-Modified')
})

test('Link should be "Link"', () => {
  expect(header.Link).toEqual('Link')
})

test('Location should be "Location"', () => {
  expect(header.Location).toEqual('Location')
})

test('MaxForwards should be "Max-Forwards"', () => {
  expect(header.MaxForwards).toEqual('Max-Forwards')
})

test('Nel should be "NEL"', () => {
  expect(header.Nel).toEqual('NEL')
})

test('Origin should be "Origin"', () => {
  expect(header.Origin).toEqual('Origin')
})

test('Pragma should be "Pragma"', () => {
  expect(header.Pragma).toEqual('Pragma')
})

test('ProxyAuthenticate should be "Proxy-Authenticate"', () => {
  expect(header.ProxyAuthenticate).toEqual('Proxy-Authenticate')
})

test('ProxyAuthorization should be "Proxy-Authorization"', () => {
  expect(header.ProxyAuthorization).toEqual('Proxy-Authorization')
})

test('PublicKeyPins should be "Public-Key-Pins"', () => {
  expect(header.PublicKeyPins).toEqual('Public-Key-Pins')
})

test('Range should be "Range"', () => {
  expect(header.Range).toEqual('Range')
})

test('Referer should be "Referer"', () => {
  expect(header.Referer).toEqual('Referer')
})

test('ReferrerPolicy should be "Referrer-Policy"', () => {
  expect(header.ReferrerPolicy).toEqual('Referrer-Policy')
})

test('Refresh should be "Refresh"', () => {
  expect(header.Refresh).toEqual('Refresh')
})

test('RetryAfter should be "Retry-After"', () => {
  expect(header.RetryAfter).toEqual('Retry-After')
})

test('SaveData should be "Save-Data"', () => {
  expect(header.SaveData).toEqual('Save-Data')
})

test('SecFetchDest should be "Sec-Fetch-Dest"', () => {
  expect(header.SecFetchDest).toEqual('Sec-Fetch-Dest')
})

test('SecFetchMode should be "Sec-Fetch-Mode"', () => {
  expect(header.SecFetchMode).toEqual('Sec-Fetch-Mode')
})

test('SecFetchSite should be "Sec-Fetch-Site"', () => {
  expect(header.SecFetchSite).toEqual('Sec-Fetch-Site')
})

test('SecFetchUser should be "Sec-Fetch-User"', () => {
  expect(header.SecFetchUser).toEqual('Sec-Fetch-User')
})

test('SecWebSocketAccept should be "Sec-WebSocket-Accept"', () => {
  expect(header.SecWebSocketAccept).toEqual('Sec-WebSocket-Accept')
})

test('Server should be "Server"', () => {
  expect(header.Server).toEqual('Server')
})

test('ServerTiming should be "Server-Timing"', () => {
  expect(header.ServerTiming).toEqual('Server-Timing')
})

test('SetCookie should be "Set-Cookie"', () => {
  expect(header.SetCookie).toEqual('Set-Cookie')
})

test('SourceMap should be "SourceMap"', () => {
  expect(header.SourceMap).toEqual('SourceMap')
})

test('StrictTransportSecurity should be "Strict-Transport-Security"', () => {
  expect(header.StrictTransportSecurity).toEqual('Strict-Transport-Security')
})

test('Te should be "TE"', () => {
  expect(header.Te).toEqual('TE')
})

test('TimingAllowOrigin should be "Timing-Allow-Origin"', () => {
  expect(header.TimingAllowOrigin).toEqual('Timing-Allow-Origin')
})

test('Tk should be "Tk"', () => {
  expect(header.Tk).toEqual('Tk')
})

test('Trailer should be "Trailer"', () => {
  expect(header.Trailer).toEqual('Trailer')
})

test('TransferEncoding should be "Transfer-Encoding"', () => {
  expect(header.TransferEncoding).toEqual('Transfer-Encoding')
})

test('Upgrade should be "Upgrade"', () => {
  expect(header.Upgrade).toEqual('Upgrade')
})

test('UpgradeInsecureRequests should be "Upgrade-Insecure-Requests"', () => {
  expect(header.UpgradeInsecureRequests).toEqual('Upgrade-Insecure-Requests')
})

test('UserAgent should be "User-Agent"', () => {
  expect(header.UserAgent).toEqual('User-Agent')
})

test('Vary should be "Vary"', () => {
  expect(header.Vary).toEqual('Vary')
})

test('Via should be "Via"', () => {
  expect(header.Via).toEqual('Via')
})

test('WWWAuthenticate should be "WWW-Authenticate"', () => {
  expect(header.WWWAuthenticate).toEqual('WWW-Authenticate')
})

test('WantDigest should be "Want-Digest"', () => {
  expect(header.WantDigest).toEqual('Want-Digest')
})

test('Warning should be "Warning"', () => {
  expect(header.Warning).toEqual('Warning')
})

test('XCSRFToken should be "X-CSRF-Token"', () => {
  expect(header.XCSRFToken).toEqual('X-CSRF-Token')
})

test('XContentTypeOptions should be "X-Content-Type-Options"', () => {
  expect(header.XContentTypeOptions).toEqual('X-Content-Type-Options')
})

test('XDNSPrefetchControl should be "X-DNS-Prefetch-Control"', () => {
  expect(header.XDNSPrefetchControl).toEqual('X-DNS-Prefetch-Control')
})

test('XForwardedFor should be "X-Forwarded-For"', () => {
  expect(header.XForwardedFor).toEqual('X-Forwarded-For')
})

test('XForwardedHost should be "X-Forwarded-Host"', () => {
  expect(header.XForwardedHost).toEqual('X-Forwarded-Host')
})

test('XForwardedProto should be "X-Forwarded-Proto"', () => {
  expect(header.XForwardedProto).toEqual('X-Forwarded-Proto')
})

test('XFrameOptions should be "X-Frame-Options"', () => {
  expect(header.XFrameOptions).toEqual('X-Frame-Options')
})

test('XPoweredBy should be "X-Powered-By"', () => {
  expect(header.XPoweredBy).toEqual('X-Powered-By')
})

test('XRequestID should be "X-Request-ID"', () => {
  expect(header.XRequestID).toEqual('X-Request-ID')
})

test('XRequestedWith should be "X-Requested-With"', () => {
  expect(header.XRequestedWith).toEqual('X-Requested-With')
})

test('XUACompatible should be "X-UA-Compatible"', () => {
  expect(header.XUACompatible).toEqual('X-UA-Compatible')
})

test('XXSSProtection should be "X-XSS-Protection"', () => {
  expect(header.XXSSProtection).toEqual('X-XSS-Protection')
})
