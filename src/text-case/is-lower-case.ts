/**
 * Returns a boolean indicating whether text is lower case Text
 */
export function isLowerCase(input: string) {
  return input.toLowerCase() === input && input.toUpperCase() !== input;
}
