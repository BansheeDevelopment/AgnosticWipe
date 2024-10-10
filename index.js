/**
 * AgnosticWipe 0.1.0
 *
 * A utility function that safely removes all child nodes of a given element,
 * now with configurable debugging capabilities (log/warn) similar to all Agnostic
 * modules developed by us.
 *
 * Developed by Claudio González (claudio@banshee.pro)
 * for Banshee Technologies - https://www.banshee.pro
 *
 * MIT License
 * Copyright (c) 2024 Banshee Technologies. All rights reserved.
 */

let globalDebugLogWipe = false;
let globalDebugWarnWipe = false;

export function agnosticWipe({ debugLog = false, debugWarn = false } = {}) {
  globalDebugLogWipe = debugLog;
  globalDebugWarnWipe = debugWarn;

  return function (targetSelector) {
    const targetElement = document.querySelector(targetSelector);

    if (!targetElement) {
      if (globalDebugWarnWipe) {
        console.warn(`AgnosticWipe: Target element with selector "${targetSelector}" does not exist.`);
      }
      return;
    }

    if (globalDebugLogWipe) {
      console.log(`AgnosticWipe: Wiping content of "${targetSelector}".`);
    }

    while (targetElement.firstChild) {
      targetElement.removeChild(targetElement.firstChild);
    }

    if (globalDebugLogWipe) {
      console.log(`AgnosticWipe: Content of "${targetSelector}" has been wiped.`);
    }
  };
}
