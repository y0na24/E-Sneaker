import { TextEncoder } from 'util'
global.TextEncoder = TextEncoder

import '@testing-library/jest-dom'
import { enableFetchMocks } from 'jest-fetch-mock'
enableFetchMocks()
