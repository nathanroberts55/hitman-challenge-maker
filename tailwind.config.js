/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
		borderColor: (theme) => ({
			...theme('colors'),
			primary: '#F45B69'
		})
	},
	plugins: []
};
