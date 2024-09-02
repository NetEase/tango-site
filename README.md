# Tango Website

This repo is documentation site for [netease/tango](https://github.com/NetEase/tango) project.

Site link: <https://netease.github.io/tango-site/>

## Installation

```bash
yarn
```

## Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### i18n

Translate plugin data

```bash
npm run write-translations -- --locale zh-Hans
```

Translate docs

```bash
mkdir -p i18n/zh-Hans/docusaurus-plugin-content-docs/current
cp -r docs/** i18n/zh-Hans/docusaurus-plugin-content-docs/current
```

Translate blog

```bash
mkdir -p i18n/zh-Hans/docusaurus-plugin-content-blog
cp -r blog/** i18n/zh-Hans/docusaurus-plugin-content-blog
```

## Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
