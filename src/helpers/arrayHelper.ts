
export function arrayIndexBy(item:string[],index:string[]):string[] {
	const result : string[] = [];

	item.forEach(itm => {
		index?.forEach(idx => {
			if(idx === itm){
				result.push(itm);
			}
		});
	});
	return [...new Set(result.concat(item))];
}

export function arrayIndexByRegex(item:string[],index:string[],regex:RegExp):string[] {
	const result : string[] = [];
	item.forEach(i => {
		
	});
	return result;
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