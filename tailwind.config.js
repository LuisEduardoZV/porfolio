/** @type {import('tailwindcss').Config} */

module.exports = {
	darkMode: ['class', '[data-mode="dark"]'],
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				'red-window': '#ED6A5E',
				'yellow-window': '#F4BF4F',
				'green-window': '#61C554',
				'blue-icon-full': '#3478F6',
				'blue-icon-low': '#5093F7',
				'red-icon-full': '#EB445A',
				'red-icon-low': '#ED6A83',
				'gray-icon-full': '#8E8E93',
				'gray-icon-low': '#B2B2B6',
				'orange-icon-full': '#EB4E3D',
				'orange-icon-low': '#ED766B',
				'purple-icon-full': '#5856CF',
				'purple-icon-low': '#807EE2',
				'light-blue-icon-full': '#71BCEB',
				'light-blue-icon-low': '#9DDEF8',
				'green-icon-full': '#33C558',
				'green-icon-low': '#72EB6C',
				dark: {
					200: '#3E454F',
					100: '#1E1E1E',
				},
				main: {
					100: '#F5F0EC',
					200: '#E9E4E0',
				},
				cinnamon: {
					100: '#F8E9D6',
					200: '#CFAE8E',
				},
				lavanda: {
					100: '#E9E4ED',
					200: '#D6C6E1',
				},
			},
			backgroundImage: {
				profile: "url('/src/assets/profile.jpg')",
				fondo: "url('/src/assets/fondo.jpeg')",
				'main-fondo': "url('/src/assets/mainFondo.png')",
			},
			boxShadow: {
				'input-radio': 'inset 0 0 0 0.3375em',
				'input-radio-before': 'inset 0 0 0 0.125em',
			},
		},
	},
	plugins: [
		require('tailwindcss-themer')({
			defaultTheme: {
				extend: {
					colors: {
						bg: {
							100: '#F5F0EC',
							200: '#E9E4E0',
						},
						'main-text': '#5A5553',
						'main-border': '#F1EBE9',
					},
				},
			},
			themes: [
				{
					name: 'dark',
					extend: {
						colors: {
							bg: {
								200: '#3E454F',
								100: '#1E1E1E',
							},
							'main-text': '#fff',
							'main-border': '#000',
						},
					},
				},
				{
					name: 'cinnamon',
					extend: {
						colors: {
							bg: {
								100: '#F8E9D6',
								200: '#CFAE8E',
							},
							'main-text': '#4D3830',
							'main-border': '#b19172',
						},
					},
				},
				{
					name: 'lavanda',
					extend: {
						colors: {
							bg: {
								100: '#E9E4ED',
								200: '#D6C6E1',
							},
							'main-text': '#4A4A4A',
							'main-border': '#D6C6E1',
						},
					},
				},
				{
					name: 'acc-default',
					extend: {
						colors: {
							'acc-main': '#3478F6',
						},
					},
				},
				{
					name: 'acc-green',
					extend: {
						colors: {
							'acc-main': '#33C558',
						},
					},
				},
				{
					name: 'acc-red',
					extend: {
						colors: {
							'acc-main': '#EB445A',
						},
					},
				},
				{
					name: 'acc-orange',
					extend: {
						colors: {
							'acc-main': '#EB4E3D',
						},
					},
				},
				{
					name: 'acc-purple',
					extend: {
						colors: {
							'acc-main': '#5856CF',
						},
					},
				},
				{
					name: 'acc-brown',
					extend: {
						colors: {
							'acc-main': '#835c36',
						},
					},
				},
				{
					name: 'acc-yellow',
					extend: {
						colors: {
							'acc-main': '#F4BF4F',
						},
					},
				},
			],
		}),
	],
};
