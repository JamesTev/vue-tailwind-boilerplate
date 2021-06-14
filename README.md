# Vue Boilerplate (WIP)

A simple Vue.js template with Tailwind CSS. Includes basic auth module, as well as an API and token storage service. Includes basic views for auth login/signup and onboarding. Also has some commonly-used, generic components and a few helper functions that seem to be useful across projects.

Some sample screens are available under `/samples`. More to come.

### Environment variables and configuration
Note that `.env.development` and `.env.production` files are not git ignored. You may want to change this to prevent exposing sensitive information. As the names imply, `.env.development` env variables will be loaded in the development environment, and those in `.env.production` for production.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
