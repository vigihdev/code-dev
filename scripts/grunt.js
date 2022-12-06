
const fs = require('fs');
const path = require("node:path");
const { default: GruntSass } = require("../out/grunt/gruntSass");
const { default: GruntConcatCss } = require("../out/grunt/gruntConcatCss");
const { scanDirectory, DIRECTORY_SEPARATOR } = require("../out");
const { default: GruntConcatJsLocal } = require('../out/grunt/gruntConcatJsLocal');

const basePath = path.resolve(__dirname,'../../../') + DIRECTORY_SEPARATOR + 'Sites/dev/pwa/bower';
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

// GruntConcatJsLocal
const ConcatJsLocalDir = scanDirectory(basePath,{
	notIn:notInDir,
	indexBy:indexByDir
});

const fileConcatJsLocalDir = new GruntConcatJsLocal(ConcatJsLocalDir);

module.exports.init = () => {

	console.log('grunt Init');
	return {
		gruntSass: () => {
			fileSass.saveAs(path.resolve(__dirname,'../public/grunt/sass.json'),fileSass.getItems());
		},
		gruntConcatCss: () => {
			fileConcatCssDir.saveAs(path.resolve(__dirname,'../public/grunt/concat-css.json'),fileConcatCssDir.getItems());
		},
		gruntConcatJsLocal: () => {
			fileConcatJsLocalDir.saveAs(path.resolve(__dirname,'../public/grunt/concat-js-local.json'),fileConcatJsLocalDir.getItems());
		},
	};
};

this.init().gruntConcatJsLocal();
this.init().gruntConcatCss();
// this.init().gruntSass();