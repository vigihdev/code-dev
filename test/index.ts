import { anyToArray, arrayRemove, assert, DIRECTORY_SEPARATOR, isDir, isDirname, isFile } from "../out";
import { isBoolean } from "../out/common/types";
import * as path from "path";
import { dirname } from "path";

const fs = require('node:fs');
const basePath = path.resolve(__dirname,'../../../') + DIRECTORY_SEPARATOR + 'Sites/dev/pwa/bower';
const filterDir = ['app','node_modules','grunt','mixins'];
const indexByDir = ['bootstrap','bootstrap-components','themes'];
type ext = ".js"|".scss"|".css";

assert.ok(isBoolean(true));

console.log(isDirname(basePath) === 'bower');
console.log(isDirname(path.resolve(__dirname,'../')));
console.log(isDirname(path.resolve(__filename,'../../../../')));
console.log(isDirname(path.resolve(__dirname,'./../../')));
