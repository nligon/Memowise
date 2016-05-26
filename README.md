# Wonky Mongoose

> Pithy project description

## Team

  - __Product Owner__: Alex Wong
  - __Scrum Master__: Matt Vargeson
  - __Development Team Members__: Peter Chim, David Valles

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Team](#team)
1. [Contributing](#contributing)

## Usage

The following commands are found in `package.json`.

### Commands

#### clean

```sh
$ npm run clean
```
Removes the folder `dev/`.

> To remove `dist/`, use: `npm run clean -- --dist`

#### watch

```sh
$ npm run watch
```
Watches all source files and rebuilds on a change event.

#### build

```sh
$ npm run build
```
Builds the entire application to `dev/`.

> Use `npm run build:dist` to build to `dist/`.

#### start

```sh
$ npm start
```
Starts the Express server in `dev/` using `nodemon`.

#### server

```sh
$ npm run server:dist
```
Starts the Express server.

> Use `npm run build:dist` to build to `dist/`.

## Requirements

- Node 0.10.x
- Redis 2.6.x
- Postgresql 9.1.x
- etc
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
sudo npm install -g bower
npm install
bower install
```

### Roadmap

View the project roadmap [here](LINK_TO_PROJECT_ISSUES)


## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
