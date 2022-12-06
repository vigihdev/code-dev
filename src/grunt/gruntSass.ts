import { treeScanAllFile } from '../helpers/treeDirectory';
import * as fs from 'node:fs';
import path = require('node:path');
import { DIRECTORY_SEPARATOR, inArray, pathCutRegex } from '../helpers';
import BaseGrunt from './baseGrunt';


// sass: {
// 	dist: {
// 		files: [{
// 			expand: true,
// 			cwd: 'bower/bootstrap/scss',
// 			src: ['bootstrap.scss'],
// 			dest: 'bower/bootstrap/dist/css',
// 			ext: '.css'
// 		}]
// 	}
// },

type optionsSass = {
	expand?: true | false;
	cwd: string;
	src: string[];
	dest: string;
	ext: string;
};

export default class GruntSass extends BaseGrunt{
	private items:optionsSass[];
	private parentPath:string;
	
	constructor(itemsPath:string[]){
		super();
		const result : optionsSass[] = [];
		const data : string[] = [];

		this.parentPath = path.resolve(itemsPath.pop(),'../').split('/').pop();
		itemsPath?.forEach(iPath => {
			if(fs.existsSync(iPath)){
				let isPath = path.parse(iPath);
				
				let treeDir = treeScanAllFile(iPath,{
					extensions:/\.scss/
				});
				treeDir?.filter(p => path.parse(p).name.charAt(0) !== '_')
					.filter(p => isPath.name === path.parse(p).name)
					.forEach(file => data.push(file));
			}
		});

		const cutPath = (p:string):string => pathCutRegex(p,this.parentPath);
			
		[...new Set(data)].forEach(file => {
			let isPath = path.parse(file);
						
			result.push({
				expand:true,
				cwd: cutPath(path.resolve(file,'../')),
				src:[isPath.base],
				dest: cutPath(path.resolve(file,'../../')) + DIRECTORY_SEPARATOR + 'dist/css',
				ext:'.css',
			});
		});
		this.items = result;
	}

	getItems():optionsSass[]{
		return this.items;
	}
}