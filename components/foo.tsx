function variadicFnc<T>(
  callback: (...args: [string, ...T[], boolean]) => void,
  ...args: [...Parameters<typeof callback>]
) {
  return callback(...args);
}

variadicFnc((a: string, b: number, c: boolean) => {}, "hello", 1, true);

variadicFnc((a: string, b: number, c: boolean) => {}, "hello", 1, true, "oops");
variadicFnc((a: string, b: number, c: boolean) => {}, "hello", 1);

variadicFnc((a: string, b: string, c: boolean) => {}, "hello", 1, true);
