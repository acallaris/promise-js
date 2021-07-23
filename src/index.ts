/**
 * @param promise
 * A promise wanted to be resolve
 * 
 * @example
 * ```ts
 * const [data, error] = await handlePromise(fetch('https://example.com/'));
 * if (error) console.log(error);
 * ```
 */
export async function handlePromise<T>(promise: Promise<T>): Promise<[T, Error]> {
  try {
    const data = await promise;
    return [data, null];
  } catch (error) {
    return [null, error];
  }
}

/**
 * @param promise
 * An array of promises wanted to be resolve
 * 
 * @example
 * ```ts
 * const promises = [fetch('https://example.com/'), fetch('https://google.com/')];
 * const [data, error] = await handlePromiseArray(promises);
 * if (error) console.log(error);
 * ```
 */
export async function handlePromiseArray<T>(promise: Promise<T>[]): Promise<[Array<T>, Error]> {
  try {
    const data = await Promise.all(promise);
    return [data, null];
  } catch (error) {
    return [null, error];
  }
}