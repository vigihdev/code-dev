import * as Tree from "directory-tree";
import * as fs from "node:fs";
import { mixin } from "../common/objects";

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

export function treeScanAllFile(basePath:string,options?:Tree.DirectoryTreeOptions):string[]{
	const result : string[] = [];
	if(fs.existsSync(basePath)){
		let listDir = Tree(basePath,mixin(defaultOption,options,true));

		listDir.children?.forEach(item => {
			item.children?.forEach(item1 => {
				// item.children?.forEach(item1 => {});
				treeIsFile(item1) ? result.push(item1.path) : true;
				item.children?.forEach(item2 => {
					treeIsFile(item2) ? result.push(item2.path) : true;
					item2.children?.forEach(item3 => {
						treeIsFile(item3) ? result.push(item3.path) : true;
						item3.children?.forEach(item4 => {
							treeIsFile(item4) ? result.push(item4.path) : true;
							item4.children?.forEach(item5 => {
								treeIsFile(item5) ? result.push(item5.path) : true;
							});
						});
					});
				});
			});
		});
	}
	return result;
}

export function treeIsDir(tree:Tree.DirectoryTree):boolean{
	return tree.type === 'directory';
}

export function treeIsFile(tree:Tree.DirectoryTree):boolean{
	return tree.type === 'file';
}

export function treeIsFileExt(tree:Tree.DirectoryTree,ext:extOption):boolean{
	return tree.extension === ext;
}