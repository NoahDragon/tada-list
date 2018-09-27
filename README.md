# Ta-Da List

Yet another MV* TODO list.

The front-end is using React/Redux, and the back-end is using the Python Flask framework.


## Prerequisites

Please make sure the following components have successfully installed on target machine:

* Python 3.5
* Node 8
* NPM
* Git

## File Structure

Here are the main folders and files for this project.

```
App
 ├-server                     **Backend Flask server source files**
 │   ├-app.py                 **Server entry point**
 │   ├-data.json              **Data store file**
 │   └-data.json.template     **Data store initialize file**
 ├-src                        **Frontend source files**
 │   ├-actions
 │   ├-components
 │   ├-constants
 │   ├-containers
 │   ├-middleware             **Middleware to connect redux with flask**
 │   ├-reducers
 │   └-index.js               **Frontend entry point**
 ├-index.html                 **Template for main page**
 ├-package.json               **Nodejs package info & command for the App**
 ├-requirments.txt            **Python package file**
 └-webpack.config.js          **Webpack configuration to build front end**
```

## Installation

**Recommanded steps on MacOS**

1. Download the source code:
```sh
git clone https://github.com/NoahDragon/tada-list.git tada
```
2. Install dependencies:
```sh
cd tada
pip install -r requirements.txt
npm install --no-optional
```
3. Build:
```sh
npm run build # In win32, this command has tested in CMD terminal.
```
4. Start the server:
```sh
npm run server # In win32, this command has tested in CMD terminal.
```

## Test

1. Run lint:
```sh
npm run lint
```
Only run python lint:
```sh
npm run lint-py # TODO: Fix the exception calling this command.
```
Only run javascript lint:
```sh
npm run lint-js
```
2. Run test:
```sh
npm run test
```
Only run python test:
```sh
npm run test-py
```
Only run javascript test:
```sh
npm run test-js # TODO: Have NOT implemented.
```

## TODO

- [x] Add create date and amend date
- [x] Clean up code for submission
- [ ] Pretty the UI
- [ ] Fix pytest issue
- [ ] Implement javascript tests
- [ ] Responsive
- [ ] Drag to change order
- [ ] Integrate with Travis-CI for testing
- [ ] Delete item
- [ ] Save lists based on user name
- [ ] Able to modify the list (change text)
- [ ] Error handling on corrupt data file
