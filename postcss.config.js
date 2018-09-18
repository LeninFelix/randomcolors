var desk = require('sort-css-media-queries'); //Este plugin sirve como complemento para css-mqpacker para acomodar los
											  //Media Querys del mas grande al mas chico


module.exports = {
	plugins: [
		require("postcss-cssnext")({
			features: {
				autoprefixer: {
					grid: true,
				}
			}
		}),

		require("postcss-font-magician"),
		
		require("css-mqpacker")({
			sort: desk.desktopFirst,
		}),
	]
}