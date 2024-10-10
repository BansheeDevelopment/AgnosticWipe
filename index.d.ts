interface AgnosticWipeOptions {
  debugLog?: boolean;
  debugWarn?: boolean;
}

/**
 * agnosticWipe function
 *
 * Removes all child nodes of a DOM element matching the targetSelector.
 * Provides options for debugging (log and warn) similar to other Agnostic modules.
 *
 * @param options - An object with optional debugLog and debugWarn properties.
 * @returns A function that accepts a targetSelector string to specify the element to wipe.
 */
export function agnosticWipe(options?: AgnosticWipeOptions): (targetSelector: string) => void;
