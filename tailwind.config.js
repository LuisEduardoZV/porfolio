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
				'gray-text': '#5A5553',
				'gray-border': '#F1EBE9',
			},
			backgroundImage: {
				profile: "url('/src/assets/profile.jpg')",
			},
			boxShadow: {
				'input-radio': 'inset 0 0 0 0.4375em #a0f05c',
				'input-radio-before': 'inset 0 0 0 0.125em #a0f05c',
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
					},
				},
			},
			themes: [
				{
					name: 'my-theme',
					extend: {
						colors: {
							bg: {
								100: '#F6F6F6',
								200: '#E9E9E9',
							},
						},
					},
				},
			],
		}),
	],
};

/*
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


					module.exports = {
						darkMode: ['class', '[data-theme="dark"]'],
						theme: {
							colors: {
								'primary-100': '#CFAE8E',
								'primary-200': '#b19172',
								'primary-300': '#6d5236',
								'accent-100': '#E8B98F',
								'accent-200': '#835c36',
								'text-100': '#4D3830',
								'text-200': '#7a6259',
								'bg-100': 'rgb(var(--bg-100) / <alpha-value>)',
								'bg-200': '#eedfcc',
								'bg-300': '#c5b7a5',
							},
							extend: {
								colors: {
									'primary-100': '#CFAE8E',
									'primary-200': '#b19172',
									'primary-300': '#6d5236',
									'accent-100': '#E8B98F',
									'accent-200': '#835c36',
									'text-100': '#4D3830',
									'text-200': '#7a6259',
									'bg-100': 'rgb(var(--bg-100) / <alpha-value>)',
									'bg-200': '#eedfcc',
									'bg-300': '#c5b7a5',
								},
							},
						},
						plugins: [],
					};
					
*/
