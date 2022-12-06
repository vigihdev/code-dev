
const codeDev = require("../out");
const fs = require('fs');
const path = require("node:path");
const { default: GruntSass } = require("../out/grunt/gruntSass");
const { default: GruntConcatCss } = require("../out/grunt/gruntConcatCss");
const { scanDirectory } = require("../out");

const basePath = path.resolve(__dirname,'../../../') + codeDev.DIRECTORY_SEPARATOR + 'Sites/dev/pwa/bower';
const notInDir = ['app', 'node_modules', 'grunt', 'mixins'];
const indexByDir = ['bootstrap', 'bootstrap-components', 'themes'];
const options = {
	exclude: /\.DS_Store/,
	attributes: ["extension", "type"]
};

const sassDir = scanDirectory(basePath,{
	notIn:notInDir.concat('jquery','yii2','plugin-js'),
	indexBy:indexByDir
});
const fileSass = new GruntSass(sassDir);

const concatCssDir = scanDirectory(basePath,{
	notIn:notInDir.concat('jquery','yii2','plugin-js'),
	indexBy:indexByDir
});
const fileConcatCssDir = new GruntConcatCss(concatCssDir,'/app/dist/css/app.css');

module.exports.init = () => {

	console.log('grunt Init');
	return {
		gruntSass: () => {
			fileSass.saveAs(path.resolve(__dirname,'../public/grunt/sass.json'),fileSass.getItems());
		},
		gruntConcatCss: () => {
			fileConcatCssDir.saveAs(path.resolve(__dirname,'../public/grunt/concat-css.json'),fileConcatCssDir.getItems());
		},
	};
};

this.init().gruntConcatCss();
// this.init().gruntSass();