---
title: "Vue: Componentes privados con JSX"
date: 2020-08-09
layout: post
---

## Vue: Componentes privados con JSX

En general, creo que la mejor manera de escribir aplicaciones Vue es usando [Single File Components (SFC)](https://vuejs.org/v2/guide/single-file-components.html). Escalan bien en proyectos pequeños, medianos y grandes, podemos usar [Scoped CSS]((https://vue-loader.vuejs.org/guide/scoped-css.html)) (básicamente, CSS con alcance límitado a dicho componente), son muy intuitivos y fáciles de usar, entre otras.

Algo que me gustaría que tengan es la posibilidad de que, del mismo modo que existe el `Scoped CSS`, poder tener *subcomponentes*, que sean privados a dicho SFC en cuestión. Por el momento, esto no es posible en un SFC, pero se pueden usar [render functions](https://vuejs.org/v2/guide/render-function.html).

> En realidad, un SFC simplemente es una forma más amigable de escribir estas funciones de renderización, ya que estos son luego traducidas a *render functions* cuando se construye la aplicación.

Se pueden "mezclar" los diferentes *approachs* sin ningún problema, es decir, podemos tener SFC y *render functions* coexistiendo sin ningún problema

Si tomamos el ejemplo de la [documentación](https://vuejs.org/v2/guide/render-function.html), vemos que se define, usando solo JS, un componente con un método **render**, que es el que, valga la redundancia, define como se renderizará el mismo:

```js
Vue.component('anchored-heading', {
  render: function (createElement) {
    return createElement(
      'h' + this.level,   // tag name
      this.$slots.default // array of children
    )
  },
  props: {
    level: {
      type: Number,
      required: true
    }
  }
})
```

El problema es que, obviamente, la forma de escribirlos es de muy bajo nivel, y además de engorrosa, podría ser hasta dificil para componentes no triviales como el ejemplo de arriba.

Existe una alternativa, [JSX](https://reactjs.org/docs/introducing-jsx.html) que nos brinda una API de mayor nivel para escribir estas funciones.

### JSX

No vale la pena entrar en detalle de qué es *JSX*, ya que la red está plagada de información al respecto. Con saber que simplemente es una manera de escribir *render functions* usando una API de mayor nivel de abstracción, es suficiente. Yo no la considero tan amigable como la de los SFC, pero en esas situaciones en las que se desea extraer un pequeño subcomponente, me resulta muy útil.

Entonces, la idea es poder hacer algo cómo esto:

```vue
<template>
  <div>
    ...
    <Subcomponent text="foo" @clicked="bar" />
  </div>
</template>

<script>
const Subcomponent = {
  props: {
    text: { type: String, required: true },
  },

  render() {
    return (
      <button type="button" onClick={() => this.$emit('clicked')}>
        {this.text}
      </button>
    )
  }
}
</script>
```

Es interesante destacar que JSX es muy dinámico, ya que básicamente estamos escribiendo JS, y podemos usar cualquier cosa que nos provee el lenguaje. Por ejemplo, el [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax), hace que pasar un objeto como propiedad sea mucho más sencillo.

En proyectos creados con [Vue CLI](https://cli.vuejs.org/), ya tenemos todo lo necesario para poder empezar a usar JSX. Si no es el caso, en éste [repositorio](https://github.com/vuejs/jsx#installation) se explica qué es lo que se debe instalar.

### Cheatsheet Vue <-> JSX

Si bien son similares, hay algunas cuestiones que en las que el paso de un SFC a JSX no es tan directo. Por eso decidí armarme un *cheatsheet* para tener de referencia para cuando no recuerdo cómo escribir algo en JSX.

> Nota: en el [repositorio](https://github.com/vuejs/jsx#installation) citado anteriormente hay más ejemplos.

#### Contenido

Lo más básico y elemental podría ser renderizar algún contenido que esté en variables del modelo/propiedades:

SFC:

```vue
<template>
  <div>
    <p>{{ foo }}</p>
    <p>{{ bar }}</p>
  </div>
</template>

<script>
export default {
  props: {
    foo: { type: String, required: true },
  },

  data() {
    return {
      bar: 'bar'
    }
  },
}
</script>
```

JSX:

```jsx
const Example = {
  props: {
    foo: { type: String, required: true },
  },

  data() {
    return {
      bar: 'bar'
    }
  },

  render() {
    return (
      <div>
        <p>{this.foo}</p>
        <p>{this.bar}</p>
      </div>
    )
  }
}
```

Es similar a un SFC, solo que en lugar de `{{ var|prop }}`, es `{this.var|prop}`

#### Binding

En un SFC usamos `v-bind:` o la forma abreviada `:` para *bindear* el valor de una variable o propiedad computada:

```vue
<template>
  <div>
    <UserProfile :user="user" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: 'John Doe',
      },
    }
  }
}
</script>
```

Y el componente `UserProfile`:

```vue
<template>
  <div>{{ user.name }}</div>
</template>

<script>
export default {
  props: {
    user: { type: Object, required: true },
  },
}
</script>
```

En JSX, el componente `UserProfile` sería así:

```jsx
const UserProfile = {
  props: {
    user: { type: Object, required: true },
  },

  render() {
    return (
      <div>{this.user.name}</div>
    )
  }
}
```

#### Eventos

En un SFC usamos `v-on:`, o la forma abreviada `@` para asignar un manejador a un evento. Por ejemplo:

```vue
<template>
  <button type"button" @click="search">Search</button>
</template>

<script>
export default {
  methods: {
    search() {
      ...
    }
  }
}
</script>
```

En JSX:

```jsx
const Example = {
  render() {
    return (
      <button
        type="button"
        onClick={() => this.search}
      >
        Search
      </button>
    )
  },

  methods: {
    search() {
      ...
    }
  }
}
```

En este caso utilicé un callback, aunque ésto no siempre es necesario. En particular, éste ejemplo también es válido de la siguiente forma:

```jsx
const Example = {
  render() {
    return (
      <button type="button" onClick={this.search}>Search</button>
    )
  },

  methods: {
    search() {
      ...
    }
  }
}
```

Es simplemente una convención, dado que en general, cuando manejamos eventos, es necesario acceder a algún parámetro que el evento envía, entonces:

```jsx
const Example = {
  render() {
    return (
      <input type="text" onChange={event => this.handler} />
    )
  },

  methods: {
    handler(event) {
      console.log(event.target.value)
    }
  }
}
```

#### Binding de `class` y `style`

Tal y como se menciona en la [documentación](https://vuejs.org/v2/guide/class-and-style.html), algo muy común es tener que modificar los atributos `class` y `style` de un elemento HTML; es por eso que Vue provee algunos mecanismos especiales para `v-bind` cuando se trata de estos atributos.

*  [Object Syntax](https://vuejs.org/v2/guide/class-and-style.html#Object-Syntax)

Ésta sintaxis nos permite utilizar un objeto para especificar que clase queremos que se active/desactive (*toggle*, en la jerga) cuando una determinada propiedad evalua a `true`. El ejemplo de la documentación:

```vue
<template>
  <div v-bind:class="{ active: isActive }">...</div>
</template>
```

A mí en particular me gusta utilizar la forma abreviada de `v-bind`. También prefiero poner la clase, en este caso, `active`, como string, debido a que de esa manera es más claro:

```vue
<template>
  <div :class="{ 'active': isActive }">...</div>
</template>
```

Basicamente, si la propeidad `isActive` evalua a `true`, Vue agregará la clase `"active"` al `div`.

Por supuesto que podemos usar un objeto con múltiples propiedades:

```vue
<template>
  <div
    :class="{ 'active' : isActive, 'text-red-500' : hasError }"
  >
    ...
  </div>
</template>
```

*  [Array Syntax](https://vuejs.org/v2/guide/class-and-style.html#Array-Syntax)

Ésta forma nos permite emplear un arreglo para aplicar una lista de clases:

```vue
<template>
  <div :class="[activeClass, errorClass]">...</div>
</template>

<script>
export default {
  data() {
    return {
      activeClass: 'active',
      errorClass: 'text-red-500'
    }
  }
}
</script>
```

Lo cual genera el siguiente HTML:

```html
  <div class="text-red-500 active">...</div>
```

También es posible utilizar el [operador ternario](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) para activar alguna clase de forma condicional:

```vue
<template>
  <div :class="[isActive ? 'active' : '', errorClass]">...</div>
</template>
```

De ésta manera, si `isActive` evalua a `true`, entonces aplica la clase `"active"`, caso contrario, como la expresión devuelve un string vacio, no aplica nada; y luego la clase evalua la expresión `errorClass` la cual devolverá alguna clase derivada de una propiedad del `data` o `computed`

Notar que si tenemos que manejar una sola clase, es posible utilizar el operador ternario sin necesidad de tener el array:

```vue
<template>
  <div :class="isActive ? 'active' : ''">...</div>
</template>
```

Por último, también destacar que cuando bindeamos `":class"`, Vue no "pisa" el atributo `"class"` del elemento HTML, sino que los concatena. Es decir, modificando un poco el ejemplo anterior:

```vue
<template>
  <div class="card" :class="isActive ? 'active' : ''">...</div>
</template>
```

Genera el siguiente HTML, si `isActive` evalua a `true`:

```html
  <div class="card active">...</div>
```

Y, si `isActive` evalua a `false`:

```html
  <div class="card">...</div>
```

Es decir, la clase `"card"` siempre está

#### Binding de `class` y `style` en JSX

Ahora bien, ¿algún mecánismo similar, "especial", para llevar éstos ejemplos a JSX?. Bueno, la realidad es que no tenemos nada "especial". La única manera es usando el *binding* común y corriente de JSX, interpolando y usando [template strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals):

```jsx
  <div class={`${isActive ? 'active' : ''}`}>...</div>
```

```jsx
  <div class={`active ${hasError ? 'text-red-500' : ''}`}>...</div>
```

#### Componentes

Por supuesto que un componente escrito con JSX puede contener a otros componentes.. independientemente de si son JSX o SFC. Hay que recordar que simplemente son diferentes APIs, pero que en el fondo, todo se reduce a *render functions*.

En SFC:

* Parent:

```vue
<template>
  <div>
    <Child />
    <Child />
  </div>
</template>

<script>
import Child from './Child'

export default {
  components: { Child },
}
</script>
```

* Child:

```vue
<template>
  <div>...</div>
</template>
```

Traducido a JSX:

```jsx
const Child = {
  render() {
    return (
      <div>...</div>
    )
  }
}

const Parent = {
  render() {
    return (
      <div>
        <Child />
        <Child />
      </div>
    )
  }
}
```

> Notar que no es necesario especificar en Parent `components`, que componentes hijos va a tener el componente padre, como sí es el caso en SFC

#### Componente dinámico

En Vue, tenemos un componente especial, el [componente dinámico](https://vuejs.org/v2/guide/components.html#Dynamic-Components).

En SFC, sería algo así:

```vue
<template>
  <div>
    <Component :is="icon" class="...">
  </div>
</template>

<script>
const icons = {
  foo: 'FooIcon',
  bar: 'BarIcon',
}

import FooIcon from '@/assets/icons/foo.svg'
import BarIcon from '@/assets/icons/bar.svg'

export default {
  components: { FooIcon, BarIcon },

  props: {
    type: { type: String, required: true },
  },

  computed: {
    icon() {
      return icons[this.type]
    }
  }
}
</script>
```

En JSX, es completamente diferente, ya que directamente no tenemos este `component` especial. Por lo tanto, un equivalente, sigue el siguiente patrón:

```jsx
import FooIcon from '@/assets/icons/foo.svg'
import BarIcon from '@/assets/icons/bar.svg'

const Example = {
  props: {
    type: { type: String, required: true },
  },

  render() {
    const icons = {
      foo: 'FooIcon',
      bar: 'BarIcon',
    }

    // equivalente a <Component :is="icons[tipo]" />
    const Component = icons[this.type]

    return (
      <div>
        <Component class="...">
      </div>
    )
  }
}
```

> El nombre de la constante `Component` es arbitrario, podría ser cualquier cosa

#### Loops

En SFC utilizamos la directiva `v-for` para recorrer una colección y renderizar una lista de elementos:

```vue
<template>
  <div>
    <ul>
      <li v-for="item in items" :key="item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        'foo',
        'bar',
      ]
    }
  }
}
</script>
```

En JSX, debemos usar JavaScript para *loopear*. Una forma es el método [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) de `Array`

```jsx
const Example = {
  data() {
    return {
      items: [
        'foo',
        'bar',
      ]
    }
  },

  render() {
    return (
      <div>
        <ul>
          {this.items.map(item => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    )
  }
}
```

> Notar que no es necesario indicar el atributo `key`

#### Condicionales

En un SFC se utiliza la directiva `v-if`:

```vue
<template>
  <div>
    <button type="button" @click="deleteItem" v-if="hasAccess">Delete Item</button>
  </div>
</template>

<script>
export default {
  props: {
    user: { type: Object, required: true },
  },

  methods: {
    deleteItem() {
      ...
    }
  },

  computed: {
    hasAccess() {
      this.user.isAdmin
    },
  },
}
</script>
```

En JSX, al igual que el caso de los *loops*, usamos JavaScript:

```jsx
const Example = {
  props: {
    user: { type: Object, required: true },
  },

  methods: {
    deleteItem() {
      ...
    }
  },

  computed: {
    hasAccess() {
      this.user.isAdmin
    },
  },

  render() {
    return (
      <div>
        {this.hasAccess && (
          <button type="button" onClick={() => this.deleteItem}>
            Delete Item
          </button>
        )}
      </div>
    )
  },
}
```

Es posible escribir algún condicional más complejo:

```jsx
const Example = {
  render() {
    return (
      <div>
        {(this.hasAccess || this.isDevelopment) && (
          <button type="button" onClick={() => this.deleteItem}>
            Delete Item
          </button>
        )}
      </div>
    )
  },
}
```

#### Slots

En SFC:

* Parent:

```vue
<template>
  <div>
    <Child>
      <p>Foo</p>
      <p>Bar</p>
    </Child>
  </div>
</template>

<script>
import Child from './Child'

export default {
  components: { Child },
}
</script>
```

* Child:

```vue
<template>
  <div>
    <slot></slot>
  </div>
</template>
```

Traducido a JSX:

```jsx
const Child = {
  render() {
    return (
      <div>{this.$slots.default}</div>
    )
  }
}
```

### Links de interés

Referencias, más ejemplos, más material...

* [Babel Preset JSX](https://github.com/vuejs/jsx)
* [Using JSX with Vue](https://blog.logrocket.com/using-jsx-with-vue/)
* [Using JSX with Vue and Why You Should Car](https://scotch.io/tutorials/using-jsx-with-vue-and-why-you-should-care#toc-vue-s-jsx-syntax-gotchas)
* [https://alligator.io/vuejs/jsx-render-functions/](https://alligator.io/vuejs/jsx-render-functions/)
