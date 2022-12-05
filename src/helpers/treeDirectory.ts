import * as Tree from "directory-tree";
import * as fs from "node:fs";

export type extOption = ".js"|".scss"|".css"|".php"|".html";
export type itemOptions = "normalizePath"| "exclude"| "attributes"| "extensions"| "followSymlinks"| "depth";
type itemsOptions = "path"| "name"| "size"| "type"| "children"| "extension"| "isSymbolicLink"| "custom";
const defaultOption : Tree.DirectoryTreeOptions = {
	exclude:/\.DS_Store/,
	attributes:["extension","type"]
};

function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

export default class TreeDirectory{
	// private options:Tree.DirectoryTreeOptions;
	private item:Tree.DirectoryTree;
	itemJs:string[];
	itemScss:string[];
	itemCss:string[];

	constructor(basePath:string,options?:Tree.DirectoryTreeOptions) {
		let resultScss : string[] = [];
		if(fs.existsSync(basePath)){
			Tree(basePath,options).children?.forEach(item => {
				
				// item.children?.forEach(item1 => {});
				item.children?.forEach(item1 => {
					item1.children?.forEach(item2 => {
						item2.children?.forEach(item3 => {
							resultScss.push(item3.path);
							
						// 	// if(this.isFileExt(item3,".scss")){
						// 	// 	this.itemScss.push(item3.path);
						// 	// }

							item3.children?.forEach(item4 => {
								resultScss.concat(item4.path);
						// 		// if(this.isFileExt(item4,".scss")){
						// 		// 	this.itemScss.push(item4.path);
						// 		// }

								item4.children?.forEach(item5 => {

								});
							});
						});
					});
				});
			});
		}
		delay(1500);
		console.log(resultScss);
		
		this.itemScss = resultScss;
	}

	isFileExt(item:Tree.DirectoryTree,ext:extOption):boolean{
		return item.extension !== undefined && item.extension === ext;
	}

	getItem(opt?:itemOptions):Tree.DirectoryTree{
		return opt === undefined ? this.item : this.item[opt];
	}

	isFile(ext?:extOption):boolean{
		if(this.item.extension){
			return ext === undefined ? true : ext === ext;
		}
		return false;
	}
}

export function treeScanDir(basePath:string[],options?:Tree.DirectoryTreeOptions){

}

export function treeIsFileExt(tree:Tree.DirectoryTree,ext:extOption):boolean{
	return tree.extension === ext;
}