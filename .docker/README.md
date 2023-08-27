# Vue docker

Contenedores docker para trabajar con Vue. Están pensados pasa usarlos en ambiente de desarrollo, no para un deploy productivo

- [Vue docker](#vue-docker)
  - [Requisitos](#requisitos)
  - [Estructura](#estructura)
  - [Configuración](#configuración)
    - [Importante para proyectos web que ejecuten el dev-server](#importante-para-proyectos-web-que-ejecuten-el-dev-server)
  - [Utilización](#utilización)
    - [`npm.sh`](#npmsh)
    - [`yarn.sh`](#yarnsh)

## Requisitos

* docker (preferentemente, v20.10 ó superior)
* docker compose (la v2 o superior)
  * No funciona con docker-compose (que seria la v1 de *docker compose*, legacy)

## Estructura

Los servicios provistos por los contenedores son:
  * Node:
    * node 14
    * npm 6.14.x
    * yarn 1.22.x
  * yarn-devserver: Ejecuta el comando `yarn serve` y expone el puerto indicado en la [configuración](#configuración) con el dev-server de Weback con hot-reloading
  * npm-devserver: Ejecuta el comando `npm run serve` y expone el puerto indicado en la [configuración](#configuración) con el dev-server de Weback con hot-reloading


## Configuración

El archivo `.env` permite cambiar ciertos parámetros de los diferentes contenedores:

|      Variable       |                      Descripcion                       | Valor por defecto |
| :-----------------: | :----------------------------------------------------: | :---------------: |
|         UID         | usuario/grupo con el que se ejecutan los comandos. (1) |       1000        |
|         GID         | usuario/grupo con el que se ejecutan los comandos. (1) |       1000        |
|       APP_DIR       |     ruta raiz en dónde está la aplicación.     (2)     |        ../        |
|   NODE_DOCKER_TAG   |   imágen docker que se utiliza para el servicio Node   |      node:14      |
| NODE_DEVSERVER_PORT |  puerto en dónde se expondrá el dev-server de webpack  |       8080        |

> (1) Se refiere al usuario del SO con el que corren los comandos; para aquellos comandos que generan/modifican archivos (por ej. composer) determina el grupo/usuario y los permisos correspondientes. Para evitar conflictos, se debería setear un valor apropiado en estas variables. [Más información](https://docs.docker.com/engine/reference/builder/#user)

> (2) Sobre `APP_DIR`:
> - El directorio **debe** existir antes de ejecutar algún contenedor (aunque esté vacio)
> - (2) En esta ruta se espera encontrar un proyecto Vue, package.json, etc.
> - (2) Puede ser una ruta relativa ó absoluta


Se provee un archivo `.env.example` con los valores por defecto. Se puede tomar como punto de partida y luego redefinir los valores de interes:

```sh
  cp .env.example .env
```

> Nota: el archivo .env está ignorado en este repositorio. Ver [.gitignore](.gitignore)

### Importante para proyectos web que ejecuten el dev-server

Es necesario agregar lo siguiente a `vue.config.js`, porque sino, el dev-server queda "oculto" dentro del contenedor y no se puede acceder (en pocas palabras, http://localhost:8080 no tiene nada).


```js
const isDocker = !!process.env.RUNNING_IN_DOCKER

let devServer = {}

if (isDocker) {
  devServer = {
    host: '0.0.0.0',
    watchFiles: { options: { poll: 1000 } },
  }
}

...

module.exports = {
  [otras configuraciones]

    configureWebpack: {
      devServer,
    },

  [otras configuraciones]
}
```

> `RUNNING_IN_DOCKER` es una variable de entorno que se setea en [docker-composer.yml](docker-compose.yml)

Si no se configura de ésta manera, no muestra ningún error ni nada, pero nos damos cuenta de que no funciona porque la aplicación Vue no va a poder ser accedida desde el host


## Utilización

### `npm.sh`

Scritp para ejecutar el contenedor `npm`:

Ejemplos:

```sh
  ./npm.sh install
  ./npm.sh run serve
```

### `yarn.sh`

Scritp para ejecutar el contenedor `yarn`:

Ejemplos:

```sh
  ./yarn.sh install
  ./yarn.sh serve
```
