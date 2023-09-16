---
sidebar_position: 3
---

# TypeScript Support

Install `three.js` type definitions:
```bash
npm install --save @types/three
```

> 💡 **`three.ez` adds properties to the `Scene` and `Object3D` classes so you need to override the `three` type definitions.**

The type definitions of `three.ez` are already in the main package. <br />
To override `three` type definitions, go to `ts.config` and add this path:

```javascript
"compilerOptions": {
  "paths": {
    "three": ["./node_modules/@three.ez/main/types"]
  }
}
```

> ⚠️ **Currently all the main type definitions of `three.js` have been overridden. <br /> Instead, not all the type definitions of the official examples have been overridden.**

## Manual override of definition types

Work in progress...

## Use external libraries without type definitions

It is possible to use external libraries without type definitions.
There are two possible solutions:
1. Add `@ts-ignore` to the import to ignore the error ***(not recommended)***
    ```javascript
    // @ts-ignore
    import * as Package from 'package';
    ```
2. Manually create type definition files `(.d.ts)`:
   - Create the `types` folder in the root of the project
   - Create a file in the `types` folder and rename it `[package-name].d.ts`
   - Write the type definitions inside the file
   - Go to `ts.config` and add the path to the new type definitions

    ```javascript
    "compilerOptions": {
        "paths": {
            "three": ["./node_modules/@three.ez/main/types"],
            "[package-name]": ["./types/[package-name]"]
        }
    }
    ```
 
 > 💡 **You can consult an example [here](https://stackblitz.com/edit/three-ez-textbox?file=types%2Ftroika-three-text.d.ts).**

