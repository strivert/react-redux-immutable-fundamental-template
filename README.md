# react-redux fundamental

### 0. Set the file to be loaded from an absolute path

- .env: Set NODE_PATH
- jsconfig.json: Editor settings

### 1. Installing the package
```bash
$ yarn add redux react-redux redux-actions immutable
```

### 2. Create main component and root component

- components/
  - App.js
  - AppTemplate.js
  - Counter.js
  - Todos.js
- containers/
  - CounterContainer.js
  - TodosContainer.js
- Root.js

### 3. Create files to write Redux related code
- store
  - modules
    - counter.js
    - todo.js
    - index.js
  - configure.js
  - index.js
  - actionCreators.js