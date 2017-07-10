# bynd-frontend

## JavaScript

### Utilities

```
import { Cookies, Dom, Storage } from 'bynd-frontend/scripts'
```

### React
```
import { MyComponent } from 'bynd-frontend/scripts/react'
```

### ESLint

We expose a custom eslint config that inherits from the [airbnb eslint config](https://www.npmjs.com/package/eslint-config-airbnb), after installing this module extend our configuration in your `.eslintrc`

```.eslintrc
{
  "extends": "./node_modules/bynd-frontend/eslint/index.js"
}
```

*optionally* you can import the [google eslint config](https://www.npmjs.com/package/eslint-config-google) if working on a google project

```.eslintrc
{
  "extends": "./node_modules/bynd-frontend/eslint/google.js"
}
```

## Changelog

[changelog](./CHANGELOG.md).

## Contributing

[contributing guidelines](./CONTRIBUTING.md).
