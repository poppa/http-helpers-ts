const is =
  (res: number) =>
  (code: number): boolean =>
    code / 100 === res

export const isInformational = is(100)
export const isSuccess = is(200)
export const isRedirect = is(300)
export const isClientError = is(400)
export const isServerError = is(500)
