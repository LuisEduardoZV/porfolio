/** @type {import('tailwindcss').Config} */

module.exports = {
	darkMode: ['class', '[data-mode="dark"]'],
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				red: '#ED6A5E',
				yellow: '#F4BF4F',
				green: '#61C554',
			},
			backgroundImage: {
				profile: "url('/src/assets/profile.jpg')",
			},
		},
	},
	plugins: [
		require('tailwindcss-themer')({
			defaultTheme: {
				extend: {
					colors: {
						bg: {
							100: '#F6F6F6',
							200: '#E9E9E9',
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
