import * as fs from "fs";
import { dirname } from "path";
import { arrayFirst, arrayIndexBy, arrayIndexByRegex, arrayNext, assert, camelCase, DIRECTORY_SEPARATOR, getDirs, strToArray, tests } from "../out";
import { isBoolean } from "../out/common/types";

const basePath = dirname(dirname(dirname(__dirname))) + DIRECTORY_SEPARATOR + 'Sites/dev/pwa/bower';
const filterDir = ['app','node_modules','grunt','mixins'];
const indexByDir = ['bootstrap','bootstrap-components','themes'];

assert.ok(isBoolean(true));
console.log(
	getDirs(basePath,filterDir,indexByDir)
);
