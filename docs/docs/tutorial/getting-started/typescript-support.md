---
sidebar_position: 3
---

# TypeScript Support

Before using `three.ez`, make sure you have the `three.js` type definitions installed:
```bash
npm install --save @types/three
```

> 💡 **`three.ez` extends the properties of the `Scene` and `Object3D` classes, requiring the override of `three` type definitions.**

The type definitions for `three.ez` are bundled within the main package. To override the `three` type definitions, follow these steps:

```javascript
"compilerOptions": {
  "paths": {
    "three": ["./node_modules/@three.ez/main/types"]
  }
}
```

> ⚠️ **Currently, `three.ez` has overridden all the primary `three.js` type definitions. However, not all type definitions from the official examples have been overridden.**

## Manually Overriding Type Definitions

This section is a work in progress...

## Using External Libraries without Type Definitions

You can use external libraries that lack type definitions in two ways:

1. Add `@ts-ignore` to the import statement to suppress the error ***(not recommended)***
    ```javascript
    // @ts-ignore
    import * as Package from 'package';
    ```
2. Create Type Definition Files (`*.d.ts`):
   - Create a `types` folder at the project's root directory
   - Inside the `types` folder, create a file and name it `[package-name].d.ts`
   - Write the type definitions within this file
   - In your `tsconfig`, include the path to the new type definitions

    ```javascript
    "compilerOptions": {
        "paths": {
            "three": ["./node_modules/@three.ez/main/types"],
            "[package-name]": ["./types/[package-name]"]
        }
    }
    ```
 
 > 💡 **You can find an example [here](https://stackblitz.com/edit/three-ez-textbox?file=types%2Ftroika-three-text.d.ts).**

