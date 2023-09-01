declare namespace ExpectWebdriverIO {
  interface Matchers<R, T> {
    startsWith(expected: string): R;
    endsWith(expected: string): R;
  }
}
