tailwind.config = {
	content: ["*"],
	theme: {
		extend: {
			colors: {
				primaryTomato: "hsl(4, 100%, 67%)",
				darkSlateGrey: "hsl(234, 29%, 20%)",
				charcoalGrey: "hsl(235, 18%, 26%)",
				grey: "hsl(231, 7%, 60%)",
				white: "hsl(0, 0%, 100%)",
			},
			fontFamily: {
				sans: "Roboto, sans-serif",
			},
			screens: {
				tsf: "375px",
				ftf: "425px",
			},
		},
	},
	plugins: [],
};
