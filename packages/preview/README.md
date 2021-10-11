# `@fitfab/preview`

Storybook provides a sandbox to build UIs in isolation so you can develop hard-to-reach states and edge cases.

[Storybook](https://storybook.js.org/)

## Storybook Setup

```bash
# 1. Go to the directory where the package is located
cd packages/preview

# 2. Install storybook
npx sb init --type react

# 3. Add tsconfig.json -- don't know if this is necesary
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "baseUrl": ".",
  },
  "include": ["**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}

# 4. Change all your stories to stories.tsx (Typescript)

Button.stores.jsx --> Button.stories.tsx

# Add the "button package" to the prepiew package via lerna
npx lerna add @fitfab/button --scope @fitfab/preview

# so it can be imported in the story like so:
import { Button } from '@fitfab/button/src/button'

```
