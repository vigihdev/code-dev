
export function arrayIndexBy(item:string[],indexBy:string[]):string[] {
	return [...new Set(indexBy.concat(item))];
}

export function arrayFirst(item:string[]):string {
	return item.length === 0 ? '' : item.slice(0,1).pop();
}

export function arrayNext(item:string[]):string {
	return item.length >= 2 ? item.slice(0,2).pop() : '';
}

export function arrayLast(item:string[]):string {
	return item.length === 0 ? '' : item.pop();
}

export function arrayNotIn(item:string,notIn:string[]):boolean {
	return notIn.filter(n => n === item).length === 0;
}

export function inArray(needle:string,haystack:string[]):boolean {
	return haystack.filter(n => n === needle).length > 0;
}

export function arrayMergeUnique<T extends string[]>(a:T,b:T,c?:T,d?:T):string[] {
	return [...new Set(a.concat(b,(c ?? []),(d ?? [])) )];
}

export function arrayUnique(arr:string[]):string[]{
	return [...new Set(arr)];
}

export function arrayRemove(remove:string[],items:string[]):string[]{
	const exist = (r:string):boolean => {
		return remove.filter(t => t === r).length > 0;
	};
	return arrayUnique(items).filter(i => !exist(i));
}