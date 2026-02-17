/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	darkmode: "selector",
	theme: {
		extend: {
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
				code: ["Source Code Pro", "monospace"],
				syne: ["Syne", "serif"]
			},
			colors: {
				bronze: "#B8860B",
				silver: "#3C454D",
				gold: "#D9BE4C",
				aura: "#FFDF01",
				pearl: "#FFFFFF"
			},
			width: {
				"calc-100-minus-2rem": "calc(100% - 2rem)",
			},
			keyframes: {
				typing: {
					"0%": {
						width: "0%",
						visibility: "hidden"
					},
					"100%": {
						width: "150%"
					}  
				},
				blink: {
					"50%": {
						borderColor: "transparent"
					},
					"100%": {
						borderColor: "white"
					}  
				}
			},
			animation: {
				typing: "typing 2s steps(30), blink .9s infinite"
			}
		},
	},
	plugins: [],
}