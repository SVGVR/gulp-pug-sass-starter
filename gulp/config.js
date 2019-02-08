const src = "./src/";
const dest = "./dest/";

module.exports = {
	options: {
		uglifyJS: true,
		sourceMaps: true,
		useBabel: true,
	},
	paths: {
		pages: {
			src: src + "html/*.pug",
			dest: dest,
			watch: src + "html/**/*.pug"
		},
		scripts: {
			src: src + "scripts/*.js",
			vendorSrc: src + "scripts/vendor/**/*.js",
			dest: dest + "js",
			watch: src + "scripts/**/*.js"
		},
		styles: {
			src: src + "styles/style.scss",
			dest: dest + "css",
			watch: src + "styles/**/*"
		},
		images: {
			src: src + "images/**/*.+(png|jpg|gif|svg|jpeg)",
			dest: dest + "images"
		},
		data: {
			src: [
				src + "data/global/*.json",
				src + "data/pages/*.json"
			],
			dest: src + "data/",
			concatName: "data.json"
		},
		fonts: {
			src: src + "webfonts/**/*",
			dest: dest + "webfonts"
		}
	}
};