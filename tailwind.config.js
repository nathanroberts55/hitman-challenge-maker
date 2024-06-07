/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: { primary: '#F45B69' },
			backgroundImage: {
				miami: "url('$lib/images/miami.jpg')"
			},
			fontFamily: {
				sans: ['"K2D"']
			}
		}
	},
	plugins: []
};
