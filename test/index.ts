import { assert, DIRECTORY_SEPARATOR } from "../out";
import { isBoolean } from "../out/common/types";

const path = require('node:path');
const fs = require('node:fs');
const basePath = path.resolve(__dirname,'../../../') + DIRECTORY_SEPARATOR + 'Sites/dev/pwa/bower';
const filterDir = ['app','node_modules','grunt','mixins'];
const indexByDir = ['bootstrap','bootstrap-components','themes'];
type ext = ".js"|".scss"|".css";

assert.ok(isBoolean(true));
