/**
 * Type definitions for cpf-utils
 *
 * Exports:
 * - `validate(value: string): boolean` (named export)
 * - default export `CPF` with a `validate` method
 */

/**
 * Validates a CPF string. Returns `true` if valid, `false` otherwise.
 * Accepts formatted values like `000.000.000-00` as well as unformatted `00000000000`.
 */
export function validate(value: string): boolean;
export function generate(): string
export function format(value: string): string

/**
 * Default export: an object containing the library utilities.
*/
declare const CPF: {
  /** Validate a CPF string */
  validate(value: string): boolean;
  generate(): string
  format(value: string): string
};

export default CPF;
