import * as fs from "fs";
import { dirname } from "path";
import { arrayIndexBy, arrayNotIn } from "./arrayHelper";
import { DIRECTORY_SEPARATOR } from "./stringHelper";

export function getDirs(basePath: string, notIn?: string[],indexBy?:string[]): string[] {
	const result: string[] = [];
	if (fs.existsSync(basePath)) {
		const listDir = fs.readdirSync(basePath, { withFileTypes: true });
		let list = listDir?.filter(dirent => dirent.isDirectory())
			.map(dirent => dirent.name)
			.filter(t => arrayNotIn(t, (notIn === undefined ? [] : notIn) ));

		list = indexBy === undefined ? list : arrayIndexBy(list,indexBy);
		list.map(t => result.push(basePath + DIRECTORY_SEPARATOR + t));
	}
	return result;
}

export function scanFiles(fullPath: string) {

}