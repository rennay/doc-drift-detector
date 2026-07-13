/**
 * Greeting module — generates personalised greetings.
 *
 * @module greeting
 */

export interface GreetingOptions {
  /** Use formal tone (default: false) */
  formal?: boolean;
  /** Include current time in greeting (default: false) */
  includeTime?: boolean;
}

/**
 * Generate a personalised greeting message.
 *
 * @param name - The person's name
 * @param options - Optional greeting configuration
 * @returns A greeting string
 *
 * @example
 * ```ts
 * greet("Rennay"); // "Hello, Rennay!"
 * greet("Rennay", { formal: true }); // "Good day, Rennay."
 * ```
 */
export function greet(name: string, options: GreetingOptions = {}): string {
  const { formal = false, includeTime = false } = options;

  let greeting: string;

  if (formal) {
    greeting = `Good day, ${name}.`;
  } else {
    greeting = `Hello, ${name}!`;
  }

  if (includeTime) {
    const hour = new Date().getHours();
    const timeOfDay = hour < 12 ? "morning" : hour < 18 ? "afternoon" : "evening";
    greeting = `Good ${timeOfDay}, ${name}${formal ? "." : "!"}`;
  }

  return greeting;
}

/**
 * Generate a farewell message.
 *
 * @param name - The person's name
 * @returns A farewell string
 */
export function farewell(name: string): string {
  return `Goodbye, ${name}. See you next time!`;
}
