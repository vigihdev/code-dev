
const path = require("node:path");
const { default: GruntSass } = require("../out/grunt/gruntSass");
const { default: GruntConcatCss } = require("../out/grunt/gruntConcatCss");
const { scanDirectory, DIRECTORY_SEPARATOR } = require("../out");
const { default: GruntConcatJsLocal } = require('../out/grunt/gruntConcatJsLocal');
const { default: GruntConcatJsApp } = require('../out/grunt/gruntConcatJsApp');

const basePath = path.resolve(__dirname,'../../../') + DIRECTORY_SEPARATOR + 'Sites/dev/pwa/bower';
const notInDir = ['app', 'node_modules', 'grunt', 'mixins'];
const indexByDir = ['bootstrap', 'bootstrap-components', 'themes'];
const targetSavePath = path.resolve(__dirname,'../public/grunt');
const options = {
	exclude: /\.DS_Store/,
	attributes: ["extension", "type"]
};

// GruntSass
const sassDir = scanDirectory(basePath,{
	notIn:notInDir.concat('jquery','yii2','plugin-js'),
	indexBy:indexByDir
});
const fileSass = new GruntSass(sassDir);

// GruntConcatCss
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

// GruntConcatJsApp
const ConcatJsApp = scanDirectory(basePath,{
	notIn:notInDir.concat('jquery'),
	indexBy:['plugin-js','bootstrap', 'bootstrap-components', 'themes','yii2']
});

const fileGruntConcatJsApp = new GruntConcatJsApp(ConcatJsApp);

module.exports.init = () => {

	console.log('grunt Init');
	return {
		gruntSass: () => {
			fileSass.saveAs(
				targetSavePath + DIRECTORY_SEPARATOR + 'sass.json',
				fileSass.getItems());
		},
		gruntConcatCss: () => {
			fileConcatCssDir.saveAs(
				targetSavePath + DIRECTORY_SEPARATOR + 'concat-css.json',
				fileConcatCssDir.getItems());
		},
		gruntConcatJsLocal: () => {
			fileConcatJsLocalDir.saveAs( 
				targetSavePath + DIRECTORY_SEPARATOR + 'concat-js-local.json',
				fileConcatJsLocalDir.getItems());
		},
		gruntConcatJsApp: () => {
			fileGruntConcatJsApp.saveAs( 
				targetSavePath + DIRECTORY_SEPARATOR + 'concat-js-app.json',
				fileGruntConcatJsApp.getItems());
		},
	};
};

this.init().gruntConcatJsApp();
this.init().gruntConcatJsLocal();
this.init().gruntConcatCss();
this.init().gruntSass();