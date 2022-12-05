import * as fs from "fs";
import { dirname } from "path";
import { arrayFirst, arrayIndexBy, arrayIndexByRegex, arrayLast, arrayNext, assert, camelCase, DIRECTORY_SEPARATOR, filenameSameDir, getDirs, inArray, ltrims, path, rtrims, strOrDefauld, strToArray, tests } from "../out";
import { isBoolean } from "../out/common/types";
import * as Tree from "directory-tree";
import TreeDirectory, { treeIsFileExt } from "../out/helpers/treeDirectory";
import { ltrim } from "../out/common/strings";

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
result.forEach(t => {
	filenameSameDir(t);
});

const fileTree = new TreeDirectory(newDir,options);
console.log(fileTree.itemJs.filter(p => /\/dist\//g.test(p) ));
console.log(fileTree.itemScss.filter(p => !tests( arrayLast(p.split('/')),/_/g) && filenameSameDir(p) )  );


console.log(
	// result
	// getDirs(basePath,filterDir,indexByDir)
);
