# vue-octicons

GitHub Octicons packaged as Vue components

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
