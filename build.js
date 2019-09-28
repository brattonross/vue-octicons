const fs = require('fs-extra');
const pascalCase = require('pascal-case');
const path = require('path');

const icons = fs.readdirSync('./icons');

const componentName = fileName =>
  pascalCase(fileName.replace(/\.svg$/, 'Icon'));

const template = ({ name, svg }) =>
  `
  export default {
    name: '${componentName(name)}',

    props: {
      size: {
        type: String,
        default: '24',
        validator: (s) => (!isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length -1)) && s.slice(-1) === 'x')
      }
    },

    functional: true,

    render(h, ctx) {
      const size = ctx.props.size.slice(-1) === 'x' 
        ? ctx.props.size.slice(0, ctx.props.size.length -1) + 'em'
        : parseInt(ctx.props.size) + 'px';

      const attrs = ctx.data.attrs || {};
      attrs.width = attrs.width || size;
      attrs.height = attrs.height || size;
      ctx.data.attrs = attrs;
  
      return ${svg.replace(/<svg([^>]+)>/, '<svg$1 {...ctx.data}>')};
    }
  };
`.trim();

Promise.all(
  icons.map(icon => {
    const name = componentName(icon);
    const svg = fs.readFileSync(path.join('./icons', icon), 'utf8');
    const component = template({ name, svg });
    const filepath = `./dist/icons/${name}.js`;

    return fs
      .ensureDir(path.dirname(filepath))
      .then(() => fs.writeFile(filepath, component, 'utf8'));
  })
).then(() => {
  const main = icons
    .map(
      icon =>
        `export { default as ${componentName(
          icon
        )} } from './icons/${componentName(icon)}'`
    )
    .join('\n\n');

  return fs.outputFile('./dist/index.js', main, 'utf8');
});

const typings = icons
  .map(icon => `export const ${componentName(icon)}: VueConstructor;`)
  .join('\n\n');

const typeFile = `import { VueConstructor } from 'vue';

${typings}`;

fs.outputFileSync('./index.d.ts', typeFile, 'utf-8');
