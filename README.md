# Lerna Project

`npm init -y`

`lerna init`

## Modify Lerna.json

```json
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

## create packages with lerna CMD

`lerna create @<scope>/<package_name> --yes`

## add packages dependencies

ref: https://github.com/lerna/lerna/tree/main/commands/add

`lerna add @<scope>/<package_source> --scope=@<scope>/<package_target>`

## Add React to packages

Add React as a dev dependency to the button

`lerna add react --dev --scope='@fitfab/button'`

And add React as a peer dependency for consuming applications

`lerna add react --peer --scope='@fitfab/button'`

**Add button to fitfab package**

```bash
lerna add @fitfab/button --scope=@fitfab/fitfab
```

## Add builder to the other packages as a `dev` dependenciy

`lerna add @fitfab/builder --dev --scope '{@fitfab/fitfab,@fitfab/button}'`

## Add other rollup, babel, etc... to `builder` package

```bash
lerna add rollup --scope=@fitfab/builder
lerna add @babel/core --scope=@fitfab/builder
lerna add @babel/preset-env --scope=@fitfab/builder
lerna add @babel/preset-react --scope=@fitfab/builder
lerna add @rollup/plugin-babel --scope=@fitfab/builder
lerna add @rollup/plugin-node-resolve --scope=@fitfab/builder
```
