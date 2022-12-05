import * as fs from "fs";
import { dirname } from "path";
import { arrayFirst, arrayIndexBy, arrayIndexByRegex, arrayNext, assert, camelCase, DIRECTORY_SEPARATOR, filenameSameDir, getDirs, inArray, strOrDefauld, strToArray, tests } from "../out";
import { isBoolean } from "../out/common/types";
import * as Tree from "directory-tree";
import TreeDirectory, { treeIsFileExt } from "../out/helpers/treeDirectory";

const basePath = dirname(dirname(dirname(__dirname))) + DIRECTORY_SEPARATOR + 'Sites/dev/pwa/bower';
const filterDir = ['app','node_modules','grunt','mixins'];
const indexByDir = ['bootstrap','bootstrap-components','themes'];
type ext = ".js"|".scss"|".css";

assert.ok(isBoolean(true));
const newDir = getDirs(basePath,filterDir,indexByDir);

const options : Tree.DirectoryTreeOptions = {
	exclude:/\.DS_Store/,
	attributes:["extension","type"]
};

const result : string[] = [];
newDir.forEach(dir => {
	Tree(dir,options).children?.forEach(t => {
		// t.children?.forEach(t1 => {});
		t.children?.forEach(t1 => {
			t1.children?.forEach(t2 => {
				t2.children?.forEach(t3 => {
					if(treeIsFileExt(t3,'.scss')){
						result.push(strOrDefauld(t3.path,''));
					}
					// console.log(treeIsFileExt(t3,'.scss'));
					t3.children?.forEach(t4 => {
						// console.log(treeIsFileExt(t4,'.scss'));
					});
				});
			});
		});
		
	});
	
});

result.forEach(t => {
	filenameSameDir(t);
});
console.log(
	// result
	// getDirs(basePath,filterDir,indexByDir)
);
