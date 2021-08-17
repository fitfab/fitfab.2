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

`lerna add @<scope>/<package_name> --scope=@<scope>/<package_name>`

## Add builder to the other packages as a `dev` dependenciy

`lerna add @fitfab/builder --dev --scope '{@fitfab/fitfab,@fitfab/button}'`
