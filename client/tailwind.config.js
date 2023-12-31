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
			screens: {
				'sm': '485px',
				'md': '700px',
				'lg': '850px'
			}
		},
	},
	darkMode: 'class',
	plugins: [nextui()],
}
