/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: { primary: '#F45B69' },
			backgroundImage: {
				'hitman-image': "url('/hitman.jpg')"
			},
			fontFamily: {
				sans: ['"K2D"']
			}
		}
	},
	plugins: []
};
