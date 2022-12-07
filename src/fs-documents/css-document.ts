
import * as fs from "node:fs";
import { isNull } from "node:util";
import BaseDocuments from "./base-documents";

const path = require("node:path");

export default class CssDocument extends BaseDocuments {
	private items:string[];

	constructor(filePathCss: string) {
		super();
		const result: string[] = [];
		if (fs.existsSync(filePathCss) && filePathCss.substr(-4) === '.css') {

			try {
				const data = fs.readFileSync(filePathCss, 'utf8');
				let cssData = data
					.replace(/\/\*.*/g, '')
					.match(/([\.]\w+[-a-z-0-9]+)/gi);
				if (!isNull(cssData)) {
					cssData
						.filter(t => isNaN(parseInt(t.charAt(1))))
						.forEach(text => result.push(text.substr(1)));
				}
			} catch (err) {
				console.error(err);
			}
		}

		const resultUnique = [...new Set(result)];
		this.items = resultUnique;
	}

	getItems():string[]{
		return this.items;
	}
}

