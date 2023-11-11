import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { NextUIProvider } from '@nextui-org/react'

import { App } from './App'

import { store } from './store/store'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<NextUIProvider>
			<Provider store={store}>
				<App />
			</Provider>
		</NextUIProvider>
	</React.StrictMode>
)
