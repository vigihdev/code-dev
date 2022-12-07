import * as fs from "fs";
import path = require("path");
import { arrayIndexBy, arrayNotIn, inArray } from "./arrayHelper";
import { DIRECTORY_SEPARATOR } from "./stringHelper";


export type scanDirectoryOptions = {
	exclude?:RegExp;
	notIn?:string[];
	indexBy?:string[];
};

export function scanDirectory(basePath: string,options?:scanDirectoryOptions):string[] {
	const result: string[] = [];
	if (fs.existsSync(basePath)) {
		let listDir = fs.readdirSync(basePath, { withFileTypes: true })
			.filter(dirent => dirent.isDirectory()).map(dirent => dirent.name);
		if(options){
			let list : string[] = 
				listDir.filter(t => arrayNotIn(t,options.notIn ?? []))
					.filter(t => options.exclude ? !options.exclude.test(t) : true);
				
			let newList = arrayIndexBy(list,options.indexBy ?? []);
			newList.map(t => result.push(basePath + DIRECTORY_SEPARATOR + t));
		}
		else{
			listDir.map(t => result.push(basePath + DIRECTORY_SEPARATOR + t));
		}
	}
	return result;
}

export function pathCutRegex(paths:string,endStr:string):string{
	return paths.replace(new RegExp('.*?' + endStr,'g'),endStr);
}

export function isExtJs(str:string):boolean{
	return str.substr(-3) === '.js';
}
