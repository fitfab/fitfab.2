## Lerna setup documentation

`npm init -y`

`npx lerna init`

### Modify Lerna.json

```js
{
  "packages": ["packages/*"],
  "version": "0.0.0",
  "hoist": true, // Makes all dependencies on packages to be lifted up to the root so we de-dupe.
  "stream": true, // stream: Prints all the inner package logs when run.
  "bootstrap": {
    //  Prevents generating package-lock.json on all these packages.
    "npmClientArgs": ["--no-package-lock"]
  }
}
```

### create packages with lerna CMD

`npx lerna create @<scope>/<package_name> --yes`

### add packages dependencies

ref: https://github.com/lerna/lerna/tree/main/commands/add

`lerna add @<scope>/<package_source> --scope=@<scope>/<package_target>`

### Add React to packages

Add React as a dev dependency to the button

`npx lerna add react --dev --scope='@fitfab/button'`

`npx lerna add react-dom --dev --scope='@fitfab/button'`

`npx lerna add @types/react --dev --scope='@fitfab/button'`

And add React as a peer dependency for consuming applications

`npx lerna add react --peer --scope='@fitfab/button'`

### Add the Button package to the fitfab package (Main package)

```bash
npx lerna add @fitfab/button --scope=@fitfab/fitfab
```

### Add builder to the other packages as a `dev` dependency

`lerna add @fitfab/builder --dev --scope '{@fitfab/fitfab,@fitfab/button}'`

### Builder: compile the ts, tsx with Rollup

**Add rollup, babel, etc... to `builder` package**

```bash
npx lerna add rollup --scope=@fitfab/builder
npx lerna add @babel/core --scope=@fitfab/builder
npx lerna add @babel/preset-env --scope=@fitfab/builder
npx lerna add @babel/preset-react --scope=@fitfab/builder
npx lerna add @rollup/plugin-babel --scope=@fitfab/builder
npx lerna add @rollup/plugin-node-resolve --scope=@fitfab/builder

# add typescript preset to transpile ts to js
npx lerna add @babel/preset-typescript --scope=@fitfab/builder
# also add these peer dependencies typescript and tslib
npx lerna add typescript --peer --scope=@fitfab/builder
npx lerna add tslib --peer --scope=@fitfab/builder
```

```bash
# These are included in the @babel/preset-env
"@babel/proposal-class-properties"
"@babel/proposal-object-rest-spread"
```

```bash
# Using babel with the option [babelHelpers: "runtime"], you need to add this plugin
# https://babeljs.io/docs/en/babel-plugin-transform-runtime
npx lerna add @babel/plugin-transform-runtime --dev --scope=@fitfab/builder
```

### Typescript setup

```bash
# This "tsconfig.json" is at the root of the monorepo
{
  "compilerOptions": {
    "target": "es6",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react",
    "types": ["node"]
  }
}
```

```bash
# This tsconfig.json is on every pakage and it extends the root tsconfig.json
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "baseUrl": ".",
    "outDir": "./dist",
    "declaration": true,
    "declarationDir": "./dist"
  },
  "include": ["**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
```

Now you run the build CMD

`npm run build`

### Typescript setup

_Resources about babel & Typescript_:

- https://www.typescriptlang.org/docs/handbook/babel-with-typescript.html
- https://iamturns.com/typescript-babel/
- https://github.com/tsconfig/bases
- https://github.com/kraftdorian/react-ts-rollup-starter-lib
