/** @type {import('tailwindcss').Config} */
const { nextui } = require('@nextui-org/react')

export default {
	content: [
		'./src/**/*.{js,ts,jsx,tsx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				accent: '#2563eb',
				gray: '#71717A',
			},
		},
	},
	darkMode: 'class',
	plugins: [nextui()],
}
