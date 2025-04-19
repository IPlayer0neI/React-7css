# React Components Library with 7.css Styling

[![npm version](https://img.shields.io/npm/v/your-component-library.svg)](https://www.npmjs.com/package/your-component-library)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

A collection of React components styled with [7.css](https://github.com/khang-nd/7.css), a minimalist CSS framework for building interfaces that look like Windows 98.

## Features

- 🖥️ Pre-styled React components with Windows 98 aesthetic
- 😳 Built using 7.css class names and styling conventions
- 👍 Easy integration with existing React projects
- 📦 Lightweight and dependency-free
- 🛠️ Customizable through CSS class overrides

## Installation

```bash
npm install React-7css 7.css
# or
yarn add React-7css 7.css
```
## Quick Start
1. Import 7.css in your root component:
```js
// App.jsx
import '7.css';
```
2. Import the components, they all end with the number 7, example: Ballon7, Button7, Window7. All components accept common properties of html elements.

```js
import { StatusBar7, StatusBarField7, TitleBar7, TitleBarControls7, TitleBarText7, Window7, WindowBody7 } from "react-7css";

export function App() {
    return (
        <Window7 active>
            <TitleBar7 >
                <TitleBarText7 >
                    <img src="icon.png" />
                    widnow title
                </TitleBarText7>
                <TitleBarControls7 controls={["maximize", "minimize", "close"]} />
            </TitleBar7>
            <WindowBody7 space>
                Window body
            </WindowBody7>
            <StatusBar7>
                <StatusBarField7>
                    123
                </StatusBarField7>
                    456
                <StatusBarField7>
                    789
                </StatusBarField7>
                <StatusBarField7>
                    101112
                </StatusBarField7>
            </StatusBar7>
        </Window7>
    );
}
```