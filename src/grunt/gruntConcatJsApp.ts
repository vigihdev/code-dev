import * as fs from 'node:fs';
import path = require('node:path');
import { arrayFirst, DIRECTORY_SEPARATOR, inArray, isExtJs, pathCutRegex } from '../helpers';
import BaseGrunt from './baseGrunt';

//'dest/compiled.css': ['src/styles/componentA.css', 'src/styles/componentB.css'],

export default class GruntConcatJsApp extends BaseGrunt{
	private items:Object;
	private parentPath:string;
	
	constructor(itemsPath:string[]){
		super();
		
		this.parentPath = path.resolve(arrayFirst(itemsPath),'../').split('/').pop();
		const cutPath = (p:string):string => pathCutRegex(p,this.parentPath);
		let resultObj = new Object();
		let data : string[] = [];
		itemsPath?.forEach(iPath => {
			if(fs.existsSync(iPath)){
				let srcPath = path.resolve(iPath,'./src/dist/js');
				let distPath = path.resolve(iPath,'./dist/js');
				let finalPath = fs.existsSync(distPath) ? distPath : srcPath;
				if(fs.existsSync(finalPath) ){
					let fileName = iPath.split('/').pop() + '.js';
					// fs.existsSync(finalPath + DIRECTORY_SEPARATOR + fileName)
					let srcPathFile = cutPath(finalPath);
					data.push(srcPathFile + DIRECTORY_SEPARATOR + fileName);
				}
			}
		});

		resultObj[
			this.parentPath 
			+ DIRECTORY_SEPARATOR
			+ 'app/dist/js'
			+ DIRECTORY_SEPARATOR
			+ 'app.js'
		] = data;
		this.items = resultObj;
	}

	getItems():Object{
		return this.items;
	}
}