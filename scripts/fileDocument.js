const path = require("node:path");
const fs = require("node:fs");
const { default: CssDocument } = require("../out/fs-documents/css-document");
const { DIRECTORY_SEPARATOR } = require("../out");

const filePathCss = path.resolve(__dirname,'../../../Sites/dev/pwa/bower/app/dist/css/app.css');
const targetSavePath = path.resolve(__dirname,'../public/document');

const docCss = new CssDocument(filePathCss);

module.exports.init = () => {

	console.log('grunt Init');
	return {
		_docCss: () => {
			docCss.saveAs( 
				targetSavePath + DIRECTORY_SEPARATOR + 'css.json',
				docCss.getItems());
		},
	};
};

this.init()._docCss();