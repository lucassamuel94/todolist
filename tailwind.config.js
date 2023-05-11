/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: {
			gray: {
				100: '#F2F2F2',
				200: '#D9D9D9',
				300: '#808080',
				400: '#333333',
				500: '#262626',
				600: '#1A1A1A',
				700: '#0D0D0D',
			},
			purple: {
				DEFAULT: '#8284FA',
				dark: '#5E60CE',
			},
			blue: {
				DEFAULT: '#4EA8DE',
				dark: '#1E6F9F',
			},
			danger: '#E25858',
		},
		fontFamily: {
			sans: "'Inter', sans-serif",
		},
		extend: {
			lineHeight: {
				normal: 1.4,
			},
			container: {
				center: true,
				padding: {
					DEFAULT: '16px',
					md: 0,
				},
				screens: {
					md: '736px',
				},
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
}
