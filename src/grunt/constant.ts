import { dirname } from "node:path";
import { DIRECTORY_SEPARATOR } from "../helpers";

const NotIn = ['app', 'node_modules', 'grunt', 'mixins'];
const IndexBy = ['bootstrap', 'bootstrap-components', 'themes'];
const basePath = dirname(dirname(dirname(__dirname))) + DIRECTORY_SEPARATOR + 'Sites/dev/pwa/bower';

export const GruntOption = {
	basePath : basePath,
	NotIn : NotIn,
	IndexBy : IndexBy,
};