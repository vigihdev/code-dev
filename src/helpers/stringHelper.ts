import { isNull } from "util";
import { ltrim, rtrim } from "../common/strings";
import { isString } from "../common/types";

export const DIRECTORY_SEPARATOR = '/';
export const alphabet = 'abcdefghijklmnopqrstuvwxyz';
export const number = '1234567890';

export function strOrDefauld<T>(param:T,defaultValue:T):T{
	return typeof param === 'string' ? param : defaultValue; 
}

export function tests(str:string,regex:RegExp):boolean{
	return regex.test(str);
}

export function machs(str:string,regex:RegExp):string[]{
	return isNull(str.match(regex)) ? [] : str.match(regex);
}

export function machOneEnd(str:string,regex:RegExp):string{
	return machs(str,regex).length === 0 ? '' : machs(str,regex).pop();
}

export function machOneFirst(str:string,regex:RegExp):string{
	return machs(str,regex).length === 0 ? '' : machs(str,regex).slice(0,1).pop();
}

export function strToArray(str:string,split:string):string[]{
	return str.split(split);
}

export function ltrims(haystack: string, needle: string[]):string{
	needle?.forEach(n =>  {
		haystack = ltrim(haystack,n);
	});
	return haystack;
}

export function rtrims(haystack: string, needle: string[]):string{
	needle?.forEach(n =>  {
		haystack = rtrim(haystack,n);
	});
	return haystack;
}