/** @type {import('tailwindcss').Config} */

module.exports = {
	darkMode: ['class', '[data-mode="dark"]'],
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: {
					100: '#CFAE8E',
					200: '#b19172',
					300: '#6d5236',
				},
				accent: {
					100: '#E8B98F',
					200: '#835c36',
				},
				text: {
					100: '#4D3830',
					200: '#7a6259',
				},
				bg: {
					100: '#F8E9D6',
					200: '#eedfcc',
					300: '#c5b7a5',
				},
			},
		},
	},
	plugins: [],
};
