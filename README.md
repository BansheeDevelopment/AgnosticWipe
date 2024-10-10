
# AgnosticWipe

AgnosticWipe is a utility function that safely removes all child nodes of a given DOM element, avoiding the use of `innerHTML` to clear content. It includes configurable debugging capabilities (`log` and `warn`), similar to other Agnostic modules, to assist with troubleshooting during development.

## Features

- Safely wipes the content of a DOM element without using `innerHTML`.
- Configurable debugging for logging and warnings.
- Simple, clean, and secure DOM manipulation.

## Installation

You can install AgnosticWipe via npm:

```bash
npm install agnostic-wipe
```

## Usage

### Importing and Declaring Debugging

To use `agnosticWipe`, first import it and configure the debugging options globally. You can then wipe the content of elements without needing to reconfigure debugging for every call.

```javascript
import { agnosticWipe } from 'agnostic-wipe';

// Configure AgnosticWipe with debug options globally
window.agnosticWipe = agnosticWipe({ debugLog: true, debugWarn: true });
```

### Basic Usage

Once `agnosticWipe` is configured globally, you can call it directly to wipe the content of any element by providing the target selector:

```javascript
// Wipe content of an element with the ID '#myElement'
window.agnosticWipe('#myElement');
```

This will safely remove all the child nodes of the selected element.

### Direct Usage Without Debugging

If you don't need to configure debugging, you can use `agnosticWipe` without setting the options:

```javascript
// Wipe content of an element without configuring debugging
agnosticWipe()('#myElement');
```

### Debugging

The `agnosticWipe` function can be configured to show logs and warnings:

- `debugLog`: Controls the appearance of informational messages (`console.log`). It can be set to `true` or `false`.
- `debugWarn`: Controls the appearance of warning messages (`console.warn`). It can be set to `true` or `false`.

By default, both flags are set to `false`.

#### Example:

Show only warnings in the console:
```javascript
window.agnosticWipe = agnosticWipe({ debugLog: false, debugWarn: true });
```

Show both logs and warnings:
```javascript
window.agnosticWipe = agnosticWipe({ debugLog: true, debugWarn: true });
```

Show nothing:
```javascript
window.agnosticWipe = agnosticWipe;
```
-or-
```javascript
window.agnosticWipe = agnosticWipe({ debugLog: false, debugWarn: false });
```

## License

AgnosticHTML is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Issues

If you encounter any issues, feel free to report them [here](https://github.com/BansheeDevelopment/AgnosticWipe/issues).
