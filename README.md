# bynd-frontend

Beyond's core front-end package for use on internal projects. This repository contains a range of JavaScript functions to make your life easier as well as reuseable react components and our eslint configuration.

## Installation

Ensure you have access to the project on [bitbucket](https://bitbucket.org/byndops/bynd-frontend/) and your ssh key has been assigned to your user.

```
$ npm install bitbucket:byndops/bynd-frontend --save-dev
```

If you plan on using our eslint config ensure you have the required peerDepedencies installed (since npm v3 peerDepedencies are no longer automatically installed) - alternatively use [install-peerdeps](https://github.com/nathanhleung/install-peerdeps)

```
$ node_modules/bynd-frontend/bin/installPeerDeps.sh
```

### Utilities/Helpers

Utilities and Helpers can be imported from `bynd-frontend/scripts` for a full list of these see [Vanilla Modules](./scripts/src/vanilla/README.md).

```
import { Cookies, Dom, Storage } from 'bynd-frontend/scripts'

Cookies.set('foobar', true);
```

### React

React components can be imported from `bynd-frontend/scripts/react` for a full list of these see [React Components](./scripts/src/react/README.md).

```
import { MyComponent } from 'bynd-frontend/scripts/react'

render() {
  return <MyComponent />
}
```

### ESLint

We expose a custom eslint config that inherits from the [airbnb eslint config](https://www.npmjs.com/package/eslint-config-airbnb), after installing this module extend our configuration in your `.eslintrc`

```
{
  "extends": "./node_modules/bynd-frontend/eslint/index.js"
}
```

*optionally* you can import the [google eslint config](https://www.npmjs.com/package/eslint-config-google) if working on a google project

```
{
  "extends": "./node_modules/bynd-frontend/eslint/google.js"
}
```

## Development

Install depedencies

```
npm install
```

Build demo component library

```
npm run demo
```

Watch src code for release

```
npm run watch
```

Compile src code for release

```
npm run build
```

## Changelog

[changelog](./CHANGELOG.md).

## Contributing

[contributing guidelines](./CONTRIBUTING.md).
