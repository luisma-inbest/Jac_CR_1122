module.exports = {
	registerType: "autoUpdate",
	injectRegister: "auto",
	devOptions: {
		enabled: true,
	},
	includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
	manifest: {
		name: "My Awesome App",
		short_name: "MyApp",
		description: "My Awesome App description",
		theme_color: "#ffffff",
		icons: [
			{
				src: "jacIcon_192.png",
				sizes: "192x192",
				type: "image/png",
			},
			{
				src: "jacIcon_512.png",
				sizes: "512x512",
				type: "image/png",
			},
		],
	},
};
