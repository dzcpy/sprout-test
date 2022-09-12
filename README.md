<div align="center">
<img src="public/icon-128.png" alt="logo"/>
<h1> Sprout Test</h1>

![](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![](https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![](https://badges.aleen42.com/src/vitejs.svg)
![GitHub action badge](https://github.com/dzcpy/sprout-test/actions/workflows/build.yml/badge.svg)

</div>

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Intro <a name="intro"></a>](#intro-)
  - [Key challenges and highlights](#key-challenges-and-highlights)
- [Features <a name="features"></a>](#features-)
- [Installation <a name="installation"></a>](#installation-)
  - [Procedures <a name="procedures"></a>](#procedures-)
- [Screenshots <a name="screenshots"></a>](#screenshots-)
  - [Popup <a name="popup"></a>](#popup-)
- [Documentation <a name="documentation"></a>](#documentation-)

## Intro <a name="intro"></a>

This is the test project for Sprout.

### Key challenges and highlights

- Production quality code
- Uses best practices whenever is possible, detail oriented
- Faster build time and smaller bundle size by using `vite` and `rollup`. Is it a pun? :)
- Pixel perfect style as per Figma design (at least trying to be)
- The content panel is written in an `iframe`, to avoid CSS pollution from both sides
- Flexible `iframe` height, which is done by `window.postMessage`
- Developed with ❤

## Features <a name="features"></a>

- [React 18](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [SASS](https://sass-lang.com/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Chrome Extension Manifest Version 3](https://developer.chrome.com/docs/extensions/mv3/intro/)

## Installation <a name="installation"></a>

### Procedures <a name="procedures"></a>

1. Clone this repository.
2. Change `name` and `description` in package.json => **Auto synchronize with manifest**
3. Run `yarn` or `npm i` (check your node version >= 16)
4. Run `yarn dev` or `npm run dev`
5. Load Extension on Chrome
   1. Open - Chrome browser
   2. Access - chrome://extensions
   3. Check - Developer mode
   4. Find - Load unpacked extension
   5. Select - `dist` folder in this project (after dev or build)
6. If you want to build in production, Just run `yarn build` or `npm run build`.

## Screenshots <a name="screenshots"></a>

### Popup <a name="popup"></a>

![screenshot](https://user-images.githubusercontent.com/203980/189662099-71d1a443-4259-454f-b017-cdf21ba61d57.gif)

## Documentation <a name="documentation"></a>

- [Vite Plugin](https://vitejs.dev/guide/api-plugin.html)
- [ChromeExtension](https://developer.chrome.com/docs/extensions/mv3/)
- [Rollup](https://rollupjs.org/guide/en/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [React 18](https://reactjs.org/docs/getting-started.html)
- [rollup-plugin-chrome-extension](https://www.extend-chrome.dev/rollup-plugin)

---

[dzcpy](https://github.com/dzcpy)
