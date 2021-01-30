# Node/Express using typescript

### Boilerplate for using typescript in node. 

## Features
* Uses typescript
* Global error handling
* Request input validation using [Joi](https://github.com/hapijs/joi)
_ _ _ _

## Quick Start
## vscode://vscode.github-authentication/did-authenticate?windowid=15&code=3326d9de287368f72d73&state=1aadd0e7-b89c-4eff-bac9-bc59930d089c

## Install Redis for saving the topic subscription
* Open you're browser to https://medium.com/@petehouston/install-and-config-redis-on-mac-os-x-via-homebrew-eb8df9a4f298
* https://redis.io/topics/quickstart

Get started developing...

```shell
# install deps
npm install

# run in development mode
npm run watch

```
---

## Install Dependencies

Install all package dependencies (one time operation)

```shell
npm install
```

## Run It
#### Run in *development* mode:
Runs the application is development mode. Should not be used in production

```shell
npm run watch
```


#### Run in *production* mode:

Compiles the application and starts it in production mode.

```shell
npm run compile
npm start
```


## Try It
* Open you're browser to http://localhost:3000
* Invoke the `/` endpoint 
  ```shell
  curl http://localhost:3000/
  ```