import { useCallback } from 'react'

type HttpRequestMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE'

interface HttpHeaders {
	[key: string]: string
}

interface RequestConfig {
	url: string
	method?: HttpRequestMethod
	body?: string | null | FormData
	headers?: HttpHeaders
}

export const useHttp = () => {
	const request = useCallback(
		async ({
			url,
			method = 'GET',
			body = null,
			headers = { 'Content-type': 'application/json' },
		}: RequestConfig) => {
			try {
				const response = await fetch(url, { method, body, headers })

				if (!response.ok) {
					throw new Error(
						`Не смог загрузить данные с ${url}, статус: ${response.status}`
					)
				}

				const data = await response.json()

				return data
			} catch (err) {
				if (err instanceof Error) {
					console.log(err.message)
				} else {
					console.log(err)
				}
			}
		},
		[]
	)

	return { request }
}
