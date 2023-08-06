> For almost everything, just replace
> `kennanhunter` with your username
> `@kennanhunter/npm-package-template` with your npm name (line 20 + 21 of readme.md)
> `npm-package-template` with your repo name
>
> For github actions add
>
> - NPM_TOKEN: found in access tokens on your npm settings
> - CODECOV_TOKEN: found in code coverage
>
> Always remember [grug's timeless advice on testing](https://grugbrain.dev/#grug-on-testing)
>
> You also will want to change the `funding` key in [package.json](./package.json)
> and the ko-fi key in [FUNDING.yml](./.github/FUNDING.yml)
> to your financial details

# NPM Package Template

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/kennanhunter/npm-package-template/publish.yml?style=for-the-badge)
![NPM Downloads](https://img.shields.io/npm/dt/@kennanhunter/npm-package-template?style=for-the-badge)
![NPM License](https://img.shields.io/npm/l/@kennanhunter/npm-package-template?style=for-the-badge)
[![Code coverage](https://img.shields.io/codecov/c/github/kennanhunter/npm-package-template?style=for-the-badge)](https://app.codecov.io/gh/KennanHunter/npm-package-template)

## Usage

### Installing

```shell
# npm
npm install npm-package-template
# Yarn
yarn add npm-package-template
```

### Adding

```typescript
import { add } from "zod";

const res = add(5, 7);

console.log(res); // 13
```

## Developing

```shell
git clone https://github.com/KennanHunter/npm-package-template.git
cd npm-package-template

yarn
yarn test

# Benchmarking (builds in background)
yarn benchmark

# Only needed for final publishing
yarn build
```

There exists recommended extensions and basic settings in the [.vscode](./.vscode) folder.
