import { treeScanAllFile } from '../helpers/treeDirectory';
import * as fs from 'node:fs';
import path = require('node:path');
import { pathCutRegex } from '../helpers';
import BaseGrunt from './baseGrunt';

//'dest/compiled.css': ['src/styles/componentA.css', 'src/styles/componentB.css'],


export default class GruntConcatCss extends BaseGrunt{
	private items:Object;
	private parentPath:string;
	private nameTargetFile:string;
	
	constructor(itemsPath:string[],nameTargetFile:string){
		super();
		const data : string[] = [];
		this.nameTargetFile = nameTargetFile;
		
		this.parentPath = path.resolve(itemsPath.pop(),'../').split('/').pop();
		itemsPath?.forEach(iPath => {
			if(fs.existsSync(iPath)){
				let treeDir = treeScanAllFile(iPath,{ extensions:/\.css/ });
				treeDir?.forEach(file => data.push(file));
			}
		});

		const cutPath = (p:string):string => pathCutRegex(p,this.parentPath);
		const uniqueData = [...new Set(data)].map(file => cutPath(file));
		let objData = new Object();
		objData[ this.parentPath + this.nameTargetFile] = uniqueData;
		this.items = objData;
	}

	getItems():Object{
		return this.items;
	}
}