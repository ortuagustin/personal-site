---
title: Importar SVGs como componentes Vue
date: 2020-08-02
layout: post
---

## Importar SVGs como componentes Vue

La idea es poder utilizar cualquier archivo `.svg` como un componente Vue más; para ello, necesitamos incluir un *loader* en nuestro proyecto, [svg-to-vue-component](https://www.npmjs.com/package/svg-to-vue-component)

Primero, se agrega la dependencia:

* Usando *npm*:

```bash
  npm install svg-to-vue-component
```

* Usando *yarn*:

```bash
  yarn add svg-to-vue-component
```

Luego, de acuerdo al tipo de proyecto, debemos configurarlo. En la [documentación](https://www.npmjs.com/package/svg-to-vue-component) se muestran algunos ejemplos:

### Vue CLI

Es uno de los casos más comunes. La configuración se hace en el archivo `vue.config.js` en la raíz del proyecto:

```js
module.exports = {
  chainWebpack(config) {
    // Only convert .svg files that are imported by these files as Vue component
    const FILE_RE = /\.(vue|js|ts|svg)$/

    // Use vue-cli's default rule for svg in non .vue .js .ts files
    config.module.rule('svg').issuer(file => !FILE_RE.test(file))

    // Use our loader to handle svg imported by other files
    config.module
      .rule('svg-component')
      .test(/\.svg$/)
      .issuer(file => FILE_RE.test(file))
      .use('vue')
      .loader('vue-loader')
      .end()
      .use('svg-to-vue-component')
      .loader('svg-to-vue-component/loader')
  }
}
```

### Saber

[Saber](https://saber.land/) es un generador de sitios estáticos que nos permite usar Vue (e incluso mezclado con Markdown). Éste sitio está construido usando Saber.

Para configurar **svg-to-vue-component** en un proyecto Saber, debemos usar [webpack-chain](https://github.com/neutrinojs/webpack-chain), cómo se explica en la [documentación de Saber](https://saber.land/docs/working-with-webpack.html#advanced-configuration).

Entonces, creamos un archivo `/src/saber-node.js` con el siguiente contenido:

```js
exports.chainWebpack = function(config) {
  const FILE_RE = /\.(vue|md|js|ts|svg)$/

  config.module.rule('svg').issuer(file => !FILE_RE.test(file))

  config.module
    .rule('svg-component')
    .test(/\.svg$/)
    .issuer(file => FILE_RE.test(file))
    .use('vue')
    .loader('vue-loader')
    .end()
    .use('svg-to-vue-component')
    .loader('svg-to-vue-component/loader')
}
```

> El contenido es el mismo, solamente incluí tambien en la expresión regular `FILE_RE` la extensión **md**, para poder usar el *loader* en archivos **Markdown**

Luego, ya se pueden importar los SVG. Un ejemplo adaptado de [Mi CV](/resume)

```vue
<template>
  <span class="inline-flex items-center space-x-4">
    <TelegramIcon class="w-6 h-6 text-blue-400" />
    <a
      class="inline-block transition duration-150 ease-in-out border-b border-transparent hover:border-white"
      href="https://t.me/AgustinOrtu"
      target="_blank"
    >
      AgustinOrtu
    </a>
  </span>
</template>

<script>
import TelegramIcon from '../src/assets/icons/telegram.svg'

export default {
  components: { TelegramIcon },
}
</script>
```

El cual se renderiza así:

<div class="py-2">
  <span class="inline-flex items-center space-x-4">
    <TelegramIcon class="w-6 h-6 text-blue-400" />
    <a
      class="inline-block transition duration-150 ease-in-out border-b border-transparent hover:border-white"
      href="https://t.me/AgustinOrtu"
      target="_blank"
    >
      AgustinOrtu
    </a>
  </span>
</div>

También es posible utilizar el [componente dinámico de Vue](https://vuejs.org/v2/guide/components.html#Dynamic-Components), por ejemplo:

```vue
<template>
  <div class="pb-4">
    <div class="flex items-center space-x-4">
      <button @click="icon = 'ExternalLinkIcon'" :class="icon == 'ExternalLinkIcon' ? 'bg-indigo-700' : 'bg-indigo-500'" class="px-4 py-2 text-sm leading-5 text-white uppercase hover:bg-indigo-700 focus:outline-none focus:shadow-outline-indigo" type="button">External Link</button>
      <button @click="icon = 'TerminalIcon'" :class="icon == 'TerminalIcon' ? 'bg-indigo-700' : 'bg-indigo-500'" class="px-4 py-2 text-sm leading-5 text-white uppercase hover:bg-indigo-700 focus:outline-none focus:shadow-outline-indigo" type="button">Terminal</button>
      <div class="flex items-center space-x-4">
        <Component :is="icon" class="w-12 h-12 text-indigo-500" />
        <span>{{ icon }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import ExternalLinkIcon from 'heroicons/solid/external-link.svg'
import TerminalIcon from 'heroicons/solid/terminal.svg'

export default {
  components: { ExternalLinkIcon, TerminalIcon },

  data() {
    return {
      icon: 'ExternalLinkIcon'
    }
  },
}
</script>
```

El resultado es el siguiente:

<div class="pb-4">
  <div class="flex items-center space-x-4">
    <button @click="icon = 'ExternalLinkIcon'" :class="icon == 'ExternalLinkIcon' ? 'bg-indigo-700' : 'bg-indigo-500'" class="px-4 py-2 text-sm leading-5 text-white uppercase hover:bg-indigo-700 focus:outline-none focus:shadow-outline-indigo" type="button">External Link</button>
    <button @click="icon = 'TerminalIcon'" :class="icon == 'TerminalIcon' ? 'bg-indigo-700' : 'bg-indigo-500'" class="px-4 py-2 text-sm leading-5 text-white uppercase hover:bg-indigo-700 focus:outline-none focus:shadow-outline-indigo" type="button">Terminal</button>
    <div class="flex items-center space-x-4">
      <Component :is="icon" class="w-12 h-12 text-indigo-500" />
      <span>{{ icon }}</span>
    </div>
  </div>
</div>

<script>
import TelegramIcon from '../../src/assets/icons/telegram.svg'

import ExternalLinkIcon from 'heroicons/solid/external-link.svg'
import TerminalIcon from 'heroicons/solid/terminal.svg'

export default {
  components: {
    TelegramIcon,
    ExternalLinkIcon, TerminalIcon
  },

  data() {
    return {
      icon: 'ExternalLinkIcon'
    }
  },
}
</script>

En este caso, estoy utilizando el set de iconos [Heroicons](https://github.com/tailwindlabs/heroicons) diseñados por [Steve Schoger](https://twitter.com/steveschoger)
