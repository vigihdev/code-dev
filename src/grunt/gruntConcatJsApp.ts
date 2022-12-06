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
		itemsPath?.forEach(iPath => {
			if(fs.existsSync(iPath)){
				let srcPath = path.resolve(iPath,'./src/js');
				if(fs.existsSync(srcPath)){
					let srcPathFile = cutPath(srcPath);
					let currentFile : string[] = [];
					let childrenFile : string[] = [];

					let currents : string[] = 
						fs.readdirSync(srcPath,{withFileTypes:true})
							.filter(dirent => !inArray(dirent.name,['.DS_Store']))
							.map(dirent => dirent.name);

					currents?.forEach(name => {
						if(isExtJs(name)){
							currentFile.push( srcPathFile + '/' + name);
						}
						else
						{
							let pathChild = path.resolve(srcPath,'./' + name);
							fs.readdirSync(pathChild,{withFileTypes:true})
								.filter(dirent => !inArray(dirent.name,['.DS_Store']))
								.map(dirent => childrenFile.push( srcPathFile + '/' + path.parse(pathChild).name + '/' + dirent.name) );
						}
						resultObj[
							cutPath(path.resolve(srcPath,'../dist/js')) 
							+ DIRECTORY_SEPARATOR + path.parse(iPath).name + '.js'
						] = currentFile.concat(childrenFile);
					});

				}
				else
				{

				}
			}
		});
		this.items = resultObj;
	}

	getItems():Object{
		return this.items;
	}
}