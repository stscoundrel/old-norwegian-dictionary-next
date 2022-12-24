// Force certain date to keep tests deterministic.
jest.useFakeTimers('modern');
jest.setSystemTime(new Date(2021, 1, 1, 1, 1, 1, 1));


/**
 * Mock router
 */
jest.mock('next/router', () => ({
  useRouter() {
    return {
      asPath: '/test',
    }
  },
}))
