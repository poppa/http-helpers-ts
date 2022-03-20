# HTTP helper modules for Javascript/Typescript

This repository currently contains two NPM packages for making it easier to
manage various HTTP-related programming tasks.

## HTTP Constants _([@poppanator/http-constants](http-constants))_

This package contains constants such as HTTP status codes, status texts and
header names and a few utility function.

```ts
import {
  status,
  header,
  isSuccess,
  isRedirect,
} from '@poppanator/http-constants'

const res = await fetch('some-url', {
  headers: {
    [header.Connection]: 'keep-alive',
    [header.ContentType]: 'application/json',
  },
})

// Status is within the 200 range
if (isSuccess(res.status)) {
  if (res.status === status.Created) {
    return {
      status: status.PermanentRedirect,
      location: res.headers[header.Location],
    }
  } else {
    return {
      status: status.Ok,
    }
  }
}
// Status is within the 300 range
else if (isRedirect(res.status)) {
  const newLocation = res.headers[header.Location]
  return {
    status: status.TemporaryRedirect,
    location: newLocation,
  }
} else {
  // ... Something is bananas
  return {
    status: status.BadRequest, // 400
  }
}
```

For more info, see the [README](http-constants/README.md)

## HTTP Error _([@poppanator/http-error](http-error))_

This package contains a `Error` class representing a HTTP error:

```ts
import { HttpError, resolveHttStatusCode } from '@poppanator/http-error'

try {
  await callSomeHttpApiOrSomething()
} catch (err: unknown) {
  const status = resolveHttpStatusCode(err)

  throw new HttpError(status ?? 500)
}
```

For more info, see the [README](http-error/README.md)
