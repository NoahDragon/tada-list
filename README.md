# **WIP DRAFT**

# Ta-Da List

Yet another MV* TODO list.


## Prerequisites

Please make sure the following components have successfully installed on target machine:

* Python 3.5
* Node 8
* NPM
* Git


## Installation

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

