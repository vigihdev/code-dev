import { isNull } from "util";
import { isString } from "../common/types";

export const DIRECTORY_SEPARATOR = '/';

export function strOrDefauld<T>(param:T,defaultValue:T):T{
	return typeof param === 'string' ? param : defaultValue; 
}

export function tests(str:string,regex:RegExp):boolean{
	return regex.test(str);
}

export function machs(str:string,regex:RegExp):string[]{
	return isNull(str.match(regex)) ? [] : str.match(regex);
}

export function machOne(str:string,regex:RegExp):string{
	return machs(str,regex).length === 0 ? '' : machs(str,regex).pop();
}

export function strToArray(str:string,split:string):string[]{
	return str.split(split);
}
