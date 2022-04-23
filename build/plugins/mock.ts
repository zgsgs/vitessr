import { viteMockServe } from 'vite-plugin-mock'

export default viteMockServe({
  mockPath: 'mock',
  injectCode: '\nimport { setupMockServer } from \'../mock\';\nsetupMockServer();',
})
