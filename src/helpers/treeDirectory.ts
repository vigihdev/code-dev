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
	private item:Tree.DirectoryTree;
	itemJs:string[];
	itemScss:string[];
	itemCss:string[];

	constructor(itemsPath:string[],options?:Tree.DirectoryTreeOptions) {
		let scss : string[] = [];
		let css : string[] = [];
		let js : string[] = [];

		itemsPath.forEach(basePath => {
			if(fs.existsSync(basePath)){
				Tree(basePath,options).children?.forEach(item => {
					// item.children?.forEach(item1 => {});
					item.children?.forEach(item1 => {
						treeIsFileExt(item1,'.scss') ? scss.push(item1.path) : true;
						treeIsFileExt(item1,'.css') ? css.push(item1.path) : true;
						treeIsFileExt(item1,'.js') ? js.push(item1.path) : true;
						item1.children?.forEach(item2 => {
							treeIsFileExt(item2,'.scss') ? scss.push(item2.path) : true;
							treeIsFileExt(item2,'.css') ? css.push(item2.path) : true;
							treeIsFileExt(item2,'.js') ? js.push(item2.path) : true;
							item2.children?.forEach(item3 => {
								treeIsFileExt(item3,'.scss') ? scss.push(item3.path) : true;
								treeIsFileExt(item3,'.css') ? css.push(item3.path) : true;
								treeIsFileExt(item3,'.js') ? js.push(item3.path) : true;
								item3.children?.forEach(item4 => {
									treeIsFileExt(item4,'.scss') ? scss.push(item4.path) : true;
									treeIsFileExt(item4,'.css') ? css.push(item4.path) : true;
									treeIsFileExt(item4,'.js') ? js.push(item4.path) : true;
									item4.children?.forEach(item5 => {
										treeIsFileExt(item5,'.scss') ? scss.push(item5.path) : true;
										treeIsFileExt(item5,'.css') ? css.push(item5.path) : true;
										treeIsFileExt(item5,'.js') ? js.push(item5.path) : true;
									});
								});
							});
						});
						
					});
				});
			}
		});
		this.itemScss = scss;
		this.itemCss = css;
		this.itemJs = js;
	}
}

export function treeScanDir(basePath:string[],options?:Tree.DirectoryTreeOptions){

}

export function treeIsFileExt(tree:Tree.DirectoryTree,ext:extOption):boolean{
	return tree.extension === ext;
}