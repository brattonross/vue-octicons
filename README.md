# vue-octicons

[![NPM version](https://img.shields.io/npm/v/@brattonross/vue-octicons.svg?style=flat)](https://npmjs.com/package/@brattonross/vue-octicons)

GitHub Octicons packaged as Vue components

### Why should I use this library?

I created this library for 2 main reasons:

1. I wasn't happy with other libraries for Octicons in Vue out there; they felt too complicated
2. No other libraries for Octicons in Vue that I could find came with type definitions

This library was created mainly to solve those issues by staying simple and generating a type defenitions file on build.

## Install

```bash
npm install @brattonross/vue-octicons
```

## Usage

```js
// Import only what you need
import { AlertIcon, SearchIcon } from '@brattonross/vue-octicons';
```

### Sizing

You can customise the size of the icons using the `size` prop.

Setting a size using a multiplier (converts the multiplier to `em`):

```html
<alert-icon size="1.5x"></alert-icon>
```

Setting a size directly in `px`:

```html
<alert-icon size="24"></alert-icon>
```

### Inspiration

I was inspired to create this package when I saw [egoist's vue-feather-icons](https://github.com/egoist/vue-feather-icons). Please check out their repo for another great icon set.
