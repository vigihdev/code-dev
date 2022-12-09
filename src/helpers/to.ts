
export const anyToString = (t:any):string => typeof t === 'string' ? t : '';
export const anyToArray = (t:any):string[] => Array.isArray(t) ? t : [];
export const anyToBool = (t:any):boolean => typeof t === 'boolean' ? t : false;