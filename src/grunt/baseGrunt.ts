import * as fs from "fs";
import * as path from "node:path";

export default class BaseGrunt{
	
	constructor(){}

	saveAs(fullFileName:string,data:string[]){
		const _path = path.parse(fullFileName);
		if(fs.existsSync(_path.dir)){
			try{
				const _data = JSON.stringify(data,null,4);
				fs.writeFileSync( fullFileName,_data);
			}
			catch(e){
				console.log(e);
			}
		}
		
	}
}