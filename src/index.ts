export * from "./text-case/index";
export * from "./common/index";

import { CharCode } from "./common/charCode";
import { camelCase } from "./text-case/camel-case";
import { paramCase } from "./text-case/param-case";
import { upperCase } from "./text-case/upper-case";

// Simple Test
console.log(camelCase("simple Test"));
console.log(upperCase("simple Test"));
console.log(paramCase("simple Test"));
console.log("Simple".charCodeAt(0));
console.log("Simple".charCodeAt(0) === CharCode.S);
