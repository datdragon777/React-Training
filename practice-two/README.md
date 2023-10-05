# REACT PRACTICE TWO

## Description:

- Getting started with react hooks and advanced

## Targets:

- Apply react advanced
- Apply react hooks
- Error boundary
- Apply useContext and useReducer for statement
- Use a simple API service to get familiar with synchronous behaviors from real API, you can reach the API service section to explore the details

## Features:

- Render UI
- Call API (customer's list)
- Show infor detail of each customer
- Show context menu

## Design on figma:

[Figma](<https://www.figma.com/file/G8rQ1mN8oQSyNX0AtO1pEn/Admin-Dashboard-UI-Kit-(Community)?node-id=807%3A12064&mode=dev>)

## Requirments:

[Link](https://docs.google.com/document/d/1NKUkeOzYbv9VWXe4CGJbJI6IypWXaU60Llly4bPrGI0/edit?usp=sharing)

## Deploy:

- App: [Here](https://practice-one-react-training.vercel.app/)
- Storybook: [Here](https://storybook-react-practice-one.vercel.app/?path=/docs/components-account--docs)

## Information:

- Time line: 05/10/2023 -> 11/10/2023 (actually: 00/00/2023)
- Editor: Visual Studio Code
- Supported browser: Chrome lasted

## Environments:

- Node: v18.16.0
- Vite: Vite requires Node.js version 14.18+, 16+. However, some templates require a higher Node.js version to work, please upgrade if your package manager warns about it.

## Folder structure

practice-one

```
|-- .storybook
    |-- main.js
    |-- preview.js
|-- src
    |-- assets
        |-- fonts
            |-- ...
        |-- images
            |-- ...
            |-- index.js
    |-- components
        |-- Account
        |-- Button
        |-- Contact
        |-- ContactDetail
        |-- ContextMenu
        |-- CustomerInfo
        |-- CustomerItem
        |-- Gender
        |-- Info
        |-- Expand
        |-- TagLink
        |-- index.js
    |-- constants
        |-- ...
    |-- data
        |-- ...
    |-- layouts
        |-- ProfileInfo
        |-- Sidebar
        |-- index.js
    |-- pages
        |-- ...
        |-- index.js
    |-- router
        |-- ...
    |-- services
        |-- ...
    |-- styles
        |-- abtracts
            |-- all.css
            |-- typography.css
            |-- variables.css
        |-- bases
            |-- all.css
            |-- base.css
            |-- reset.css
        |-- index.css
    |-- themes
        |-- metrics.js
    |-- App.jsx
    |-- main.jsx
|-- .eslintrc.cjs
|-- .gitignore
|-- index.html
|-- package-lock.json
|-- package.json
|-- README.md
```

## Getting started:

- Step 01: Open PowerShell and install pnpm:
  - For window:
    ```
    iwr https://get.pnpm.io/install.ps1 -useb | iex
    ```
  - For POSIX systems:
    ```
    curl -fsSL https://get.pnpm.io/install.sh | sh -
    ```
    If you don't have curl installed, you would like to use wget:
    ```
    wget -qO- https://get.pnpm.io/install.sh | sh -
    ```
  - On Alpine Linux
    ```
    # bash
    wget -qO- https://get.pnpm.io/install.sh | ENV="$HOME/.bashrc" SHELL="$(which bash)" bash -
    # sh
    wget -qO- https://get.pnpm.io/install.sh | ENV="$HOME/.shrc" SHELL="$(which sh)" sh -
    # dash
    wget -qO- https://get.pnpm.io/install.sh | ENV="$HOME/.dashrc" SHELL="$(which dash)" dash -
    ```
- Step 02: Clone project:

```
git clone https://github.com/datdragon777/React-Training.git
```

- Step 03: Open project folder using VsCode
- Step 04: Change brach to feature/practice-one:

```
git checkout feature/practice-one
```

- Step 05: Move to project folder

```
cd practice-one/
```

- Step 06: Start using pnpm to install

```
pnpm i
```

- Step 07: Run project:

```
pnpm dev
```

- Step 08: Run storybook to check:

```
pnpm storybook
```
